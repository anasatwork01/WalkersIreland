import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MyButton } from "./style";
import { useNavigate } from "react-router";

const MyModal = ({show,handleClose}) => {
  const navigate = useNavigate();


  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Please Login!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Only registered users can write a Blog</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <MyButton variant="primary" onClick={()=>{navigate('/login')}}>
          Login
        </MyButton>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
