import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1>password reset</h1>
        we sent a code to anil.kumar@antiersolutions.com
        <Form.Control size="sm" type="number" placeholder="Small text" />
        <Button onClick={() => navigate("/setPassword")}>Coutinue</Button>
        Dont recived the mail?<Link to="">click to resend</Link>
        <Link to={"/login"}> back to log In</Link>
      </Container>
    </>
  );
};

export default PasswordReset;
