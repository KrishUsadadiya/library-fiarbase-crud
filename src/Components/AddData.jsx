import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookAsync } from "../services/actions/library.action";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router";
import './buton.css';

function AddData() {
    const { error, isCreated } = useSelector(state => state.bookReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [bookInput, setBookInput] = useState({
        img: "",
        title: "",
        author: "",
        edition: "",
        publication: "",
        date: "",
    });

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        Object.keys(bookInput).forEach(key => {
            if (!bookInput[key]) {
                errors[key] = "This field is required";
                isValid = false;
            }
        });

        setErrors(errors);
        return isValid;
    };

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setBookInput({
            ...bookInput,
            [name]: value,
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let id = generateUniqueId({
                length: 5,
                useLetters: false,
            });
            dispatch(addBookAsync({ ...bookInput, id: id.toString() }));
        }
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/");
        }
    }, [isCreated, navigate]);

    return (
        <>
            <Container>
                {error && <p>{error}</p>}
                <Form onSubmit={handelSubmit}>
                    {Object.keys(bookInput).map((field, index) => (
                        <Form.Group as={Row} className="mb-3" key={index}>
                            <Form.Label column sm="2" className="text-white">
                                {`Book ${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type={field === "date" ? "date" : field === "edition" ? "number" : "text"}
                                    placeholder={`Enter Book ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                    name={field}
                                    value={bookInput[field]}
                                    onChange={handelChanged}
                                />
                                {errors[field] && <small className="text-white">{errors[field]}</small>}
                            </Col>
                        </Form.Group>
                    ))}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2"></Form.Label>
                        <Col sm="10">
                            <button type="submit" className="button-54">Add Book</button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export default AddData;
