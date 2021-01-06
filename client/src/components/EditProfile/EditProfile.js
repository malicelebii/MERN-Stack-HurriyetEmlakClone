import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
function EditProfile() {
  return (
    <Container>
      <Row style={{ backgroundColor: "#D34E4F", color: "white" }}>
        <h2>üyelik islemleri</h2>
      </Row>
      <Row>
        <Form>
          <Form.Group>
            <Col xs={8} md={12}>
              <Row>
                <Form.Label>Şifre:</Form.Label>
                <Button size="sm">Degistir</Button>
              </Row>
              <Row>
                <Form.Label>Ad</Form.Label>
                <Form.Control type="text" />
              </Row>
              <Row>
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" />
              </Row>
              <Row>
                <Form.Label>E-posta</Form.Label>
                <Form.Control type="mail" />
              </Row>
              <Row>
                <Form.Label>İl</Form.Label>
                <Form.Control as="select">
                  <option>ankara</option>
                  <option>istanbul</option>
                </Form.Control>
              </Row>
              <Row>
                <Form.Label>İlçe</Form.Label>
                <Form.Control as="select">
                  <option>Mamak</option>
                  <option>Altındag</option>
                </Form.Control>
              </Row>
              <Row>
                <Form.Label>Mahalle</Form.Label>
                <Form.Control as="select">
                  <option>Tuzlu</option>
                  <option>abidinpasa</option>
                </Form.Control>
              </Row>
              <Row>
                <Form.Label>Adres</Form.Label>
                <Form.Control as="textarea" />
              </Row>
              <Row>
                <Form.Label>Cep Telefonu</Form.Label>
                <Form.Control type="text" />
              </Row>
            </Col>
            <Button>Kaydet</Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default EditProfile;
