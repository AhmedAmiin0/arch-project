import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HighlightedSectionStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row'
  },
  '& >div': {
      margin:'10px'  
  },
}))  