import React from "react";
import { Image } from "react-bootstrap";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import  "./Sidebar.scss"

const SidebarFooter = (props) => {
    const {collapsed} = props
    const {smallLogo ,sidebarWatermark} = StoreImage
  return (
    <>
      <div className="watermarkSidebar" >{collapsed ? <> <Image src={smallLogo} alt="icon"/></> : <><div>
        <Image src={sidebarWatermark}  alt="image"/>
        </div></>}</div>
    </>
  );
};

export default SidebarFooter;
