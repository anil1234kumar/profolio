import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import SidebarFooter from "./SidebarFooter";


const SideMenu = (props) => {
  const {
    onClicktoggel,
    collapsed,
    toggelIcon,
    imageLogo,
    toggelIconClassName,
    ...rest
  } = props;

  const { logo, smallLogo } = StoreImage;
  const menuClasses = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <>
      <div className="customSidebarDesign">
        <Sidebar
          rootStyles={{
            background:
              "linear-gradient(174deg, #00BEF2 0%, #008DB4 65%, #005360 100%)",
          }}
          className={`sideMenu ${collapsed ? "collapsed" : ""}`}
          collapsed={collapsed}
          transitionDuration={300}
          collapsedWidth="90px"
          style={{
            zIndex: 9999999999,
            height: "100%",
            minHeight: "100vh",
            position: "fixed",
            top: "0px",
            padding:"0 10px"
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ flex: 1, marginBottom: "32px" }}>
              <Menu
              rootStyles={{
                      [`.${menuClasses.icon}`]: {
                        backgroundColor: 'black',
                        color: '#344cff',
                      },
                    }}
                menuItemStyles={{
                  button: ({ level, active, disabled  }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                      return {
                        color: disabled ? "#f5d9ff" : "black",
                        backgroundColor: active ? "white" : undefined,
                        borderRadius: active ? "10px" : undefined,
                      };
                  },
                }}
              >
                <MenuItem
                  style={{ height: "90px" }}
                  icon={<Image fluid src={smallLogo} />}
                >
                  Future Exchange
                </MenuItem>
                <MenuItem
                  active
                  icon={<i class="bi bi-house-door"></i>}
                  component={<Link to="/" />}
                >
                  Home
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-briefcase"></i>}
                  component={<Link to="/birds" />}
                >
                  Portfolio
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-chevron-bar-contract"></i>}
                  component={<Link to="/trees" />}
                >
                  Trading
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-grid"></i>}
                  component={<Link to="/fishes" />}
                >
                  Grid Trading
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-copy"></i>}
                  component={<Link to="/fishes" />}
                >
                  Copy Trading
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-person-plus"></i>}
                  component={<Link to="/fishes" />}
                >
                  P2P
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-postcard"></i>}
                  component={<Link to="/fishes" />}
                >
                  Cards
                </MenuItem>
                <MenuItem
                  icon={<i class="bi bi-gift"></i>}
                  component={<Link to="/fishes" />}
                >
                  Referral
                </MenuItem>

                <SubMenu icon={<i class="bi bi-piggy-bank"></i>} label="Earns">
                  <MenuItem icon={""} component={<Link to="/animal" />}>
                    animalList
                  </MenuItem>
                  <MenuItem component={<Link to="/documentation" />}>
                    Line charts
                  </MenuItem>
                </SubMenu>
              </Menu>
            </div>
            <SidebarFooter collapsed={collapsed} />
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default SideMenu;
