import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Buttontudo.scss";

export const ButtonTudo = ({
  children,
  outline,
  main,
  className,
  sm,
  statusBtn,
  variant,
  ...rest
}) => {
  let btnClass = main ? "main-btn" : "second-btn";
  let size = sm ? "sm" : "lg";

  return (
    <Button
      className={`${btnClass} ${className}`}
      type="button"
      variant={variant}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
};
