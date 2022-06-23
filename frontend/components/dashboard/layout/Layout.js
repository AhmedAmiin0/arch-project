import { theTheme } from "../TheTheme";
import { Box, createTheme, Stack, styled, ThemeProvider } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { SweetAlertProvider } from "../../../context/NotificationsContext";
import NextNProgress from "nextjs-progressbar";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../../config/axios";
import { useRouter } from "next/router";
export const UserContext = createContext({
  user: "",
  setUser: () => {},
});
const DashBoardContainer = styled(Box)(({ theme }) => ({
  flex: 6,
  [theme.breakpoints.up("md")]: { paddingLeft: "280px", paddingTop: "100px" },
}));

export default function Layout({ children }) {
  const theme = createTheme(theTheme);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("/user")
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       axios.post("/logout").then(() => {
  //         router.push("/admin/login");
  //       });
  //     });
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <NextNProgress
          color="rgb(80, 72, 229)"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
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
              sx={{ height: "100vh", transition: "1s" }}
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
      </UserContext.Provider>
    </ThemeProvider>
  );
}
