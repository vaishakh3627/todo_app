import { React, useState } from "react";

import { Container } from "react-bootstrap";

import { CREATE_TODO, TODOLIST, COMPLETED_TODO } from "./constants";

import Header from "../../common/Header/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import CompletedTodo from "./components/CompletedTodo";

const Layout = () => {
  const [component, setComponent] = useState(CREATE_TODO);
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const renderComponent = {
    [CREATE_TODO]: (
      <CreateTodo
        task={task}
        setTask={setTask}
        setTodo={setTodo}
        setComponent={setComponent}
      />
    ),
    [TODOLIST]: <TodoList todo={todo} setComponent={setComponent} />,
    [COMPLETED_TODO]: <CompletedTodo />,
  };

  return (
    <Container
      fluid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "scroll",
        zIndex: 3,
      }}
    >
      <Header />
      {renderComponent[component]}
    </Container>
  );
};
export default Layout;
