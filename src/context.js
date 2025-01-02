/** @format */

import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from './Constants/commons';

const AppContext = createContext();

export default function AppDataProvider(props) {
  const { children } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(
    localStorage.getItem('theme') || THEMES.LIGHT
  );

  const toggleDrawer = function () {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <AppContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawer,
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useGlobalContext() {
  return useContext(AppContext);
}
