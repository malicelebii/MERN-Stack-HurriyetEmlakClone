import React from "react";
import { Container,Tabs,Tab } from "react-bootstrap";

function MyMessages() {
  return (
    <Container>
      <Tabs defaultActiveKey="gelenmesajlar" id="uncontrolled-tab-example">
        <Tab eventKey="gelenmesajlar" title="Gelen Mesajlar">
        </Tab>
        <Tab eventKey="gonderilenmesajlar" title="Gönderilen Mesajlar">
        </Tab>
        <Tab eventKey="okunmamismesajlar" title="Okunmamış Mesajlar" >
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MyMessages;
