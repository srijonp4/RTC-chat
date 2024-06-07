import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <div>About</div>,
        },
        {
          path: '/room/:roomId',
          element: <RoomPage />,
        },
      ],
    },
  ]);

  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
