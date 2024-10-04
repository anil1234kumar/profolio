import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { StoreImage } from "../../asset/storeImage/StoreImage";

const BasicHeader = () => {
  const { logo } = StoreImage;
  return (
    <>
      <Navbar.Brand href="#home">
        <Image src={logo} alt="icon" />
      </Navbar.Brand>
    </>
  );
};

export default BasicHeader;
