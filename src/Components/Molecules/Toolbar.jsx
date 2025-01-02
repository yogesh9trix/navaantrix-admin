/** @format */

import React from 'react';
import { Avatar, Box, IconButton, Tooltip, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/';
import SidebarButton from '../Atoms/SidebarButton';
import { MENU } from '../../Constants/PAGES_MENU';
import ProfileMenu from './ProfileMenu/ProfileMenu';

export function MobileToolbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <SidebarButton />

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Tooltip title="settings">
          <IconButton size="small" onClick={handleOpenUserMenu}>
            <Avatar alt="Yogesh Kakde"></Avatar>
          </IconButton>
        </Tooltip>
        <ProfileMenu
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
        />
      </Box>
    </>
  );
}

export function DesktopToolbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <SidebarButton />
      <Box
        sx={{
          flexGrow: 2,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
        }}
      >
        {MENU.map(({ displayText, linkText }, index) => (
          <NavLink
            key={index}
            to={linkText}
            style={({ isActive }) => {
              const isDark = theme.palette.mode === 'dark';
              const style = { textDecoration: 'none' };
              if (isDark) {
                style['color'] = isActive
                  ? theme.palette.grey[100]
                  : theme.palette.grey[500];
              } else {
                style['color'] = isActive
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900];
              }
              return style;
            }}
          >
            <Button
              onClick={() => {}}
              size="small"
              sx={{
                my: 2,
                color: 'inherit',
                fontFamily: 'Inter',
                display: 'block',
              }}
            >
              {displayText}
            </Button>
          </NavLink>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="settings">
          <IconButton size="small" onClick={handleOpenUserMenu}>
            <Avatar alt="Yogesh Kakde"></Avatar>
          </IconButton>
        </Tooltip>
        <ProfileMenu
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
        />
      </Box>
    </>
  );
}
