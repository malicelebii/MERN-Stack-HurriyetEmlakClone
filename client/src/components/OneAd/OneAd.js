import React,{useState,useRef} from "react";
import {
  Tabs,
  Tab,
  Row,
  Col,
  Image,
  Button,
  Pagination,
  Container,
  Overlay,
  Popover,
} from "react-bootstrap";
import { MDBIcon } from "mdbreact";


const OneAd = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [fav, setfav] = useState("gray")
  const ref = useRef(null);


  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleFav = ()=>{
      if(fav==="gray"){
          setfav("red")
      }else{
          setfav("gray")
      }
  }

  return (
    <Container style={{ height:"232px"}}>
      <Row>
        <Col xs={6} md={4} style={{position:"relative"}}>
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg"
            rounded
            style={{height:"auto",width:"100%",position:"relative"}}
          />
          <span onClick={handleFav} style={{backgroundColor:"white",borderRadius:"50%",position:"absolute",top:"10px",right:"30px",width:"30px",height:"30px", display:"flex",alignItems:"center",justifyContent:"center"}}> <MDBIcon  style={{color:fav}} fas icon="heart" /></span>
        <span style={{backgroundColor:"white", width:"55px",height:"15px",position:"absolute",bottom:"6px",left:"25px",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"10px",padding:"0 4px"}}><MDBIcon style={{color:"gray",}}   fas icon="camera"/> 27 <MDBIcon style={{color:"gray"}} fas icon="video" /> 0</span>
        </Col>
        <Col xs={10} md={8} >
          <Row style={{display:"flex",justifyContent:"space-between",padding:"8px 8px 0 0"}}>
            <h3>1.100.000 TL</h3>
            <p >06.01.2021</p>
          </Row>
          <Row>
            <p>Description</p>
          </Row>
          <Row>
            <h5>Satılık daire | 2+1 |90 m2| 23 Yaşında | 2.Kat</h5>
          </Row>
          <Row>
              <span style={{display:"inline-flex"}} className="text-muted">
            <MDBIcon icon="map-marker-alt" className="mr-2" />
         <p >Mamak,Tuzluçayır Mah.</p>
         </span>
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
                    <Image src="https://cdn.pixabay.com/photo/2016/11/21/14/53/adult-1845814__340.jpg" style={{ width: "55px", height: "55px" }} />
                    <strong>CAGANOGLU APART</strong>
                    <p>İlan no:0-129312903123</p>
                    <footer ><MDBIcon fas icon="mobile-alt" className="mr-2"/>05343540349</footer>
                  </Popover.Content>
                </Popover>
              </Overlay>
            </div>
            <Button className="sm">Mesaj</Button>
          </Row>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
    </Container>
  );
};



export default OneAd;
