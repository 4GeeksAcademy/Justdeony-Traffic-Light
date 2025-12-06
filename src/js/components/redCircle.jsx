import React from "react";

const Circle = ({ background, active, onClick }) => {
  return (
    <div
    onClick={onClick}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: background,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        boxShadow: active ? `0 0 30px 10px ${background}` : "none", 
        fontWeight: "bold",
      }}
    >
    </div>
  );
};

export default Circle;
