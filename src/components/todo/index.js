import { React, useState } from "react";

import { Container } from "react-bootstrap";

import {
  CREATE_TODO,
  TODOLIST,
  COMPLETED_TODO,
  DELETED_TODO,
} from "./constants";

import Header from "../../common/Header/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import CompletedTodo from "./components/CompletedTodo";
import DeletedTodo from "./components/DeletedTodo";

const HomeComponent = () => {
  const [component, setComponent] = useState(CREATE_TODO);
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const renderComponent = {
    [CREATE_TODO]: (
      <CreateTodo
        task={task}
        setTask={setTask}
        setTodo={setTodo}
        setComponent={setComponent}
      />
    ),
    [TODOLIST]: (
      <TodoList
        todo={todo}
        setTodo={setTodo}
        setComponent={setComponent}
        setCompleted={setCompleted}
        setDeleted={setDeleted}
      />
    ),
    [COMPLETED_TODO]: (
      <CompletedTodo
        completed={completed}
        setComponent={setComponent}
        setTodo={setTodo}
      />
    ),
    [DELETED_TODO]: (
      <DeletedTodo deleted={deleted} setComponent={setComponent} />
    ),
  };

  return (
    <Container
      fluid
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Header />
      {renderComponent[component]}
    </Container>
  );
};
export default HomeComponent;
