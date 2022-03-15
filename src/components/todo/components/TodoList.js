import { React, useState } from "react";

import { Col, Row, Form, Button } from "react-bootstrap";

import { CREATE_TODO, COMPLETED_TODO } from "../constants";

const TodoList = ({ todo, setComponent }) => {
  const [completed, setCompleted] = useState([]);
  const [check, setCheck] = useState(false)

  return (
    <Row className="row-elements-list1">
      <Col xs={12} className="elements-list1">
        <h1>Todo List</h1>
      </Col>
      <Col xs={10} className="elements-list2">
        {todo.map((item, key) => (
          <Row key={key} className="row-elements-list2">
            <Col xs={6} className="elements1">
              {" "}
              <li>{item}</li>
            </Col>
            <Col xs={2} className="elements2">
              <Form.Check onClick={()=> setCheck(true)}/>
            </Col>
            {
                console.log(check)
            }
          </Row>
        ))}
      </Col>
      <Col xs={12}>
        <Row className="row-elements-list3">
          <Col xs={6} className="elements3">
            <Button variant="primary" onClick={() => setComponent(CREATE_TODO)}>
              Create Todo
            </Button>
          </Col>
          <Col xs={6} className="elements4">
            <Button
              variant="primary"
              onClick={() => setComponent(COMPLETED_TODO)}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default TodoList;
