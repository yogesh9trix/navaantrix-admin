/** @format */

import './Style/index.css';
import './Style/fonts.css';
import router from './Routes/routes';
import { RouterProvider } from 'react-router-dom';
import AppDataProvider from './context';

function App() {
  return (
    <div>
      <AppDataProvider>
        <RouterProvider router={router} />
      </AppDataProvider>
    </div>
  );
}

export default App;
