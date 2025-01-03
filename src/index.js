/** @format */

import ReactDOM from 'react-dom/client';
import App from './App';
import AppDataProvider from './context';
import RegisterClientProvider from './store/store.register.client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppDataProvider>
    <RegisterClientProvider>
      <App />
    </RegisterClientProvider>
  </AppDataProvider>
);
