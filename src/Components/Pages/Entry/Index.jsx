/** @format */

import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '../../Organisms/CustomAppBar';
import Sidebar from '../../Organisms/CustomSidebar';

function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location]);

  return (
    <>
      <AppBar />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Index;
