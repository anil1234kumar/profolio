import "./Todo.scss";
import { Container } from "react-bootstrap";
import TodoModal from "./TodoModal";
import React, { useState } from "react";
import { ButtonTudo } from "./buttonTodo/ButtonTudo";
import Selectcustom from "./selectcustom/Selectcustom";
import { useSelector } from "react-redux";
import {
  deleteTodo,
  selectTodoList,
} from "../../reduxpractice/slices/todoSlice.jsx";
import TodoItem from "./TodoItem.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const TodoCreateMain = () => {
  const [show, setShow] = useState(false);
  const [del, setDel] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [mode, setMode] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOp = (mode, data) => {
    setMode(mode);
    handleShow();
    if (data) setSelectedTodo(data);
  };

  console.log(mode, "===============mode");

  useEffect(() => {
    if (del) {
      dispatch(deleteTodo({ id: del }));
    }
  }, [del, dispatch]);

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredTodoList = filterStatus
    ? todoList.filter((todo) => todo.statuSelect === filterStatus)
    : todoList;

  const status = [
    { id: 1, value: "failed", text: "failed" },
    { id: 2, value: "pending", text: "pending" },
    { id: 3, value: "complete", text: "complete" },
  ];
  return (
    <>
      <Container>
        <h4>make todo</h4>
        <div className="todoheading">
          <ButtonTudo variant="success" onClick={() => handleOp("add")}>
            Add Task
          </ButtonTudo>
          <div className="p-2 ms-auto">
            <Selectcustom onChange={handleFilterChange} value={filterStatus}>
              <option value="">Show All</option>
              {status.map((text) => (
                <option key={text.id} value={text.value}>
                  {text.text}
                </option>
              ))}
            </Selectcustom>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#0d6efd57", padding: "20px" }}
          className="data"
        >
          {filteredTodoList && filteredTodoList.length > 0 ? (
            todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                username={todo.username}
                discription={todo.discription}
                statuSelect={todo.statuSelect}
                time={todo.time}
                handleDelete={() => setDel(todo.id)}
                handleUpdate={() => handleOp("update", todo)}
              />
            ))
          ) : (
            <p>no todo</p>
          )}
        </div>
      </Container>
      <TodoModal
        show={show}
        onHide={handleClose}
        closebtn={handleClose}
        mode={mode}
        selectedTodo={selectedTodo}
      />
    </>
  );
};

export default TodoCreateMain;
