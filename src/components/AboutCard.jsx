import React from "react";
import "./AboutCard.css";

function AboutCard({ title, children, style }) {
  return (
    <div className="about-card-outer">
      {title && (
        <div className="about-card-title">
          {title}
        </div>
      )}
      <div className="about-card-inner" style={style}>
        {children}
      </div>
    </div>
  );
}

export default AboutCard;