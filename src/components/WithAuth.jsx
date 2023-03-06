import React from "react";

const WithAuth = (Component) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Component />
  ) : (
    <h1>You are not authorized to view this page</h1>
  );
};

export default WithAuth;
