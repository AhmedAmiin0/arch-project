import {
  AppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "../../../../config/axios";
import { useRouter } from "next/router";
import {
  errorAlertAction,
  notificationContext,
} from "../../../../context/NotificationsContext";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Logout, PersonAdd } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
export default function Navbar({ theme, setSidebarVisible,user }) {
  const { logout, loading } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    if (!loading) logout();
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: 5,
      }}
    >
      <Toolbar
        sx={{
          color: theme.palette.text.main,
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.2)",
          borderBottom: theme.palette.secondary.main,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            [theme.breakpoints.up("md")]: {
              zIndex: "-1",
              opacity: 0,
            },
          }}
          onClick={() => setSidebarVisible(true)}
        >
          <MenuIcon />
        </IconButton>
        <Stack direction={"row"} spacing={2}>
          <Avatar
            alt={user?.avatar?.name}
            src={user?.avatar?.src}
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          />
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Typography variant={"body2"}
              >
                {user?.name}
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              Settings
            </MenuItem>
            

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
