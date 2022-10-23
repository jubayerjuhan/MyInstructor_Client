import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../core/Button/Button";

interface ModalProps {
  handleClose: () => void;
  handleSave: () => void;
  handleCancel: () => void;
  show: boolean;
  title: string;
  description: string;
}
const CustomPopupModal = ({
  handleClose,
  handleSave,
  handleCancel,
  description,
  title,
  show,
}: ModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button revertColor title={"Home"}></Button>
        <Button title={"Yes"}></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomPopupModal;
