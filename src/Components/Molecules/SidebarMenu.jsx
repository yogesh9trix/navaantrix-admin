/** @format */

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { MENU } from '../../Constants/PAGES_MENU';
import { NavLink } from 'react-router-dom';

function SidebarMenu() {
  return (
    <List>
      {MENU.map((menuItem, index) => {
        return (
          <NavLink
            key={index}
            to={menuItem.linkText}
            style={({ isActive }) => {
              return {
                color: isActive ? 'blue' : 'black',
                textDecoration: 'none',
              };
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon> {menuItem.icon}</ListItemIcon>

                <ListItemText
                  primary={menuItem.displayText}
                  primaryTypographyProps={{
                    fontFamily: 'Inter',
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
}

export default SidebarMenu;
