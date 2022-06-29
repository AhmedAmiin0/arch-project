import { theTheme } from "../TheTheme";
import { Box, createTheme, Stack, styled, ThemeProvider } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { SweetAlertProvider } from "../../../context/NotificationsContext";
import NextNProgress from "nextjs-progressbar";
import { createContext, useEffect, useState } from "react";
import { UserProvider } from "../../../context/AuthContext";
import axios from "../../../config/axios";
import { useRouter } from "next/router";
import useAuth from "../../../hooks/useAuth";

// export const SidebarContext = createContext(true)
export const UserContext = createContext(null);
export const GlobalContext = createContext(null);

export default function Layout({ children, data }) {
  const theme = createTheme(theTheme);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [globalData, setGlobalData] = useState(data);
  console.log(data);
  const { logout } = useAuth();
  const DashBoardContainer = styled(Box)(({ theme }) => ({
    flex: 6,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "280px",
      paddingTop: "100px",
    },
  }));
  // useEffect(() => {
  //   axios
  //     .get("/user")
  //     .then((res) => {
  //       setUser(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //         if (err.status === 401) logout();
  //       });
  //   }, []);
  // useEffect(() => {
  //   axios
  //     .get("/global")
  //     .then((res) => {
  //       setGlobalData(res?.data?.data);
  //       // console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       if (err.status === 401) logout();
  //     });
  // }, []);
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
          <GlobalContext.Provider value={[ globalData, setGlobalData ]}>
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
