/** @format */

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from '../../context';

function SidebarButton() {
  const { toggleDrawer } = useGlobalContext();
  return (
    <IconButton
      onClick={toggleDrawer}
      variant="outlined"
      size="large"
      color="inherit"
      aria-controls="menu-appbar"
      aria-label="menu"
      sx={{
        mr: 2,
      }}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );
}

export default SidebarButton;
