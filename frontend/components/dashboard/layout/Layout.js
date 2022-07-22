import { theTheme } from "../TheTheme";
import { Box, createTheme, Stack, styled, ThemeProvider } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { SweetAlertProvider } from "../../../context/NotificationsContext";
import NextNProgress from "nextjs-progressbar";
import { createContext, useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

export const GlobalContext = createContext(null);
export const SET_ALL_GLOBALS = "SET_ALL_GLOBALS";
export const SET_USER = "SET_USER";
export const SET_GLOBAL_DATA = "SET_GLOBAL_DATA";
export const UNSET_ALL_GLOBALS = "UNSET_ALL_GLOBALS";

export const SetAllGlobals = (data) => ({
  type: SET_ALL_GLOBALS,
  global: data,
  user: data.user,
});
export const SetUserData = (data) => ({ type: SET_USER, user: data });

export const SetGlobalData = (data) => ({
  type: SET_GLOBAL_DATA,
  global: data,
});

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_GLOBALS:
      return {
        ...state,
        global: action.global,
        user: action.user,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_GLOBAL_DATA:
      return {
        ...state,
        global: action.global,
      };
    default:
      return state;
  }
};
export default function Layout({ children, data }) {
  const theme = createTheme(theTheme);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [globalData, setGlobalData] = useReducer(reducer, {});
  const router = useRouter();
  const { locale } = router;
  const DashBoardContainer = styled(Box)(({ theme }) => ({
    flex: 6,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "280px",
      paddingTop: "100px",
    },
  }));
  useEffect(() => {
    setGlobalData(SetAllGlobals(data));
  }, [locale]);
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color="rgb(80, 72, 229)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <SweetAlertProvider>
        <GlobalContext.Provider value={[globalData, setGlobalData]}>
          <Box bgcolor={"background.default"} color={"text.main"}>
            <Navbar
              theme={theme}
              setSidebarVisible={setSidebarVisible}
              sidebarVisible={sidebarVisible}
            />
            <Stack
              direction="row"
              display={"flex"}
              justifyContent="space-between"
              sx={{ height: "100vh" }}
            >
              <Sidebar
                theme={theme}
                setSidebarVisible={setSidebarVisible}
                sidebarVisible={sidebarVisible}
              />
              <DashBoardContainer>
                <Box
                  sx={{
                    padding: "0 24px",
                    backgroundColor: "background.default",
                    margin: "0 auto",
                  }}
                >
                  {children}
                </Box>
              </DashBoardContainer>
            </Stack>
          </Box>
        </GlobalContext.Provider>
      </SweetAlertProvider>
    </ThemeProvider>
  );
}
