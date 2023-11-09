import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addTodo } from "../../redux/features/todo/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  // const intialFormState = {
  //   name: "",
  //   email: "",
  //   age: "",
  //   mobile: "",
  //   profileImage: "",
  // };
  // const [addUser, setAddUser] = useState(intialFormState);

  // const InputHeandller = (evt) => {
  //   const value = evt.target.value;
  //   setAddUser({ ...addUser, [evt.target.name]: value });
  // };
  const handleClose = () => setShow(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    console.log("taskk--" + task);
    setTask("");
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form onSubmit={SubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                name="task"
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddTodo;
