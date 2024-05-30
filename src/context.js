/** @format */

import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export default function AppDataProvider(props) {
  const { children } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = function () {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <AppContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawer,
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
