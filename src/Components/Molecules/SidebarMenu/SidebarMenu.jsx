/** @format */

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { MENU } from '../../../Constants/PAGES_MENU';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function SidebarMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();

  const getActiveStyle = (index) => {
    const color =
      activeTab === index
        ? theme.palette.text.primary
        : theme.palette.text.secondary;
    return { textDecoration: 'none', color };
  };

  return (
    <List>
      {MENU.map((menuItem, index) => {
        const { linkText, Icon } = menuItem;
        return (
          <NavLink
            key={index}
            to={linkText}
            onClick={() => setActiveTab(index)}
            style={getActiveStyle(index)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon sx={getActiveStyle(index)} />
                </ListItemIcon>

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
