import React from "react";

const Heading2 = ({ color = "rgba(0, 70, 105, 1)", children }) => {
  const headingStyle = {
    color: color,
    fontFamily: "Myriad Pro Bold",
    textTransform: "uppercase",
    fontSize: window.innerWidth > 1000 ? "24px" : "18px",
  };

  return <h2 style={headingStyle}>{children}</h2>;
};

export default Heading2;
