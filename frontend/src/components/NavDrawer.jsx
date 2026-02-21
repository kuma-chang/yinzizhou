import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EditNoteIcon from '@mui/icons-material/EditNote';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleGoHome = () => {
    navigate("/")
  };

  const pageList = [
      {
        name: "About",
        icon: <PersonIcon />,
        url: "/about",
      },
      {
        name: "Event",
        icon: <TodayIcon />,
        url: "/event",
      },
      {
        name: "Video",
        icon: <VideoLibraryIcon />,
        url: "/video",
      },
      {
        name: "Gallery",
        icon: <PhotoLibraryIcon />,
        url: "/gallery",
      },
      {
        name: "Contact",
        icon: <EmailIcon />,
        url: "/contact",
      },
    ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pageList.map((page, index) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton to={page.url}>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem key={"Notes"} disablePadding>
            <ListItemButton to="/notes">
              <ListItemIcon>
                <EditNoteIcon />
              </ListItemIcon>
              <ListItemText primary={"Notes"} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Button onClick={handleGoHome}><HomeIcon /></Button>
    </div>
  );
}

