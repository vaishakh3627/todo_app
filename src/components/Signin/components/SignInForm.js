import { React, useState } from "react";

import { Form, Button, Col } from "react-bootstrap";

import ModalComponent from "./Modal";

const SignInForm = ({ data, setData }) => {
  const [accepted, setAccepted] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ModalComponent
        show={modalShow}
        onClose={() => setModalShow(false)}
        email={data}
      />
      <Col xs={12} md={6} className="contents-column1">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              checked={accepted}
              onChange={() => setAccepted(true)}
            />
          </Form.Group>
          <Button
            variant="primary"
            disabled={!(accepted && data !== "")}
            onClick={() => setModalShow(true)}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </>
  );
};
export default SignInForm;
