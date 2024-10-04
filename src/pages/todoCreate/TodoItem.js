import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const TodoItem = (props) => {
  const {
    username,
    discription,
    statuSelect,
    time,
    handleDelete,
    handleUpdate,
  } = props;

  return (
    <>
      <div style={{ marginBottom: "20px" }} className="todo-item">
        <Stack direction="horizontal" gap={1}>
          <Form.Check type="radio" id="" label="" />
          <ul>
            <li>
              <span>
                <strong>{username}</strong>
                <br />
                {discription}
              </span>
              <br />
              {statuSelect}
              <br />
              {time}
            </li>
          </ul>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <Button onClick={handleDelete}>
            <RiDeleteBin6Fill />
          </Button>
          <Button onClick={handleUpdate}>
            <MdModeEdit />
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default TodoItem;
