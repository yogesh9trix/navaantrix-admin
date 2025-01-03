/** @format */

import { Box, Divider, Drawer } from '@mui/material';
import { useGlobalContext } from '../../context';
import Logo from '../Atoms/Logo';
import SidebarMenu from '../Molecules/SidebarMenu/SidebarMenu';

const drawerWidth = 250;
function CustomSidebar() {
  const { isDrawerOpen, toggleDrawer } = useGlobalContext();

  return (
    <Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        onClose={toggleDrawer}
        component="nav"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box id="nav-container">
          <Box
            component="span"
            sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            <Logo />
            <Divider />
          </Box>
          <SidebarMenu />
        </Box>
      </Drawer>
    </Box>
  );
}

export default CustomSidebar;
