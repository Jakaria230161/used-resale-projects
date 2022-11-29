import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max max-w-screen-lg mx-auto'>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
