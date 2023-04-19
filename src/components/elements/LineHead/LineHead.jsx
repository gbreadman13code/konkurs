import React from "react";

const LineHead = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: window.innerWidth > 1000 ? "8px 0px" : "5px 0px",
        backgroundColor: "rgba(0, 70, 105, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default LineHead;
