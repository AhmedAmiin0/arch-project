import {
  AppBar,
  Avatar,
  Button,
  IconButton,
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
import { useContext } from "react";
import { UserContext } from "../Layout";
export default function Navbar({ theme, setSidebarVisible }) {
  const [notify, dispatch] = useContext(notificationContext);
  // const {user} = useContext(UserContext);
  const router = useRouter();
  // console.log(user)
  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      router.push("/admin/login");
    } catch (e) {
      console.log(e);
      dispatch(errorAlertAction("could not logout"));
    }
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
          >
            <LogoutIcon fontSize={"small"} />
          </IconButton>
          {/* <Avatar alt={user?.avatar?.name} src={user?.avatar?.src} /> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
