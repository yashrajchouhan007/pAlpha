import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Protected = ({ isAllowed, redirect = "/", children, auth }) => {
  const { pathname } = useLocation();
  // console.log("children", children, pathname);

  if (auth && isAllowed) {
    return <Navigate to={redirect} replace />;
  }

  if (
    !isAllowed &&
    ["/auth/signin", "/auth/reset", "/auth/signup"].indexOf(pathname) < 0
  ) {
    return <Navigate to="/auth/signin" replace />;
  }

  return children ? children : <Outlet />;
};

export default Protected;
