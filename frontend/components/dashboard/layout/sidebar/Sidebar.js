import { Home, ModeNight } from '@mui/icons-material'
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
  Typography
} from '@mui/material'
import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Image from 'next/image'
import Link from 'next/link'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
// import TreeItem from '@mui/lab/TreeItem';
// import TreeView from '@mui/lab/TreeView';


export const Hr = styled('hr')(({ theme }) => ({
  margin: '24px 0px',
  flexShrink: 0,
  borderWidth: '0px 0px thin',
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main
}))
export default function Sidebar({ mode, setMode, visable }) {
  const SideBarBox = styled(Box)(({ theme }) => ({
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: 'none',
    overflowY: ' auto',
    display: 'flex',
    flexDirection: "column",
    height: '100%',
    flex: 1,
    zIndex: 1100,
    position: 'fixed',
    top: '0px',
    outline: '0px',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.secondary} `,
    color: theme.palette.text,
    width: '280px',
    '&::-webkit-scrollbar': {
      width: '0em',
    },
    left: visable && visable == true ? '0px' : '-300px',
    [theme.breakpoints.up('md')]: {
      left: '0px',
    }
  }))
  const SideBarAgencyNameBox = styled('div')(({ theme }) => ({
    textAlign: 'start',
    margin: '0px',
    padding: '11px 24px',
    backgroundColor: theme.palette.background.transparent,
    borderBottom: `1px solid ${theme.palette.secondary} `,
    borderRadius: '8px'
  }))

  return (
    <Box sx={{
      flex: '0 0 auto',
    }}>
      <SideBarBox>
        <Link href={'/admin'}>
          <Stack>
            <Box position={'relative'} p={'24px'}>
              <div style={{
                height: '64px',
                width: '64px',
                cursor: 'pointer',
              }}>
                <Image src={'/logo.png'} width='100%' height={'100%'} />
              </div>
            </Box>
            <Box sx={{
              cursor: 'pointer',
            }}>
              <div style={{
                padding: '0 16px',
              }}>
                <Typography variant={'h6'}>
                  <SideBarAgencyNameBox>
                    Hograt
                  </SideBarAgencyNameBox>
                </Typography>
              </div>
            </Box>
          </Stack>
        </Link>
        <Hr />
        <List>
          <Link href={'/admin/services'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/categories'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/projects'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/feedbacks'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <RssFeedIcon />
                </ListItemIcon>
                <ListItemText primary="Feedbacks" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/corporates'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <CorporateFareIcon />
                </ListItemIcon>
                <ListItemText primary="Corporates" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/home'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/about'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Page" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={'/admin/banners'}>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Banners" />
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
  )
}
