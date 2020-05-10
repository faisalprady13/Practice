import React from "react";
import "./title.scss";

const Title = ({ name }) => {
  return (
    <div className={`background ${name}`}>
      <h1>{name}</h1>
    </div>
  );
};

export default Title;
