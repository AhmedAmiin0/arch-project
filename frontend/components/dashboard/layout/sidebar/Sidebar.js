import { Home, ModeNight } from "@mui/icons-material";
import {
  Box,
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
import React from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Image from "next/image";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GroupIcon from "@mui/icons-material/Group"; // import TreeItem from '@mui/lab/TreeItem';
// import TreeView from '@mui/lab/TreeView';

export const Hr = styled("hr")(({ theme }) => ({
  margin: "24px 0px",
  flexShrink: 0,
  borderWidth: "0px 0px thin",
  borderStyle: "solid",
  borderColor: theme.palette.secondary.main,
}));
export default function Sidebar({
  mode,
  setMode,
  sidebarVisible,
  setSidebarVisible,
}) {
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
    transition: "left 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
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

  return (
    <Box
      sx={{
        flex: "0 0 auto",
      }}
    >
      <SideBarBox>
        <Link href={"/admin"}>
          <Stack>
            <Box position={"relative"} p={"24px"}>
              <div
                style={{
                  height: "64px",
                  width: "64px",
                  cursor: "pointer",
                }}
              >
                <Image src={"/logo.png"} width="100%" height={"100%"} />
              </div>
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
                    <SideBarAgencyNameBox>Hograt</SideBarAgencyNameBox>
                  </Typography>
                </Link>
              </div>
            </Box>
          </Stack>
        </Link>
        <Hr />
        <List>
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
          <Link href={"/admin/home"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/about"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Page" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"/admin/contact"}>
            <ListItem disablePadding onClick={() => setSidebarVisible(false)}>
              <ListItemButton>
                <ListItemIcon>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Page" />
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
