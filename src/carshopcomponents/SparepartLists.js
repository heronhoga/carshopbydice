import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../styles/SparepartLists.css";
import "../styles/CarLists.css";
//IMAGES
import HKS from "../images/hks.jpg";
import TE37 from "../images/te37.jpg";
import LIBERTYWALK from "../images/lb.jpeg";
import RB26 from "../images/rb26.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function SparepartLists() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 g-4 SparepartCard">
      <MDBCol data-aos="flip-up">
        <MDBCard className="cardBox h-100" shadow="0" border="dark" background="white">
          <MDBCardImage src={HKS} alt="HKS" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">HKS 34005-FK002 Hi-Power Titan-TP Universal Muffler Exhaust 60mm/2.25" Pipe JDM</MDBCardTitle>
            <MDBCardText className="TextDesc">
              Condition: <span className="new">New!</span> / Price: <span className="price">$320</span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="flip-up">
        <MDBCard className="cardBox h-100" shadow="0" border="dark" background="white">
          <MDBCardImage src={TE37} alt="TE37" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">Volk Racing TE37 Saga S-Plus - 18"</MDBCardTitle>
            <MDBCardText className="TextDesc">
              Condition: <span className="new">New!</span> / Price: <span className="price">$908</span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="flip-up">
        <MDBCard className="cardBox h-100" shadow="0" border="dark" background="white">
          <MDBCardImage src={LIBERTYWALK} alt="Liberty Walk" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">LB-Silhouette WORKS GT 35GT-RR</MDBCardTitle>
            <MDBCardText className="TextDesc">
              Condition: <span className="used">Used!</span> / Price: <span className="price">$58,320</span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="flip-up">
        <MDBCard className="cardBox h-100" shadow="0" border="dark" background="white">
          <MDBCardImage src={RB26} alt="RB26 engine" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">Nissan Skyline GTR R32 Rb26dett Engine</MDBCardTitle>
            <MDBCardText className="TextDesc">
              Condition: <span className="used">Used!</span> / Price: <span className="price">$16,500</span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
