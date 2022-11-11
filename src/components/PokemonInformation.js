import "./TeamCreator.css";
import { Button, Modal, Table } from "react-bootstrap";

const PokemonInformation = ({ show, closeModal, clickedPokemon }) => {
  return (
    <>
      <Modal show={show} onHide={() => closeModal()}>
        <Modal.Header>
          <Modal.Title>Pokemon Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Id</td>
                <td>{clickedPokemon?.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{clickedPokemon?.name}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>
                  {clickedPokemon?.abilities
                    .map((a) => a.ability.name)
                    .join(", ")}
                </td>
              </tr>
              <tr>
                <td>Moves</td>
                <td>
                  {clickedPokemon?.moves.map((a) => a.move.name).join(", ")}
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              closeModal();
            }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PokemonInformation;
