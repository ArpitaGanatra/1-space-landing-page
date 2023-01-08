import React from "react";

const TabPane = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        color: "#989898",
        textAlign: "left",
        paddingTop: "2rem",
      }}
    >
      {children}
    </div>
  );
};

export default TabPane;
