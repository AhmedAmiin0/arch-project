import { theTheme } from "../TheTheme";
import { Box, createTheme, Stack, styled, ThemeProvider } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { SweetAlertProvider } from "../../../context/NotificationsContext";
export default function Layout({ children }) {
  const theme = createTheme(theTheme);
  const DashBoardContainer = styled(Box)(({ theme }) => ({
    flex: 6,
    [theme.breakpoints.up('md')]: {
      paddingLeft: '280px',
      paddingTop: '100px',
    },
  }));
  return <ThemeProvider theme={theme}>
    <SweetAlertProvider>
      <Box bgcolor={"background.default"} color={"text.main"}>
        <Navbar theme={theme} />
        <Stack direction="row" display={'flex'} justifyContent="space-between"
          sx={{ height: "100vh" }}>
          <Sidebar />
          <DashBoardContainer>
            <Box
              sx={{
                padding: '0 24px',
                backgroundColor: 'background.default',
                margin: '0 auto'
              }}>
              {children}
            </Box>
          </DashBoardContainer>
        </Stack>
      </Box>
    </SweetAlertProvider>
  </ThemeProvider>
}