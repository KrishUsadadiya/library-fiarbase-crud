import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAsync, getAllBooks, getAllBooksAsync } from "../services/actions/library.action";
import { useState } from 'react';
import { Button, Card, Container, Form, Dropdown, Col } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
// import './blog.css';

function Home() {
  const { books, isLoading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id));
  };

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, []);
  return (
    <div>
      {isLoading ? 
      <div class="loader">
        <div class="book-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 126 75"
            class="book"
          >
            <rect
              stroke-width="5"
              stroke="#e05452"
              rx="7.5"
              height="70"
              width="121"
              y="2.5"
              x="2.5"
            ></rect>
            <line
              stroke-width="5"
              stroke="#e05452"
              y2="75"
              x2="63.5"
              x1="63.5"
            ></line>
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="#c18949"
              d="M25 20H50"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="#c18949"
              d="M101 20H76"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="#c18949"
              d="M16 30L50 30"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="#c18949"
              d="M110 30L76 30"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff74"
            viewBox="0 0 65 75"
            class="book-page"
          >
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="#c18949"
              d="M40 20H15"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="#c18949"
              d="M49 30L15 30"
            ></path>
            <path
              stroke-width="5"
              stroke="#e05452"
              d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
            ></path>
          </svg>
        </div>
      </div>
      : books.length == 0 ? (
      <h4>Data Not Found</h4>
      ) : (
      <Container className='d-flex flex-wrap gap-3 mt-2 text-start'>
        {books.map((book) => (
          <Col xl={4}>
            <Card className="card "
              style={{
                width: "100%",
                margin: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src={book.img}
                className="img"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <Card.Body className="body">
                <Card.Title>
                  <div>
                    <h5 className="title fw-bolder">Title:<span className="text-secondary fs-4 fw-normal">{book.title}</span></h5>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h6 className="desc fw-bolder">Author: <span className="text-secondary fs-4 fw-normal">{book.author}</span></h6>
                  <h6 className="price fw-bolder">Edition: <span className="text-secondary fs-4 fw-normal">{book.edition}</span></h6>
                  <h6 className="price fw-bolder">Publication: <span className="text-secondary fs-4 fw-normal">{book.publication}</span></h6>
                  <h6 className="price fw-bolder">Date: <span className="text-secondary fs-4 fw-normal">{book.date}</span></h6>
                </Card.Text>
                <Button className="edit me-3"
                  onClick={() => handleEdit(book.id)}
                  variant="warning"
                >
                  <FaEdit className="editbtn" />
                </Button>{" "}
                <Button
                  className="delete"
                  onClick={() => handleDelete(book.id)}
                  variant="danger"
                >
                  <FaTrash className="deletebtn" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Container>
      )}
    </div>
  );
}

export default Home;