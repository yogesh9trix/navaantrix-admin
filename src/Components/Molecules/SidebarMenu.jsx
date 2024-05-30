/** @format */

import { Menu, MenuItem, Typography } from '@mui/material';

const menu = ['Dashboard', 'Drill Down', 'Data Tree', 'Static'];

function SidebarMenu() {
  return (
    <Menu>
      {menu.map((menuItem, index) => {
        return (
          <MenuItem key={index}>
            <Typography> menuItem</Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
}

export default SidebarMenu;
