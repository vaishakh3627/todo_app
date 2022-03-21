import { React } from "react";

import { Col, Row, Form, Button, Container } from "react-bootstrap";

import { FaTrashAlt } from "react-icons/fa";

import { CREATE_TODO, COMPLETED_TODO } from "../constants";

const TodoList = ({
  todo,
  setComponent,
  setCompleted,
  setDeleted,
  setTodo,
}) => {
  const deleteHandler = (key) => {
    const deleteTodo = todo.filter((i, index) => key !== index);
    const updateDeletedTodo = todo.filter((i, index) => key === index);
    setTodo(deleteTodo);
    setDeleted((previousState) => [...previousState,  ...updateDeletedTodo ]);
  };

  return (
    <Container className="wrapper">
      <Row>
        <h1 className="wrapper-heading">TODO LIST</h1>
      </Row>
      {todo.map((item, key) => (
        <Row className="wrapper-raw" key={key}>
          <Col xs={10}>
            <ul>
              <li>
                <h5>{item.text}</h5>
              </li>
            </ul>
          </Col>
          <Col className="wrapper-column" xs={1}>
            <Form.Check
              style={{ margin: "0px" }}
              type="checkbox"
              checked={item.status}
              onChange={(e) => {
                setCompleted(
                  todo.filter((obj) => {
                    if (obj.id === item.id) {
                      obj.status = e.target.checked;
                    }
                    return obj.status === true;
                  })
                );
              }}
            />
          </Col>
          <Col xs={1}>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              value={item.text}
              disabled={item.status === true}
              onClick={() => deleteHandler(key)}
            >
              <FaTrashAlt />
            </Button>
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="wrapper-secondary-column">
          <Button variant="primary" onClick={() => setComponent(CREATE_TODO)}>
            Create Todo
          </Button>
          <Button
            variant="primary"
            onClick={() => setComponent(COMPLETED_TODO)}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default TodoList;
