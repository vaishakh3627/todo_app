import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({ email, ...props}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <h2>Welcome {email.email} ! </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Your Account is activated</h5>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary">Let's Go</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalComponent;
