import React, { useState, useRef } from "react";
import {
  Tabs,
  Tab,
  Row,
  Col,
  Image,
  Button,
  Pagination,
  Overlay,
  Popover,
} from "react-bootstrap";
import { MDBIcon } from "mdbreact";

function Results(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  let results = props.filters; //props.ads
  //dont forget props.filters
  //filtere göre listeleme sıkıntılı düzelt

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const lastResults = results.map((item, key) => (
    <Row key={key}>
      <Col xs={6} md={4}>
        <Image
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1748ea3a1ff%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1748ea3a1ff%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.875%22%20y%3D%2295.2828125%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          rounded
        />
      </Col>
      <Col xs={10} md={8}>
        <Row>
          <h2>{item.price}</h2>
        </Row>
        <Row>
          <h4>Satılık daire | 2+1 |90 m2| 23 Yaşında | 2.Kat</h4>
        </Row>
        <Row>
          <label className="text-muted">
            Ulaş Emlak'tan Denize Çok Yakın 2+1 Full Eşyalı Bakımlı Daire
          </label>
        </Row>
        <Row>
          <div ref={ref}>
            <Button onClick={handleClick}>Telefonu Göster</Button>
            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref.current}
              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Content>
                  <Image style={{ width: "55px", height: "55px" }} />
                  <strong>CAGANOGLU APART</strong>
                  <p>İlan no:0-129312903123</p>
                </Popover.Content>
              </Popover>
            </Overlay>
          </div>
          <Button className="sm">Mesaj</Button>
          <MDBIcon icon="map-marker-alt" className="mt-4" />
          <label className="mt-3 ml-2">Ayvalık,K.</label>
        </Row>
      </Col>
      <Col xs={6} md={4}></Col>
    </Row>
  ));

  {
    /* <Tab eventKey="sahibinden" title="Sahibinden"></Tab>
 <Tab eventKey="bankadan" title="Bankadan"></Tab>
 <Tab eventKey="insaatfirmasindan" title="İnşaat firmasından"></Tab> */
  }

  return (
    <>
      <Tabs defaultActiveKey="tümsonuçlar" id="uncontrolled-tab-example">
        <Tab eventKey="tümsonuçlar" title="Tüm sonuçlar">
          {lastResults}
          <Pagination
            size="sm"
            style={{ justifyContent: "center", marginTop: "5px" }}
          >
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Tab>
        <Tab eventKey="sahibinden" title="Sahibinden"></Tab>
        <Tab eventKey="bankadan" title="Bankadan"></Tab>
        <Tab eventKey="insaatfirmasindan" title="İnşaat firmasından"></Tab>
      </Tabs>
    </>
  );
}

export default Results;
