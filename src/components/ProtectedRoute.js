import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({ component, ...args }) => {
  const auth = useAuth0();
  return auth ? <Outlet/> : <Navigate to={'/login'}/>;
};
export default ProtectedRoute;