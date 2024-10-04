import React, { useContext, useState } from "react";
import SideMenu from "../../component/sidebar/SideMenu";

import { ThemeContext } from "../../component/theme/ThemeProvider";
import NavList from "../../component/navList/NavList";

import "./InnerLayout.scss";
import Navigationbar from "../../component/header/Navigationbar";
import FooterBar from "../../component/footerbar/FooterBar";
import { useNavigate } from "react-router-dom";
import { Container, ThemeProvider } from "react-bootstrap";
import ButtonCustom from "../../component/common/buttonCustom/ButtonCustom";
import { StoreImage } from "../../asset/storeImage/StoreImage";

const InnerLayout = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { main, children, sideToggel, menu, className, sideMenu } = props;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { logo, smallLogo } = StoreImage;
  return (
    <>
      <div className={`${theme}`}>
        <div className="layoutAll">
          <main className={`${collapsed ? "main-collapsed" : "main-expanded"}`}>
            <div className="innerArea-sidebar">
              <SideMenu

                collapsed={collapsed}
                onClicktoggel={() => setCollapsed(!collapsed)}
                toggelIcon={
                  collapsed ? (
                    <i class="bi bi-chevron-double-right"></i>
                  ) : (
                    <i class="bi bi-chevron-double-left"></i>
                  )
                }
                toggelIconClassName={
                  collapsed ? "iconPositionCollapsed" : "iconPositionFull"
                }
              />
              <Navigationbar
                main={main}
                sideToggel={
                  collapsed ? (
                    <i class="bi bi-layout-text-sidebar"></i>
                  ) : (
                    <i class="bi bi-layout-text-sidebar-reverse"></i>
                  )
                }
                onclickSidebar={() => setCollapsed(!collapsed)}
                toggelbtnClass={collapsed ? "expanded" : "collapsed"}
              />
              <div
                className={`contentArea ${
                  collapsed ? "collapsed" : "expanded"
                }`}
              >
                <Container fluid><div className="ContentMainArea">{children}</div></Container>
              </div>
            </div>
            <FooterBar />
          </main>
        </div>
      </div>
    </>
  );
};

export default InnerLayout;
