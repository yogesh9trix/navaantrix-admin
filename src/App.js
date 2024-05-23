import router from './Routes/routes';
import { RouterProvider } from 'react-router-dom';
function App() {
  const a = 'y';
  const name = 'yogesh';

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
