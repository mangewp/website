import React from "react";

function AboutCard({ title, children, style }) {
  return (
    <div
      style={{
        margin: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem", // Add horizontal padding for mobile gap
        boxSizing: "border-box", // Ensure padding doesn't overflow
      }}
    >
      {title && (
        <div
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#fff",
            textAlign: "left",
            maxWidth: "660px",
            width: "100%",
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          background: "#23272f",
          borderRadius: "10px",
          padding: "1.5rem",
          maxWidth: "705px",
          width: "100%",
          margin: "0 auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          color: "#fff",
          fontSize: "1.3rem",
          boxSizing: "border-box", // Add this for safety
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AboutCard;