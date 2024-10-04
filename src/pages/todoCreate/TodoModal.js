import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Selectcustom from "./selectcustom/Selectcustom";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../reduxpractice/slices/todoSlice";

const TodoModal = ({ show, onHide, closebtn, mode, selectedTodo }) => {
  console.log({ selectedTodo });
  const [inputs, setInputs] = useState({
    username: selectedTodo ? selectedTodo.username : "",
    discription: selectedTodo ? selectedTodo.discription : "",
    statuSelect: selectedTodo ? selectedTodo.statuSelect : "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleReset = () => {
    setInputs({
      username: "",
      discription: "",
      statuSelect: "",
    });
    onHide();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === "update") {
      dispatch(
        editTodo({
          id: selectedTodo.id,
          username: inputs.username,
          discription: inputs.discription,
          statuSelect: inputs.statuSelect,
          time: new Date().toLocaleString(),
        })
      );
    } else {
      dispatch(
        addTodo({
          // You might want to use a unique identifier, like a timestamp or UUID
          username: inputs.username,
          discription: inputs.discription,
          statuSelect: inputs.statuSelect,
          time: new Date().toLocaleString(),
        })
      );
    }

    // console.log("Submitted Data:", {
    //   username: inputs.username,
    //   discription: inputs.discription,
    //   statuSelect: inputs.statuSelect,
    // });

    closebtn();
  };

  const status = [
    { id: 0, value: "st", text: "chose you status" },
    { id: 1, value: "failed", text: "failed" },
    { id: 2, value: "pending", text: "pending" },
    { id: 3, value: "complete", text: "complete" },
  ];

  // console.log(JSON.stringify(status) + "status=======");

  // useEffect(() => {
  //   console.log(inputs, "========================effect");
  //   setInputs({
  //     username: selectedTodo ? selectedTodo.username : "",
  //     discription: selectedTodo ? selectedTodo.discription : "",
  //     statuSelect: selectedTodo ? selectedTodo.statuSelect : "",
  //   });
  // }, [selectedTodo]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleReset}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {mode === "add" ? "add todo" : "update todo"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                placeholder="Enter yout title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Discription</Form.Label>
              <Form.Control
                as="textarea"
                name="discription"
                value={inputs.discription || ""}
                onChange={handleChange}
                placeholder="Enter yout title"
              />
            </Form.Group>
            <Selectcustom
              value={inputs.statuSelect || ""}
              onChange={handleChange}
              name="statuSelect"
              aria-label="Default select example"
            >
              {status.map((text) => (
                <option key={text.id} value={text.value}>
                  {text.text}
                </option>
              ))}
            </Selectcustom>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={closebtn}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            {mode === "add" ? "add todo" : "update todo"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoModal;
