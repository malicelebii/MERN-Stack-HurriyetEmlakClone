import { MDBIcon } from "mdbreact";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="container">
      <Container
        style={{ display: "inline-flex", justifyContent: "space-between" }}
      >
        <Row>
          <div
          id="footer-col-1"
          >
            <a href="#">Yasal uyarı</a>

            <a  href="#">Kullanım Koşulları</a>

            <a href="#">Aydınlatma Metni</a>

            <a href="#">Çerez Politikası</a>

            <a href="#">İlan Yayınlama Kuralları</a>
          </div>
        </Row>
        <Row>
          <div
          id="footer-col-2"
          >
            <a href="#">Hakkımızda</a>
            <a href="#">Üyelik sözleşmesi</a>
            <a href="#">Reklam</a>
            <a href="#">Bize ulasın</a>
          </div>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col>
            <h5>Sosyal medyalarımızı takip edib</h5>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {["facebook", "instagram", "twitter", "linkedin", "youtube"].map(
                (social) => (
                  <div style={{ height: "auto" }}>
                    <a href="/">
                      {" "}
                      <MDBIcon size="2x" fab icon={social} />
                    </a>
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col>
            <h5>Mobil Uygularımızı indirin</h5>
            <div
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1px 0px",
                }}
              >
                <MDBIcon fab size="2x" icon="apple" className="mr-3" />
                App Storeden indir
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1px 0px",
                }}
              >
                <MDBIcon fab size="2x" icon="google-play" className="mr-3" />
                Google Playden indir
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
         <img src="https://www.hurriyetemlak.com/_nuxt/img/etbis-logo.7a1351c.jpeg" style={{maxHeight:"100%", maxWidth:"100%"}}>
         
         </img>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
