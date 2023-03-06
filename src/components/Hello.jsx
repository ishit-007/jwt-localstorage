import React from "react";
import "./Hello.css";
import WithAuth from "./WithAuth";

const Hello = () => {
  return (
    <h1 className="hello">
      Hello
    </h1>
  );
};

export default WithAuth(Hello);
