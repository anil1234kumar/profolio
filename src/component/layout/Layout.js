import React, { useContext, useState } from "react";
import Navigationbar from "../header/Navigationbar";
import FooterBar from "../footerbar/FooterBar";
import { ThemeContext } from "../theme/ThemeProvider";
import "./Layout.scss";
import { Container, Form, Navbar, Stack } from "react-bootstrap";
import DotRing from "../cursour/DotRing";
import ButtonCustom from "../common/buttonCustom/ButtonCustom";
import { useNavigate } from "react-router-dom";
import BasicHeader from "../header/BasicHeader";
import SideMenu from "../sidebar/SideMenu";

const Layout = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { main, children, sideToggel, menu, className, sideMenu } = props;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className={`${theme}`}>
        <DotRing />
        <Navigationbar main={main} className={className} logoImg />
        <main className="mainWithoutsidebar">{children}</main>
        <FooterBar />
      </div>
    </>
  );
};

export default Layout;
