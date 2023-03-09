import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ redirectPath = '/', token }) {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
