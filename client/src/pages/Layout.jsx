import SocketProvider from '../../context/SocketProvider';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-full w-auto flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="content">
        <SocketProvider>
          <Outlet />
        </SocketProvider>
      </div>
    </div>
  );
};

export default Layout;
