import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import Person2Icon from '@mui/icons-material/Person2';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CommentIcon from '@mui/icons-material/Comment';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const ListItems = () => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TravelExploreOutlinedIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Explore" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Save" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Cart" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="selling" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Profile" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessAlarmsIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="History" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Contact us" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="settings" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default ListItems;
