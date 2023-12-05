import { Outlet, Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { StoreProvider } from "../context/storeContext";

const ProtectedRoute = ({ user, children, redirectTo = "/" }) => {
  const location = useLocation();
  
  if(!user) {
    return <Navigate to={redirectTo} state={{from: location}} replace/>
  }

  return (
    <StoreProvider user={user}>
      {children ? children : (<Outlet />)}
    </StoreProvider>
  )
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  user: PropTypes.object
}

export default ProtectedRoute;
