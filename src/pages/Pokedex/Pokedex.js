import "./Pokedex.css";
import React from "react";
import { Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Pokedex = () => {
  return (
    <div>
      <container>
        <Row>
          <Col sm={{ span: 5, offset: 6 }} lg={{ span: 4, offset: 7 }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
      </container>
    </div>
  );
};

export default Pokedex;
