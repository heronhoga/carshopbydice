import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "../styles/Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CAR BRANDS
import HONDA from "../carbrands/honda.png";
import BMW from "../carbrands/bmw.png";
import MITSU from "../carbrands/mitsubishi.png";
import NISSAN from "../carbrands/nissan.png";
import VW from "../carbrands/vw.png";
import TOYOTA from "../carbrands/toyota.png";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-white footer" style={{ backgroundColor: "#e6f1ff" }}>
      <Container>
        <Row>
          <Col>
            <img src={HONDA} alt="HONDA BRAND" className="carbrands"></img>
          </Col>
          <Col>
            <img src={BMW} alt="BMW BRAND" className="carbrands"></img>
          </Col>
          <Col>
            <img src={MITSU} alt="MITSUBISHI BRAND" className="carbrands"></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={NISSAN} alt="NISSAN BRAND" className="carbrands"></img>
          </Col>
          <Col>
            <img src={VW} alt="VOLKSWAGEN BRAND" className="carbrands"></img>
          </Col>
          <Col>
            <img src={TOYOTA} alt="TOYOTA BRAND" className="carbrands"></img>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "#001733" }}>
        DICECARSHOP (prod. DICE)
      </div>
    </MDBFooter>
  );
}
