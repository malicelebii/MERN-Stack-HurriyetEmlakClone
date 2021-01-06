import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Button,
  Container,
  Row,
  Form,
  Col,
  Accordion,
  Image,
} from "react-bootstrap";
import "react-step-progress/dist/index.css";
import "../../App.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImgUploader from "../ImgUpload/ImgUpload";
import "./GiveAd.css";
import cityData from "../sehir.json";
import countyData from "../ilce.json";
import quarterData from "../mahalle.json";

function GiveAd() {
  const [selectedCity, setselectedCity] = useState("");
  const [selectedCounty, setselectedCounty] = useState("");
  const [selectedQuarter, setselectedQuarter] = useState(quarterData);
  const [category, setcategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [floor, setfloor] = useState(0);
  const [totalFloor, settotalFloor] = useState(0);
  const [availableForLoan, setavailableForLoan] = useState(false);
  const [furnished, setfurnished] = useState(false);
  const [fuelType, setfuelType] = useState("");
  const [structureState, setstructureState] = useState("");
  const [usageState, setusageState] = useState("");
  const [onSite, setonSite] = useState(false);
  const [facade, setfacade] = useState("");
  const [dues, setdues] = useState(0);
  const [rentalIncome, setrentalIncome] = useState(0);
  const [adType, setadType] = useState("");
  const [age, setage] = useState(0);
  const [heatingType, setheatingType] = useState("");
  const [roomNumber, setroomNumber] = useState(0);
  const [livingRoomNumber, setlivingRoomNumber] = useState(0);
  const [bathNumber, setbathNumber] = useState(0);
  const [sizeBrut, setsizeBrut] = useState(0);
  const [sizeNet, setsizeNet] = useState(0);
  const [description, setdescription] = useState("");
  const [rules, setrules] = useState(false);

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

  const onSubcategoryChange = (e) => {
    setsubCategory(e.target.value);
  };

  const onAdTypeChange = (e) => {
    setadType(e.target.value);
  };

  const onTitleChange = (e) => {
    settitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setdescription(e.target.value);
  };

  const onPriceChange = (e) => {
    setprice(e.target.value);
  };

  const onAgeChange = (e) => {
    setage(e.target.value);
  };

  const onHeatingTypeChange = (e) => {
    setheatingType(e.target.value);
  };

  const onRoomNumberChange = (e) => {
    setroomNumber(e.target.value);
  };

  const onLivingRoomNumberChange = (e) => {
    setlivingRoomNumber(e.target.value);
  };

  const onBathNumberChange = (e) => {
    setbathNumber(e.target.value);
  };

  const onSizeBrutChange = (e) => {
    setsizeBrut(e.target.value);
  };

  const onSizeNetChange = (e) => {
    setsizeNet(e.target.value);
  };

  const onFloorChange = (e) => {
    setfloor(e.target.value);
  };

  const onTotalFloorChange = (e) => {
    settotalFloor(e.target.value);
  };
  const onAvailableForLoanChange = (e) => {
    setavailableForLoan(e.target.value);
  };
  const onFurnishedChange = (e) => {
    setfurnished(e.target.value);
  };

  const onFuelTypeChange = (e) => {
    setfuelType(e.target.value);
  };
  const onStructureStateChange = (e) => {
    setstructureState(e.target.value);
  };
  const onUsageStateChange = (e) => {
    setusageState(e.target.value);
  };

  const onOnSiteChange = (e) => {
    setonSite(e.target.value);
  };
  const onFacadeChange = (e) => {
    setfacade(e.target.value);
  };

  const onDuesChange = (e) => {
    setdues(e.target.value);
  };
  const onRentalIncomeChange = (e) => {
    setrentalIncome(e.target.value);
  };

  const onRulesChange = (e) => {
    setrules(!rules);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:5000/api/ads");
  };

  let arr = [];
  for (let i = 0; i < 30; i++) {
    arr.push(i);
  }

  const sayilar = arr.map((sayi) => <option value={sayi}>{sayi}</option>);
  return (
    <Container id="container">
      <Form>
        <Container>
          <div>
            <Form.Row id="category-title">
              <Form.Label>İlan kategorisi</Form.Label>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Kategori</Form.Label>
                  <Form.Control
                    onChange={onCategoryChange}
                    size="sm"
                    as="select"
                  >
                    <option value="">Seçiniz</option>
                    <option value="konut">Konut</option>
                    <option value="devremulk">Devremülk</option>
                    <option value="isyeri">İşyeri</option>
                    <option value="arsa">Arsa</option>
                    <option value="turistikisletme">Turistik işletme</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                {category === "konut" ? (
                  <Form.Group>
                    <Form.Label>
                      {category[0].toUpperCase() +
                        category.slice(1) +
                        " alt kategori"}
                    </Form.Label>
                    <Form.Control
                      onChange={onSubcategoryChange}
                      size="sm"
                      as="select"
                    >
                      <option value="">Seçiniz</option>
                      <option value="daire">Daire</option>
                      <option value="ciftlik">Çiftlik Evi</option>
                      <option value="dag">Dağ evi</option>
                      <option value="bina">Bina</option>
                      <option value="kooperatif">Kooperatif</option>
                    </Form.Control>
                  </Form.Group>
                ) : category === "devremulk" ? (
                  <Form.Group>
                    <Form.Label>
                      {category[0].toUpperCase() +
                        category.slice(1) +
                        " alt kategori"}
                    </Form.Label>
                    <Form.Control
                      onChange={onSubcategoryChange}
                      size="sm"
                      as="select"
                    >
                      <option value="">Seçiniz</option>
                      <option value="aparatman">Apartman Dairesi</option>
                      <option value="villa">Villa</option>
                      <option value="dublex">Dublex</option>
                      <option value="triplex">Triplex</option>
                    </Form.Control>
                  </Form.Group>
                ) : category === "isyeri" ? (
                  <Form.Group>
                    <Form.Label>
                      {category[0].toUpperCase() +
                        category.slice(1) +
                        " alt kategori"}
                    </Form.Label>
                    <Form.Control
                      onChange={onSubcategoryChange}
                      size="sm"
                      as="select"
                    >
                      <option value="">Seçiniz</option>
                      <option value="aparatman">Apartman dairesi</option>
                      <option value="atolye">Atölye</option>
                      <option value="benzinistasyonu">Benzin istasyonu</option>
                    </Form.Control>
                  </Form.Group>
                ) : category === "arsa" ? (
                  <Form.Group>
                    <Form.Label>
                      {category[0].toUpperCase() +
                        category.slice(1) +
                        " alt kategori"}
                    </Form.Label>
                    <Form.Control
                      onChange={onSubcategoryChange}
                      size="sm"
                      as="select"
                    >
                      <option value="">Seçiniz</option>
                      <option value="bag">Bağ</option>
                      <option value="bahce">Bahçe</option>
                      <option value="ciftlik">Çiftlik</option>
                    </Form.Control>
                  </Form.Group>
                ) : category === "turistikisletme" ? (
                  <Form.Group>
                    <Form.Label>
                      {category[0].toUpperCase() +
                        category.slice(1) +
                        " alt kategori"}
                    </Form.Label>
                    <Form.Control
                      onChange={onSubcategoryChange}
                      size="sm"
                      as="select"
                    >
                      <option value="">Seçiniz</option>
                      <option value="apart">Apart</option>
                      <option value="butikotel">Butik otel</option>
                      <option value="kaplica">Kaplıca tesisi</option>
                    </Form.Control>
                  </Form.Group>
                ) : null}
              </Col>
              <Col>
                {subCategory && category && (
                  <Form.Group>
                    <Form.Label>Yayın tipi</Form.Label>
                    <Form.Control
                      onChange={onAdTypeChange}
                      size="sm"
                      as="select"
                    >
                      <option value="">Seçiniz</option>
                      <option value="satilik">Satılık</option>
                      <option value="kiralık">Kiralık</option>
                    </Form.Control>
                  </Form.Group>
                )}
              </Col>
            </Form.Row>
          </div>
          <div hidden={adType ? false : true}>
            <Form.Group>
              <Form.Row id="category-title">
                <Form.Label>İlan Bilgileri</Form.Label>
              </Form.Row>
              <Form.Row>
                <Form.Label>İlan başlığı</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={onTitleChange}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Form.Label>İlan açıklaması</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={onDescriptionChange}
                />
              </Form.Row>
            </Form.Group>
            <Form.Row>
              <Form.Group>
                <Form.Label>Fiyat</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={onPriceChange}
                />
                <Form.Control as="select">
                  <option>TL</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Oda sayısı</Form.Label>
                <Form.Control
                  type="number"
                  value={roomNumber}
                  onChange={onRoomNumberChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Salon sayısı</Form.Label>
                <Form.Control
                  type="number"
                  value={livingRoomNumber}
                  onChange={onLivingRoomNumberChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Banyo sayısı</Form.Label>
                <Form.Control
                  type="number"
                  value={bathNumber}
                  onChange={onBathNumberChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Brüt M2</Form.Label>
                <Form.Control
                  type="number"
                  value={sizeBrut}
                  onChange={onSizeBrutChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Net M2</Form.Label>
                <Form.Control
                  type="number"
                  value={sizeNet}
                  onChange={onSizeNetChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Isınma tipi</Form.Label>
                <Form.Control as="select" onChange={onHeatingTypeChange}>
                  <option value="">Seçiniz</option>
                  <option value="kombi">Kombi</option>
                  <option value="gunesenerjisi">Güneş enerjisi</option>
                  <option value="klima">Klima</option>
                  <option value="soba">Soba</option>
                  <option value="merkezi">Merkezi</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Binanın yaşı</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={onAgeChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Bulunduğu kat</Form.Label>
                <Form.Control
                  type="number"
                  value={floor}
                  onChange={onFloorChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Binadaki kat sayısı</Form.Label>
                <Form.Control
                  type="number"
                  value={totalFloor}
                  onChange={onTotalFloorChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Krediye uygun</Form.Label>
                <Form.Control
                  as="select"
                  value={availableForLoan}
                  onChange={onAvailableForLoanChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="true">Evet</option>
                  <option value="false">Hayır</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Eşyalı</Form.Label>
                <Form.Control
                  as="select"
                  value={furnished}
                  onChange={onFurnishedChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="true">Evet</option>
                  <option value="false">Hayır</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Yakıt tipi</Form.Label>
                <Form.Control
                  as="select"
                  value={fuelType}
                  onChange={onFuelTypeChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="komur">Kömür-odun</option>
                  <option value="akaryakit">Akaryakıt</option>
                  <option value="elektrik">Elektrik</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Yapının durumu</Form.Label>
                <Form.Control
                  as="select"
                  value={structureState}
                  onChange={onStructureStateChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Sıfır">Sıfır</option>
                  <option value="İkinci el">İkinci el</option>
                  <option value="Yapım aşamasında">Yapım aşamasında</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Kullanıcı durumu</Form.Label>
                <Form.Control
                  as="select"
                  value={usageState}
                  onChange={onUsageStateChange}
                >
                  <option value="">Boş</option>
                  <option value="Kiracı oturuyor">Kiracı oturuyor</option>
                  <option value="Ev sahibi oturuyor">Ev sahibi oturuyor</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Site içinde</Form.Label>
                <Form.Control
                  as="select"
                  value={onSite}
                  onChange={onOnSiteChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="true">Evet</option>
                  <option value="false">Hayır</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Site içinde</Form.Label>
                <Form.Control
                  as="select"
                  value={facade}
                  onChange={onFacadeChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Kuzey">Kuzey</option>
                  <option value="Güney">Güney</option>
                  <option value="Doğu">Doğu</option>
                  <option value="Batı">Batı</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Aidat</Form.Label>
                <Form.Control
                  type="number"
                  value={dues}
                  onChange={onDuesChange}
                />
                <Form.Control as="select">
                  <option>TL</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Kira getirisi</Form.Label>
                <Form.Control
                  type="number"
                  value={rentalIncome}
                  onChange={onRentalIncomeChange}
                />
                <Form.Control as="select">
                  <option>TL</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </div>
          <div hidden={adType ? false : true}>
            <Form.Row id="category-title">
              <Form.Label>İlan Adres Bilgileri</Form.Label>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group id="konum">
                  <Form.Label htmlFor="konum">İl</Form.Label>
                  <Form.Control size="md" as="select" onChange={onCityChange}>
                    {cityData.map((city) => (
                      <option key={city.sehir_id} value={city.sehir_key}>
                        {city.sehir_title}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>İlçe</Form.Label>
                  <Form.Control
                    size="md"
                    as="select"
                    onChange={onCountyChange}
                    disabled={selectedCity ? false : true}
                  >
                    {countyData.map((county) =>
                      selectedCity === county.ilce_sehirkey ? (
                        <option key={county.ilce_id} value={county.ilce_key}>
                          {county.ilce_title}
                        </option>
                      ) : null
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Semt-Mahalle</Form.Label>
                  <Form.Control
                    size="md"
                    as="select"
                    onChange={onQuarterChange}
                    disabled={selectedCounty ? false : true}
                  >
                    {quarterData.map((quarter) =>
                      selectedCounty === quarter.mahalle_ilcekey ? (
                        <option
                          key={quarter.mahalle_id}
                          value={quarter.mahalle_key}
                        >
                          {quarter.mahalle_title}
                        </option>
                      ) : null
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          </div>
          <div hidden={adType ? false : true}>
            <ImgUploader />
          </div>
          <div hidden={adType ? false : true}>
            <Form.Row id="category-title">
              <Form.Label>İlan özellikleri</Form.Label>
            </Form.Row>
            <Form.Row
              style={{ fontSize: "14px", fontWeight: "500", margin: "5px 0" }}
            >
              İç özellikler
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Check label="ADSL" />
                <Form.Check label="Ahşap doğrama" />
                <Form.Check label="Alarm" />
                <Form.Check label="Ankastre Mutfak" />
                <Form.Check label="Balkon" />
                <Form.Check label="Barbekü" />
                <Form.Check label="Beyaz eşyalı" />
                <Form.Check label="Çamaşır odası" />
                <Form.Check label="Çelik Kapı" />
                <Form.Check label="Duşakabin" />
                <Form.Check label="Duvar Kağıdı" />
                <Form.Check label="Ebeveyn Banyolu" />
                <Form.Check label="Giyinme Odası" />
                <Form.Check label="Gömme Dolap" />
                <Form.Check label="Görüntülü Diafon" />
              </Col>
              <Col>
                <Form.Check label="Halı Kaplama" />
                <Form.Check label="Hazır Mutfak" />
                <Form.Check label="Hilton Banyo" />
                <Form.Check label="Isıcam" />
                <Form.Check label="Jakuzi" />
                <Form.Check label="Kablo TV-Uydu" />
                <Form.Check label="Kapalı balkon" />
                <Form.Check label="Kartonpiyer" />
                <Form.Check label="Klima" />
                <Form.Check label="Laminant Mutfak" />
                <Form.Check label="Marley" />
                <Form.Check label="Mermer Zemin" />
                <Form.Check label="Mobilyalı" />
                <Form.Check label="Mutfak doğalgazı" />
                <Form.Check label="Panel Kapı" />
              </Col>
              <Col>
                <Form.Check label="Panjur" />
                <Form.Check label="Parke" />
                <Form.Check label="Parke-Laminant" />
                <Form.Check label="Saten Alçı" />
                <Form.Check label="Saten Boya" />
                <Form.Check label="Sauna" />
                <Form.Check label="Seramik Zemin" />
                <Form.Check label="Spot ışık" />
                <Form.Check label="Şömine" />
                <Form.Check label="Teras" />
                <Form.Check label="Vestiyer" />
                <Form.Check label="Yerden ısıtma" />
                <Form.Check label="Parke-Lamine" />
              </Col>
            </Form.Row>
            <Form.Row
              style={{ fontSize: "14px", fontWeight: "500", margin: "5px 0" }}
            >
              Dış özellikler
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Check label="Asansör" />
                <Form.Check label="Bahçeli" />
                <Form.Check label="Cam mozaik kaplama" />
                <Form.Check label="Fitness" />
                <Form.Check label="Güvenlik" />
                <Form.Check label="Hidrofor" />
                <Form.Check label="Isı yalıtım" />
              </Col>
              <Col>
                <Form.Check label="Jeneratör" />
                <Form.Check label="Kapıcı" />
                <Form.Check label="Otopark-Açık" />
                <Form.Check label="Otopark-Kapalı" />
                <Form.Check label="Oyun parkı" />
                <Form.Check label="PVC doğrama" />
                <Form.Check label="Siding" />
              </Col>
              <Col>
                <Form.Check label="Site içerisinde" />
                <Form.Check label="Su deposu" />
                <Form.Check label="Tenis kortu" />
                <Form.Check label="Yangın merdiveni" />
                <Form.Check label="Yüzme havuzu" />
                <Form.Check label="Ahşap doğrama" />
              </Col>
            </Form.Row>
            <Form.Row
              style={{ fontSize: "14px", fontWeight: "500", margin: "5px 0" }}
            >
              Konum
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Check label="Arka cephe" />
                <Form.Check label="Caddeye yakın" />
                <Form.Check label="Denize sıfır" />
                <Form.Check label="Denize yakın" />
                <Form.Check label="Havaalanına yakın" />
                <Form.Check label="Manzara" />
                <Form.Check label="Manzara-Boğaz" />
                <Form.Check label="Manzara-Deniz" />
                <Form.Check label="Manzara-Doğa" />
              </Col>
              <Col>
                <Form.Check label="Manzara-Göl" />
                <Form.Check label="Manzara-Şehir" />
                <Form.Check label="Merkezde" />
                <Form.Check label="Metroya yakın" />
                <Form.Check label="Otobana yakın" />
                <Form.Check label="Ön cephe" />
                <Form.Check label="Toplu taşıma yakın" />
                <Form.Check label="Metrobüse yakın" />
                <Form.Check label="Deniz ulaşımına yakın" />
              </Col>
              <Col>
                <Form.Check label="Cadde üzerinde" />
                <Form.Check label="Tramvaya yakın" />
                <Form.Check label="Marmaraya yakın" />
                <Form.Check label="E-5 e yakın" />
                <Form.Check label="TEM'e yakın" />
                <Form.Check label="Minübüs/Dolmuşa yakın" />
                <Form.Check label="Avrasya tüneline yakın" />
                <Form.Check label="Boğaz köprülerine yakın" />
              </Col>
            </Form.Row>
          </div>
          <div id="footer" hidden={adType ? false : true}>
            <Form.Row>
              <Form.Check
                value={rules}
                onChange={onRulesChange}
                id="rules"
                label={
                  <a>
                    <strong>İlan Yayınlanma Kurallarını</strong> okudum.
                  </a>
                }
              />
              <Button onSubmit={onSubmit} disabled={rules ? false : true}>
                Devam et
              </Button>
            </Form.Row>
          </div>
        </Container>
      </Form>
    </Container>
  );
}

export default GiveAd;
