import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const PublicRoute = ({ user, children, redirectTo = "/" }) => {
  if(user) {
    return <Navigate to={redirectTo} replace/>
  }

  return children ? children : <Outlet />
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  user: PropTypes.object
}

export default PublicRoute;
