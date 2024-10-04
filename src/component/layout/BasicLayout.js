import React from "react";
import BasicHeader from "../header/BasicHeader";
import FooterBar from "../footerbar/FooterBar";

const BasicLayout = (props) => {
  const { children } = props;
  return (
    <>
      <BasicHeader />
      <main>{children}</main>
      <FooterBar />
    </>
  );
};

export default BasicLayout;
