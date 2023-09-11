import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = () => {
  const isLogin = true;

  return isLogin ? <Outlet /> : <Navigate to="/Login" />;
};
