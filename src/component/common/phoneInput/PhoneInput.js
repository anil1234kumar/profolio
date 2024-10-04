import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./PhoneInput.scss";
import { Form } from "react-bootstrap";

export default function PhoneInputCustom(props) {
  const { label, text } = props;
  const [value, setValue] = useState();

  const handleChangephone = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log("Input value changed:", newValue);
  };

  return (
    <>
      <Form.Group className="outerInput" controlId="formBasicEmail">
        {label && <Form.Label className="label">{label}</Form.Label>}
        <PhoneInput
          className="outerInput"
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
        <Form.Text className="text-muted">{text}</Form.Text>
      </Form.Group>
    </>
  );
}
