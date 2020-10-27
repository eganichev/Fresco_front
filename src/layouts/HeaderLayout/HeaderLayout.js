import React from "react";
import Header from "../Header";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
