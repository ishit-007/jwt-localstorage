import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>Trying Authentication</h1>
      <nav>
        <ul>
          <li onClick={()=>{
            navigate("/login");
          }}>Login</li>
          <li onClick={()=>{
            navigate("/about");
          }}>About</li>
          <li onClick={()=>{
            navigate('/fromBackend')
          }}>From BE</li>
          <li onClick={()=>{
            localStorage.removeItem("token");
            navigate("/logout");
          }}>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
