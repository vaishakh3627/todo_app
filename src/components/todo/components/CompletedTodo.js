import React from "react";

import { Row, Col, Button, Container } from "react-bootstrap";

import { CREATE_TODO, TODOLIST, DELETED_TODO } from "../constants";

const CompletedTodo = ({ completed, setComponent }) => {

  return (
    <Container className="wrapper">
      <Row>
        <h1 className="wrapper-heading">COMPLETED TODO</h1>
      </Row>
      {completed.map((item, key) => (
        <Row key={key} className="wrapper-raw">
          <Col xs={12}>
            <ul>
              <li>
                <h5>{item.text}</h5>
              </li>
            </ul>
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="wrapper-secondary-column" xs={12}>
          <Button variant="primary" onClick={() => setComponent(CREATE_TODO)}>
            Create Todo
          </Button>
          <Button variant="primary" onClick={() => setComponent(TODOLIST)}>
            Todo List
          </Button>
          <Button variant="primary" onClick={() => setComponent(DELETED_TODO)}>
            Deleted Todo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default CompletedTodo;
