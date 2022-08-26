import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useSelector((store) => store.auth);
  console.log("required auth");
  const form = {
    pathname: location.pathname,
  };

  if (isAuth) return children;
  return <Navigate to={"/login"} state={form} replace />;
};

export default RequiredAuth;
