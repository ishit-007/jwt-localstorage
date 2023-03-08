import React from "react";
import axios from "axios";

const BEcontent = () => {
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8080/hello", {
          headers: {
            token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setContent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default BEcontent;
