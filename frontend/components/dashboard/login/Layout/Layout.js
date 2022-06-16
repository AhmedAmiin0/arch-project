import { Box, createTheme, ThemeProvider } from "@mui/material";
import { theTheme } from "../../TheTheme";
import Navbar from "../../layout/navbar/Navbar";
import styled from "@emotion/styled";
export default function Layout({ children }) {
  const theme = createTheme(theTheme);
  const LoginContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }));
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <LoginContainer>{children}</LoginContainer>
      </Box>
    </ThemeProvider>
  );
}
