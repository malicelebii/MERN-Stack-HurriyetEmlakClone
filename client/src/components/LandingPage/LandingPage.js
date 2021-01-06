import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import Filters from "../Filters/Filters";
import Results from "../Results/Results";
import Axios from "axios";
import {SERVER} from '../Config'

function LandingPage() {
  const [filters, setfilters] = useState([]);
  const [ads, setads] = useState([]);

  const handleClick = (filters) => {
    setfilters(filters);
  };

  useEffect(() => {
    Axios.get(`${SERVER}/ads/allads`)
      .then((ads) => {
        setads(ads.data);
        console.log(ads.data);
      })
      .catch((err) => console.log(err));

  

  }, []);

  return (
    <Container >
      <Row style={{ marginTop: "25px" }}>
        <Col>
          <MDBIcon icon="home" />
          <MDBIcon icon="angle-right" />
        </Col>
        <Col style={{ display: "flex" }}>
          <Button
            className="ml-auto"
            variant="outline-secondary"
            onClick={() => {
              console.log(filters);
            }}
          >
            <MDBIcon icon="map" />
            Harita
          </Button>
          <Button variant="danger">
            <MDBIcon icon="sort-amount-down-alt" />
            Sırala
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "25px", display: "flex", position: "relative" }}>
        <Col md={4}>
          <Filters onShowClick={handleClick} />
        </Col>

        <Col md={8}>
          <h4>Satılık Konut İlanları için 178.478 ilan bulundu</h4>
          <Results filters={filters} ads={ads} />
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
