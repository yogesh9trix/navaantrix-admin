/** @format */

import {
  AccountBox,
  FiberNew,
  Logout,
  Feedback,
  HelpCenter,
  Info,
  Settings,
  Group,
  PersonAdd,
  Fingerprint,
} from '@mui/icons-material/';
export const THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

export const profileMenu = [
  { displayText: 'Profile', disabled: true, Icon: AccountBox },
  { displayText: `What's New`, disabled: true, Icon: FiberNew },
  { displayText: 'Feedback', disabled: true, Icon: Feedback },
  { displayText: 'Help', disabled: true, Icon: HelpCenter },
  { displayText: 'About', disabled: true, Icon: Info },
  {
    displayText: 'Settings',
    disabled: false,
    Icon: Settings,
    page: true,
    linkText: '/settings',
  },
  { displayText: 'Logout', disabled: false, Icon: Logout },
];

export const MENU = [
  { displayText: 'Organisation', linkText: 'organisation', Icon: Group },
  { displayText: 'Add User', linkText: 'add-user', Icon: PersonAdd },
  {
    displayText: 'System Attribute',
    linkText: 'system-attribute',
    Icon: Fingerprint,
  },
];
