import React from "react";
import { Form, ThemeProvider, InputGroup, Button } from "react-bootstrap";
import "./InputCustom.scss";
import ButtonCustom from "../buttonCustom/ButtonCustom";

const InputCustom = (props) => {
  const {
    label,
    text,
    sm,
    main,
    controlId,
    required,
    htmlFor,
    endText,
    onClickRight,
    single,
    ...rest
  } = props;

  let size = sm ? "sm" : "lg";
  let inputClass = main ? "mainInput" : "password";
  let fieldClass = required ? "required-field" : "";
  let fieldInputClass = single ? "widthfull" : "";

  return (
    <>
      <ThemeProvider prefixes={{ "form-control": "customInput" }}>
        <Form.Group className="outerInput" controlId={controlId}>
          {label && (
            <Form.Label htmlFor={htmlFor} className={`label  `}>
              {label} {fieldClass && <span className={fieldClass}>*</span>}
            </Form.Label>
          )}
          <InputGroup className={fieldInputClass}>
            <Form.Control className={inputClass} size={size} {...rest} />
            {endText && (
              <Button
                className="eyeIcon"
                variant="outline-secondary"
                id="button-addon1"
                onClick={onClickRight}
              >
                {endText}
              </Button>
            )}
          </InputGroup>
          <Form.Text className="text-muted">{text}</Form.Text>
        </Form.Group>
      </ThemeProvider>
    </>
  );
};

export default InputCustom;
