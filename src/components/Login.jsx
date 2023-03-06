/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [userName, serUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName,
      password,
    };
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const token = res.data;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form method="POST">
        <label htmlFor="email">Username</label>

        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            serUserName(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
