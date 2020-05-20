import React from "react";
import "./title.scss";

const Title = ({ sectionTitle }) => {
  return (
    <div className={`background ${sectionTitle}`}>
      <h1 className="white-title">{sectionTitle}</h1>
    </div>
  );
};

export default Title;
