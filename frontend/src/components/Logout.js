import React from "react";
import { Navigate } from "react-router-dom";

function logout() {
  sessionStorage.removeItem("utype");
  sessionStorage.removeItem("userfirstname");
  sessionStorage.clear();

  return <Navigate to="/" />;
}

export default logout;
