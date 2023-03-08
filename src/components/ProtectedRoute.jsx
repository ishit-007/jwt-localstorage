import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
const ProtectedRoutes = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState("");
  React.useEffect(() => {
    const value = localStorage.getItem("token");
    axios
      .post("http://localhost:3000/token/validate", {
        token: value,
      })
      .then((response) => {
        if (response.data) {
          setUser(response.data.userName);
          setToken(true);
        } else {
          setToken(false);
        }
      });
  }, []);

  return (
    <div>
      {token ? (
        <div>
          <h1>Hi {user}</h1>
          {children}
        </div>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </div>
  );
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoutes;
