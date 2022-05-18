import {Box, styled} from "@mui/material";

export const ContentPageContainer = styled(Box)(({theme}) => ({
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        maxWidth: '1000px',
    },
}));
export const ContentPageFlexBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
    padding: '32px 24px',
    borderRadius: '8px',
    marginBottom: '32px',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));