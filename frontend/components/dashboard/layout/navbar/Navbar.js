import {AppBar, Avatar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({theme}) {
    return <AppBar position="sticky"
                   sx={{
                       zIndex: 5,
                   }}
    >
        <Toolbar
            sx={{
                color: theme.palette.text.main,
                backgroundColor: theme.palette.background.paper,
                boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.2)',
                borderBottom: theme.palette.secondary.main,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 1rem',
            }}
        >
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                    mr: 2,
                    [theme.breakpoints.up('md')]: {
                        zIndex: '-1',
                        opacity: 0
                    }
                }}

            >
                <MenuIcon/>
            </IconButton>
            <Avatar alt="Cindy Baker" src="/feedback1.webp"/>
        </Toolbar>

    </AppBar>
}