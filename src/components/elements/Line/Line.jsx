import React from "react";

const Line = ({ color }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 2,
        backgroundColor: color === "blue" ? "rgba(0, 70, 105, 1)" : "#ffffff",
      }}
    ></div>
  );
};

export default Line;
