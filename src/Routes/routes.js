/** @format */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import DrillDown from '../Components/Pages/Drilldown/DrillDown';
import DataTree from '../Components/Pages/DataTree/DataTree';
import Index from '../Components/Pages/Entry/Index';
import LoginPage from '../Components/Pages/Login/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />}>
        <Route path="/home" element={<Home />} />
        <Route path="/drill-down" element={<DrillDown />} />
        <Route path="/data-tree" element={<DataTree />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

export default router;
