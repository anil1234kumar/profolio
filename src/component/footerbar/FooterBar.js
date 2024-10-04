import React from "react";
import "../layout/Layout.scss";

const FooterBar = () => {
  return (
    <>
      <footer style={{ height: "60px" }}>
        <div className="footerBar text2">
          ©{new Date().getFullYear()}
          <div className="ms-2">F</div>
          <div>e</div>
          <div>a</div>
          <div>t</div>
          <div>u</div>
          <div>r</div>
          <div className="me-2">e</div>
          Exchange - All rights reserved
        </div>
      </footer>
    </>
  );
};

export default FooterBar;
