import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MouseContext } from "../mouseContext/MouseContextProvider";

const CustomButton = ({ title, primary, onClick }) => {
  const { cursorChangeHandler } = useContext(MouseContext);
  let className = primary ? "primary" : "";

  return (
    <>
      <Button
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
        className={`${className} font-sm`}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
