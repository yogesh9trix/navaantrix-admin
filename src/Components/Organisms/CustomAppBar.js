/** @format */

import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { MobileToolbar, DesktopToolbar } from '../Molecules/Toolbar';

function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                alignItems: 'center',
              }}
            >
              <MobileToolbar />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                alignItems: 'center',
              }}
            >
              <DesktopToolbar />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
