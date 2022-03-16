import { React, useState } from "react";

import { Row, Col, Form, Button } from "react-bootstrap";
import { TODOLIST } from "../constants";

import "./style.scss";

const CreateTodo = ({ task, setTask, setTodo, setComponent }) => {
  const handleSubmit = (e) => {
    setTodo((previousState) => {
      setTask("");
      return [...previousState, {id:Date.now(), text:task, status:false}];
    });
    e.preventDefault();
  };

  const handleButton = (e) => {
    e.preventDefault();
    setComponent(TODOLIST);
  };

  return (
    <Row className="row-contents">
      <Col className="column-contents" xs={12}>
        <Form className="form-inline">
          <Form.Group className="form-group">
            <Form.Label className="form-label1">Create Todo</Form.Label>
            <Form.Control
              type="text"
              className="form-control1"
              placeholder="Create your todo's here"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="text"
            className="form-button"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Form>
      </Col>
      <Row>
        <Col className="column-contents1" xs={11}>
          <Button
            variant="primary"
            className="navigation-button"
            onClick={handleButton}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Row>
  );
};
export default CreateTodo;
