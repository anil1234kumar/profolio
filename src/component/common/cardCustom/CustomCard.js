import React from "react";
import { Card, ThemeProvider } from "react-bootstrap";
import "./CustomCard.scss";
import useCurrentWidth from "../CustomHook/useCurrentWidth";

const CustomCard = (props) => {
  const { children, className, ...rest } = props;
  const widthCustom = useCurrentWidth();

  return (
    <>
      <ThemeProvider prefixes={{ card: "customCard" }}>
        <Card
          {...rest}
          className={`${widthCustom > 991 ? "card-width" : ""} ${className}`}
        >
          <Card.Body>{children}</Card.Body>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default CustomCard;
