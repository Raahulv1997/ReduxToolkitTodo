import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import AddTodo from "./comman/AddTodo";
import { removeTodo } from "../redux/features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const [show, setShow] = useState(false);
  const todos = useSelector((state) => state.todos);
  console.log("todos--" + JSON.stringify(todos));
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <Row>
          <Col className="bg-dark mt-4 text-white text-center p-5">
            <h1 className=" fs-1">ToDo </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
            <Button className="btn btn-primary mt-3 " onClick={handleShow}>
              Add Todo
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            {" "}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Task</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td>{item.text}</td>

                        <td>
                          <Row>
                            {" "}
                            <Col>
                              {" "}
                              <Button
                                className="bg-dark"
                                onClick={() => dispatch(removeTodo(item.id))}
                              >
                                <FontAwesomeIcon icon={faEye} />
                              </Button>
                            </Col>
                            <Col>
                              {" "}
                              <Button className="bg-success">
                                {" "}
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </Button>
                            </Col>
                            <Col>
                              {" "}
                              <Button className="bg-danger">
                                <FontAwesomeIcon icon={faTrash} />
                              </Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <AddTodo show={show} setShow={setShow} />
    </div>
  );
};

export default Home;
