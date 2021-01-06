import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

function MyAds() {
  return (
    <Container>
      <Tabs defaultActiveKey="özet" id="uncontrolled-tab-example" >
        <Tab eventKey="özet" title="Özet"></Tab>
        <Tab eventKey="aktif" title="Aktif ilanlarım"></Tab>
        <Tab eventKey="pasif"  title="Pasif ilanlarım"></Tab>
        <Tab eventKey="tamamlanmamis" title="Tamamlanmamış ilanlarım"></Tab>
      </Tabs>
    </Container>
  );
}

export default MyAds;
