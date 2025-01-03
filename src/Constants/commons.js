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

export const REGISTERATION_ERRORS = {
  SOURCE_ID_REQUIRED: 'Please provide source id',
  SOURCE_ID_NUM: 'Source id must be number',
  ORG_NAME_ERR: 'Provide organisation name',
  DOMAIN_NAME_ERR: 'Provide atleast one domain name',
  FIRST_NAME: 'First name can not be empty',
  LAST_NAME: 'Last name can not be empty',
  USER_ID: 'Assign a unique id for this user',
  USER_STATUS: 'Select user status',
  EMPTY_PASSWORD: 'Give password for user',
  PASSWORD_MISMATCH: 'Password mismatched',
  CLIENT_ID: 'Please select client name',
  CLIENT_ID_NOT_NUM: 'Client id is expected to be number',
  DOMAIN_NAME_SELECTION: 'Please select domain name',
};

export const REGISTERATION_SUCCESS = {
  ORG_REG_SUCESS: 'Organisation has been successfuly registered',
};

export const SERVER_ERRORS = {
  HEADING: 'SERVER ERROR!',
  SUBTITLE: 'Please report the error with code',
};

export const DEFAULT_DOMAIN_SELECT = 'default';
