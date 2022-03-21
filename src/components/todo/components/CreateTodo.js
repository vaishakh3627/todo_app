import { React, useState } from "react";

import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { TODOLIST } from "../constants";

import "./style.scss";

const CreateTodo = ({ task, setTask, setTodo, setComponent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");
    setTodo((previousState) => [
      ...previousState,
      { id: Date.now(), text: task, status: false },
    ]);
  };

  const handleButton = (e) => {
    e.preventDefault();
    setComponent(TODOLIST);
  };

  return (
    <Container className="wrapper">
      <Row>
        <Col xs={12}>
          <Form>
            <Form.Group className="wrapper-form-group">
              <Form.Label className="wrapper-heading">
                <h1>CREATE TODO</h1>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Create your todo's here"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col className="wrapper-button-column">
                <Button variant="primary" type="text" onClick={handleSubmit}>
                  Create
                </Button>
                <Button variant="primary" onClick={handleButton}>
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default CreateTodo;
