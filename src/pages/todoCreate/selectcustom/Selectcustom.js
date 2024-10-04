import { Form } from "react-bootstrap";

import React from "react";

const Selectcustom = ({ children, value, onChange, ...rest }) => {
  return (
    <div>
      <Form.Select {...rest} value={value} onChange={onChange} size="lg">
        {children}
      </Form.Select>
    </div>
  );
};

export default Selectcustom;
