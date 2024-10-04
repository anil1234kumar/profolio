import React from "react";
import { Button, ThemeProvider } from "react-bootstrap";
import "./ButttonCustom.scss";

const ButtonCustom = (props) => {
  const { children, main, sm, className, gamingBtn, ...rest } = props;
  let btnClass = main ? "main-btn" : "second-btn";
  let effectBtn = gamingBtn ? "neoBtn" : "";
  let size = sm ? "sm" : "lg";

  return (
    <>
      <ThemeProvider prefixes={{ btn: "customBtn" }}>
        <Button
          size={size}
          className={`${btnClass} ${className}  ${effectBtn}`}
          {...rest}
        >
          {children}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default ButtonCustom;
