import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import { CREATE_TODO, TODOLIST, COMPLETED_TODO } from "../constants";

const DeletedTodo = ({ deleted, setComponent }) => {
  return (
    <Container className="wrapper">
      <Row>
        <h1 className="wrapper-heading">DELETED TODO</h1>
      </Row>
      {deleted.map((item, key) => (
        <Row key={key} className="wrapper-raw">
          <Col>
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
          <Button variant="primary" onClick={() => setComponent(COMPLETED_TODO)}>
            Completed
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default DeletedTodo;
