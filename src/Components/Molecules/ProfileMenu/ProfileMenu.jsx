/** @format */

import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { profileMenu, THEMES } from '../../../Constants/commons';
import ThemeSwitch from '../../Atoms/Theme/ThemeSwitch';
import { useGlobalContext } from '../../../context';

// circle shaped user profile menu, showed in app bar
const ProfileMenu = function (props) {
  const { anchorElUser, handleCloseUserMenu } = props;
  const { setActiveTheme, activeTheme } = useGlobalContext();

  return (
    <Menu
      id="menu-appbar"
      sx={{ mt: '45px', fontFamily: 'Inter' }}
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {profileMenu.map((setting, index) => {
        const { displayText, Icon, disabled } = setting;
        return (
          <MenuItem disabled={disabled} key={index} onClick={() => {}}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText sx={{ fontFamily: 'Inter' }}>
              {displayText}
            </ListItemText>
          </MenuItem>
        );
      })}
      <Divider />
      <Box component="li" sx={{ display: 'flex', justifyContent: 'center' }}>
        <ThemeSwitch
          onChange={(ev) => {
            const theme = ev.target.checked ? THEMES.DARK : THEMES.LIGHT;
            setActiveTheme(theme);
            localStorage.setItem('theme', theme);
          }}
          checked={activeTheme === THEMES.DARK}
        />
      </Box>
    </Menu>
  );
};

export default ProfileMenu;
