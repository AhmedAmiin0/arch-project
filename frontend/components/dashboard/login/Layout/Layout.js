import {Box, createTheme, ThemeProvider} from "@mui/material";
import {theTheme} from "../../TheTheme";
import Navbar from "../../layout/navbar/Navbar";
export default function Layout({children}) {
    const theme = createTheme(theTheme);
    return <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} color={"text.primary"}  >
            <Navbar theme={theme}/>
            {children}
        </Box>
    </ThemeProvider>;
}