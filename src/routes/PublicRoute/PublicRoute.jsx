import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);
  console.log('PublicRoute', token);
  return token ? <Navigate to="/main" /> : <Outlet />;
};

export default PublicRoute;
