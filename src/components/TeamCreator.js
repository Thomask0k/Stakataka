import "./TeamCreator.css";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const TeamCreator = ({ show, closeModal }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <Modal show={show} onHide={() => closeModal()}>
        <Modal.Header>
          <Modal.Title>Create a new team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label style={error ? { color: "red" } : {}}>Title</Form.Label>
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            style={error ? { border: "1px solid red " } : {}}
            type="title"
            placeholder="Team Title"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (!title || title === "") {
                setError(true);

                return;
              }

              setError(false);
              closeModal(title);
            }}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TeamCreator;
