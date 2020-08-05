import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../actions/authentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(state => state.authentication.token);
  const badCredentials = useSelector(state => state.authentication.badCredentials);

  if (token) {
    if (token) {
      return <Redirect to="/home" />;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);


  return (
    <>
      {badCredentials ? <Alert variant="danger">Invalid Credentials</Alert>: null}
      <Form onSubmit= {handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={updateEmail} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={updatePassword} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
