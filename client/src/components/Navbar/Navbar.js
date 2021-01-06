import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Badge,
  Form,
  Col,
  Row,
  FormControl,
  Button,
} from "react-bootstrap/";
import "./Navbar.css";
import { useSelector } from "react-redux";
import axios from "axios";
import LoginModal from "../LoginModal/LoginModal";
import $ from 'jquery'

function NavbarMenu() {
  let user = useSelector((state) => state.user);

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        let scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

  return (
    <Navbar bg="white" expand="lg" className="smart-scroll" style={{position:"fixed" ,height:"80px", top:"0",right:"0",left:"0",zIndex:1}} >
      <Container style={{height:"80px",display:"flex",alignItems:"center"}}>
        <Col md={2}>
          <Navbar.Brand href="/">
            <img
              id="immmm"
              src="https://www.hurriyetemlak.com/_nuxt/img/header-logo.f6543c3.svg"
              alt="logo"
              style={{height:"auto"}}
            ></img>
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Col md={8} style={{width:"auto"}}>
            <Form>
              <Form.Control
                type="text"
                as="input"
                placeholder="Konum,firma adı,ilan no ile arama yapın"
              />
            </Form>
          </Col>
          <Col className="ml-auto" md={4} style={{display:"flex",justifyContent:"flex-end"}}>
            <div className="dropdown">
              <div
                className="dropbtn"
                style={{
                  borderRadius: "20px",
                  height: "40px",
                  width: "115px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {user && user.userData && user.userData.firstName ? (
                  <span style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",fontSize:"11px"}}>
                    Merhaba {user?.userData?.firstName}{" "}
                    <img src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449__340.png" style={{ height: "32px", width: "32px",borderRadius:"50%" }} />
                  </span>
                ) : (
                "  Hesabım"
                )}
              </div>
              <div className="dropdown-content">
                <LoginModal />
                <a href="/hesabim/profilim">Profilim</a>
                <a href="/ilanver">İlan ver </a>
                <a href="/ilanlarim">İlanlarım </a>
                <a href="/favorilerim">Favorilerim </a>
                <a href="/kayitliaramalarim">Kayıtlı aramalarım </a>
                <a href="/mesajlarim">Mesajlarım </a>
                <a href="/profilduzenle">Üyelik işlemlerim </a>
                {user?.userData?.isAuth && (
                  <a href="/" onClick={() => axios.get("/api/users/logout")}>
                    Çıkış yap{" "}
                  </a>
                )}
              </div>
            </div>
            <Button
              href="/ilanver"
              style={{ borderRadius: "21px", height: "40px", width: "140px",textAlign:"center",fontSize:"16px" ,fontWeight:"500",lineHeight:"42px",display:"flex",alignItems:"center",}}
              variant="danger"
            >
            İlan ver
            </Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
