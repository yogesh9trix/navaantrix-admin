/** @format */

import { useEffect } from 'react';
import { Box, Divider, Drawer, Typography } from '@mui/material';
import { useGlobalContext } from '../../context';
import Logo from '../Atoms/Logo';

const drawerWidth = 250;
function CustomSidebar() {
  const { isDrawerOpen, toggleDrawer } = useGlobalContext();

  useEffect(() => {
    console.log(isDrawerOpen);
  }, []);

  return (
    <Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        sx={{
          display: { xs: 'block', md: 'none' },
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
          <Box component="span"></Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default CustomSidebar;
