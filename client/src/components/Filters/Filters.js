import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button, Form, FormGroup } from "react-bootstrap";
import "./Filters.css";
import Select from "react-select"; //option
import cityData from "../sehir.json";
import countyData from "../ilce.json";
import quarterData from "../mahalle.json";

function Estate(props) {
  const [selectedCity, setselectedCity] = useState("");
  const [selectedCounty, setselectedCounty] = useState("");
  const [selectedQuarter, setselectedQuarter] = useState(quarterData);
  const [category, setcategory] = useState("");
  const [type, settype] = useState("");
  const [lowestPrice, setlowestPrice] = useState(0);
  const [highestPrice, sethighestPrice] = useState(0);
  const [lowestSize, setlowestSize] = useState(0);
  const [highestSize, sethighestSize] = useState(0);
  const [roomNumber, setroomNumber] = useState(0);
  const [age, setage] = useState(0);
  const [floor, setfloor] = useState(0);
  const [totalFloor, settotalFloor] = useState(0);
  const [heatingType, setheatingType] = useState("");
  const [facade, setfacade] = useState("");
  const [date, setdate] = useState("");
  const [check1, setcheck1] = useState(false);

  const onCityChange = (e) => {
    setselectedCity(e.target.value);
  };

  const onCountyChange = (e) => {
    setselectedCounty(e.target.value);
  };

  const onQuarterChange = (e) => {
    setselectedQuarter(e.target.value);
  };

  const onCategoryChange = (e) => {
    setcategory(e.target.value);
  };

  const onTypeChange = (e) => {
    settype(e.target.value);
  };

  const onLowestPriceChange = (e) => {
    setlowestPrice(e.target.value);
  };

  const onHighestPriceChange = (e) => {
    sethighestPrice(e.target.value);
  };

  const onLowestSizeChange = (e) => {
    setlowestSize(e.target.value);
  };

  const onHighestSizeChange = (e) => {
    sethighestSize(e.target.value);
  };

  const onRoomChange = (e) => {
    setroomNumber(e.target.value);
  };

  const onAgeChange = (e) => {
    setage(e.target.value);
  };

  const onFloorChange = (e) => {
    setfloor(e.target.value);
  };

  const onTotalFloorChange = (e) => {
    settotalFloor(e.target.value);
  };

  const onHeatChange = (e) => {
    setheatingType(e.target.value);
  };

  const onFacadeChange = (e) => {
    setfacade(e.target.value);
  };

  const onDateChange = (e) => {
    setdate(e.target.value);
  };
  const handleCheck = (e) => {
    setcheck1(!e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let filters = {
      selectedCity,
      selectedCounty,
      category,
      type,
      roomNumber,
      age, //herşeyi array olarak at [10,11]
      floor,
      totalFloor,
      heatingType,
      facade,
      date,
    };

    Object.filter = (obj, predicate) =>
      Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

    let filteredValue = Object.filter(filters, (filter) => filter);

    Axios.post("http://localhost:5000/api/filters", filteredValue)
      .then((filteredValue) => props.onShowClick(filteredValue.data))
      .catch((err) => console.log(err));
  };

  let tip;
  if (category === "konut") {
    tip = (
      <Form.Control size="md" as="select" style={{ marginTop: "20px" }}>
        <option value="daire">Daire </option>
        <option value="villa">Villa</option>
        <option value="mustakil">Müstakil ev</option>
      </Form.Control>
    );
  } else if (category === "isyeri") {
    tip = (
      <Form.Control size="md" as="select" style={{ marginTop: "20px" }}>
        <option value="dukkan">Dükkan </option>
        <option value="ofis">Ofis</option>
        <option value="bina">Bina</option>
      </Form.Control>
    );
  } else if (category === "arsa") {
    tip = (
      <Form.Control size="md" as="select" style={{ marginTop: "20px" }}>
        <option value="tarla">Tarla </option>
        <option value="imarli">İmarlı</option>
        <option value="bahce">Bahçe</option>
      </Form.Control>
    );
  } else if (category === "devremulk") {
    tip = (
      <Form.Control size="md" as="select" style={{ marginTop: "20px" }}>
        <option value="daire">Daire </option>
        <option value="villa">Villa</option>
        <option value="dublex">Dublex</option>
      </Form.Control>
    );
  } else if (category === "turistikisletme") {
    tip = (
      <Form.Control size="md" as="select" style={{ marginTop: "20px" }}>
        <option value="daire">Apart </option>
        <option value="villa">Butik otel </option>
        <option value="dublex">Kaplıca</option>
      </Form.Control>
    );
  }

  let arr = [];
  for (let i = 0; i < 30; i++) {
    //react-select
    // arr.push({value:i,label:i});
    arr.push(i);
  }

  const sayilar = arr.map((sayi) => (
    <option key={sayi} value={sayi}>
      {sayi}
    </option>
  ));
  // console.log(sayilar)

  return (
    <Tabs defaultActiveKey="satilik" className="tabs">
      <Tab eventKey="satilik" title="Satılık" tabClassName="tabu">
        <Form className="ad">
          <Form.Group style={{ marginTop: "20px" }} id="konum">
            <Form.Label htmlFor="konum">Konum</Form.Label>
            <Form.Control size="md" as="select" onChange={onCityChange}>
              {cityData.map((city) => (
                <option key={city.sehir_id} value={city.sehir_key}>
                  {city.sehir_title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="md"
              as="select"
              onChange={onCountyChange}
              disabled={selectedCity ? false : true}
            >
              {countyData.map((county) => (
                  selectedCity === county.ilce_sehirkey ? 
                <option key={county.ilce_id} value={county.ilce_key} >
                  {county.ilce_title}
                </option>
                :null
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="md"
              as="select"
              onChange={onQuarterChange}
              disabled={selectedCounty ? false : true}
            >
              {quarterData.map(quarter=>
              selectedCounty===quarter.mahalle_ilcekey ?
              <option key={quarter.mahalle_id} value={quarter.mahalle_key}>
             {quarter.mahalle_title}
                </option>
              :null
              )
            }
            </Form.Control>
            <Select options={arr} isMulti />
          </Form.Group>

          <Form.Label>Kategori:</Form.Label>
          <Form.Group onChange={onCategoryChange}>
            <Form.Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Konut"
                  value="konut"
                  name="kategori"
                  id="konut"
                />
                <Form.Check
                  type="radio"
                  label="Arsa"
                  name="kategori"
                  id="arsa"
                  value="arsa"
                />
                <Form.Check
                  type="radio"
                  label="Turistik işletme"
                  value="turistikisletme"
                  name="kategori"
                  id="turistikisletme"
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="İşyeri"
                  value="isyeri"
                  name="kategori"
                  id="isyeri"
                />
                <Form.Check
                  type="radio"
                  label="Devremülk"
                  value="devremulk"
                  name="kategori"
                  id="devremulk"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          {category ? (
            <Form.Group onChange={onTypeChange}>
              <Form.Label>
                {category.charAt(0).toUpperCase() + category.slice(1)} tipi
              </Form.Label>
              {tip}
            </Form.Group>
          ) : null}

          <Form.Group>
            <Form.Label>Fiyat:</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control
                  type="number"
                  onChange={onLowestPriceChange}
                  placeholder="En az "
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  onChange={onHighestPriceChange}
                  placeholder="En fazla"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Size:</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control
                  type="number"
                  onChange={onLowestSizeChange}
                  placeholder="En az m2 "
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  onChange={onHighestSizeChange}
                  placeholder="En fazla m2"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Oda salon sayısı:</Form.Label>
            <Form.Control size="md" as="select" onChange={onRoomChange}>
              {sayilar}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Bina yaşı:</Form.Label>
            <Form.Control size="md" as="select" onChange={onAgeChange}>
              {sayilar}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Bulunduğu kat:</Form.Label>
            <Form.Control size="md" as="select" onChange={onFloorChange}>
              {sayilar}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Binadaki kat sayısı:</Form.Label>
            <Form.Control size="md" as="select" onChange={onTotalFloorChange}>
              {sayilar}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Isınma tipi:</Form.Label>
            <Form.Control size="md" as="select" onChange={onHeatChange}>
              <option value="kombi">Kombi</option>
              <option value="klima">Klima</option>
              <option value="merkezi">Merkezi</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Cephe:</Form.Label>
            <Form.Control size="md" as="select" onChange={onFacadeChange}>
              <option value="dogu">Doğu</option>
              <option value="bati">Batı</option>
              <option value="guney">Güney</option>
              <option value="kuzey">Kuzey</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>İlan tarihi:</Form.Label>
            <Form.Control size="md" as="select" onChange={onDateChange}>
              <option value="bugun">Bugünün ilanları</option>
              <option value="sonucgun">Son 3 gün</option>
              <option value="sonbirhafta">Son 1 hafta</option>
              <option value="sonbiray">Son 1 ay</option>
            </Form.Control>
          </Form.Group>
          <Form.Group   >
            <Form.Check
              type="switch"
              label="Krediye uygun"
              name="avaliableForLoan"
              id="avaliableForLoan"
            />
            <Form.Check
              type="switch"
              label="Takasa uygun"
              name="trade"
              id="trade"
            />
            <Form.Check
              type="switch"
              label="Site içinde"
              name="onsite"
              id="onsite"
            />
            <Form.Check
              type="switch"
              label="Krediye uygun"
              name="kredi"
              id="kredi"
            />
            <Form.Check
              type="switch"
              label="Eşyalı"
              name="furnished"
              id="furnished"
            />
            <Form.Check
              type="switch"
              label="Asansörlü"
              name="ascelator"
              id="ascelator"
            />
            <Form.Check
              type="switch"
              label="Bahçeli"
              name="garden"
              id="garden"
            />
            <Form.Check
              type="switch"
              label="Balkonlu"
              name="balkon"
              id="balkon"
            />
            <Form.Check
              type="switch"
              label="Otopark"
              name="otopark"
              id="otopark"
            />
          </Form.Group>
          <div
            style={{
              position: "-webkit-sticky",
              position: "sticky",
              zIndex:"1",
              bottom: "0",
              backgroundColor: "white",
            }}
          >
            <Button type="submit"  onClick={onSubmit} variant="danger">
              Ara
            </Button>
            <Button style={{ textDecoration: "none" }}>Aramayı kaydet</Button>
          </div>
        </Form>
      </Tab>
      <Tab eventKey="profile" title="Kiralık" tabClassName="tabu">
        dasd
      </Tab>
      <Tab
        eventKey="gunlukkiralik"
        title="Günlük Kiralık"
        tabClassName="tabu"
      ></Tab>
      <Tab eventKey="projeler" title="Projeler" tabClassName="tabu"></Tab>
    </Tabs>
  );
}

export default Estate;
