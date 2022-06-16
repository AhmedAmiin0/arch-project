import { theTheme } from "../TheTheme";
import { Box, createTheme, Stack, styled, ThemeProvider } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { SweetAlertProvider } from "../../../context/NotificationsContext";
import NextNProgress from "nextjs-progressbar";
import { createContext, useEffect, useState } from "react";
import { UserProvider } from "../../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../config/axios";
import { useRouter } from "next/router";

// export const SidebarContext = createContext(true)

export default function Layout({ children }) {
  const theme = createTheme(theTheme);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [user, setUser] = useState(null);
  const { isLoggedIn, checkAuth } = useAuth();
  const router = useRouter();
  const DashBoardContainer = styled(Box)(({ theme }) => ({
    flex: 6,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "280px",
      paddingTop: "100px",
    },
  }));
  useEffect(() => {
    axios
      .get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => setUser(res.data));
  }, [isLoggedIn]);
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
      {/* <SidebarContext.Provider value={[sidebarVisable, setSidebarVisable]}> */}
      <SweetAlertProvider>
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
            // sx={{ height: "100%", }}
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
      </SweetAlertProvider>
      {/* </SidebarContext.Provider> */}
    </ThemeProvider>
    // </UserProvider>
  );
}
