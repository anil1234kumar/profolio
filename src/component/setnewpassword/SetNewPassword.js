import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SetNewPassword = () => {
  return (
    <>
      <Container>
        set new password
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button>Reset Password</Button>
          <Link to={"/login"}> back to log in</Link>
        </Form>
      </Container>
    </>
  );
};

export default SetNewPassword;
