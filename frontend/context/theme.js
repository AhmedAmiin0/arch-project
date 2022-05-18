import {useState, createContext} from "react";
import {ThemeProvider} from "styled-components";
// import {StateProvider, ThemeProvider} from "./store";

export const theme = {
    bg: '255,255,255',
    text: '0,0,0'
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
