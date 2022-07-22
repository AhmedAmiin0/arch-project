import { ExpandLess, ExpandMore, Home, ModeNight } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GroupIcon from "@mui/icons-material/Group";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { GlobalContext } from "../Layout";
import OutboxIcon from "@mui/icons-material/Outbox";
import MenuIcon from "@mui/icons-material/Menu";

export const Hr = styled("hr")(({ theme }) => ({
  margin: "24px 0px",
  flexShrink: 0,
  borderWidth: "0px 0px thin",
  borderStyle: "solid",
  borderColor: theme.palette.secondary.main,
}));
export default function Sidebar({ sidebarVisible, setSidebarVisible, theme }) {
  const SideBarBox = styled(Box)(({ theme }) => ({
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    overflowY: " auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: 1,
    zIndex: 1100,
    position: "fixed",
    top: "0px",
    outline: "0px",
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.secondary} `,
    color: theme.palette.text,
    width: "280px",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
    left: "0px",
    [theme.breakpoints.down("md")]: {
      left: sidebarVisible == false ? "-280px" : "0px",
    },
  }));
  const SideBarAgencyNameBox = styled("div")(({ theme }) => ({
    textAlign: "start",
    margin: "0px",
    padding: "11px 24px",
    backgroundColor: theme.palette.background.transparent,
    borderBottom: `1px solid ${theme.palette.secondary} `,
    borderRadius: "8px",
  }));
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [globalData, setGlobalData] = useContext(GlobalContext);

  return (
    <Box
      sx={{
        flex: "0 0 auto",
      }}
    >
      <SideBarBox>
        <Stack>
          <Box position={"relative"} p={"24px"}>
            <Stack
              sx={{
                justifyContent: "space-between",
              }}
              direction={"row"}
            >
              <Link href={"/admin"}>
                <img
                  src={globalData?.global?.logo?.src ?? "/logo.png"}
                  alt={"logo"}
                  style={{
                    cursor: "pointer",
                    width: "64px",
                  }}
                />
              </Link>
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
                onClick={() => setSidebarVisible(false)}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <div
              style={{
                padding: "0 16px",
              }}
            >
              <Link href={"/admin/global"}>
                <Typography
                  variant={"h6"}
                  onClick={() => setSidebarVisible(false)}
                >
                  <SideBarAgencyNameBox>
                    {globalData?.global?.name && globalData?.global?.name != ""
                      ? globalData?.global?.name
                      : "Hojrat"}
                  </SideBarAgencyNameBox>
                </Typography>
              </Link>
            </div>
          </Box>
        </Stack>
        <Hr />
        <List>
          <ListItemButton onClick={() => setIsPagesOpen(!isPagesOpen)}>
            <ListItemIcon>
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
            {isPagesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isPagesOpen} timeout="auto">
            <List component="div" disablePadding>
              <Link href={"/admin/home"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>
              <Link href={"/admin/about"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </Link>
              <Link href={"/admin/contact"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ContactPageIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <Link href={"/admin/services"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/categories"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/projects"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/feedbacks"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <RssFeedIcon />
                </ListItemIcon>
                <ListItemText primary="Feedbacks" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/corporates"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <CorporateFareIcon />
                </ListItemIcon>
                <ListItemText primary="Corporates" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/banners"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Banners" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/users"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItemButton onClick={() => setIsMessagesOpen(!isMessagesOpen)}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
            {isMessagesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isMessagesOpen} timeout="auto">
            <List component="div" disablePadding>
              <Link href={"/admin/messages"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <OutboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact us" />
                </ListItemButton>
              </Link>
              <Link href={"/admin/advertisements"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Advertisements" />
                </ListItemButton>
              </Link>
              <Link href={"/admin/emails"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AlternateEmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Subscription Emails" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          {/* <ListItem disablePadding>
            <ListItemButton
            >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem> */}
        </List>
      </SideBarBox>
    </Box>
  );
}
