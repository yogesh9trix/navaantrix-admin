/** @format */

import React from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';
import Logo from '../Atoms/Logo';
import SidebarButton from '../Atoms/SidebarButton';
import { MENU } from '../../Constants/PAGES_MENU';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../Atoms/Theme/ThemeSwitch';
import { THEMES } from '../../Constants/commons';
import { useGlobalContext } from '../../context';
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
  const { setActiveTheme, activeTheme } = useGlobalContext();
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
              return {
                color: isActive ? 'black' : 'white',
                textDecoration: 'none',
              };
            }}
          >
            <Button
              onClick={() => {}}
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
      <Box sx={{ flexGrow: 1 }}>
        <ThemeSwitch
          onChange={(ev) => {
            const theme = ev.target.checked ? THEMES.DARK : THEMES.LIGHT;
            setActiveTheme(theme);
            localStorage.setItem('theme', theme);
          }}
          checked={activeTheme === THEMES.DARK}
        />
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
