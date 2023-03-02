import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdb-react-ui-kit";

//STYLE FOR CAR LISTS CARD
import "../styles/CarLists.css";

//CAR PHOTOS
import EK9 from "../carscollection/civicEK9.jpg";
import AE86 from "../carscollection/ae86.jpg";
import E30 from "../carscollection/bmwE30M3.jpg";
import GTI from "../carscollection/golfGTIMK5.jpg";
import N240SX from "../carscollection/nissan240SX.jpg";
import M3000GT from "../carscollection/mitsubishi3000GT.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CarLists() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 carsCard" data-aos="flip-right">
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={EK9} alt="CIVIC TYPE-R EK9" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">CIVIC HATCHBACK TYPE-R (EK9)</MDBCardTitle>
            <MDBCardText className="TextDesc">
              1.6 L B16B I4 // 182 HP // 5 SPEED MANUAL <br />
              Prod. 1997 - 2000 | Body: 3-DOOR HATCHBACK
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={AE86} alt="TOYOTA AE86" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">TOYOTA TRUENO AE86</MDBCardTitle>
            <MDBCardText className="TextDesc">
              1.6 L 4A-GEU I4 DOHC // 87 HP // 5-SPEED MANUAL <br />
              Prod. 1983 - 1987 | Body: 3-DOOR LIFTBACK
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={E30} alt="BMW E30 M3" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">BMW E30 M3 325i</MDBCardTitle>
            <MDBCardText className="TextDesc">
              2.5 L M20B25 // 170 HP // 5-SPEED MANUAL <br />
              Prod. 1985 - 1987 | Body: 3-DOOR SEDAN
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={GTI} alt="VOLKSWAGEN GOLF GTI MK5" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">VOLKSWAGEN GOLF GTI MK5</MDBCardTitle>
            <MDBCardText className="TextDesc">
              2.0 L EA113 // 197 HP // 6-SPEED AUTOMATIC <br />
              Prod. 2004 - 2008 | Body: 3-DOOR HATCHBACK
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={N240SX} alt="NISSAN 240SX" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">NISSAN 240SX</MDBCardTitle>
            <MDBCardText className="TextDesc">
              2.4 L KA24DE I4 // 134 HP // 5-SPEED MANUAL <br />
              Prod. 1989 - 1998 | Body: 3-DOOR HATCHBACK
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={M3000GT} alt="MITSUBISHI 3000GT" position="top" />
          <MDBCardBody>
            <MDBCardTitle className="carName">MITSUBISHI GTO/3000GT</MDBCardTitle>
            <MDBCardText className="TextDesc">
              3.0 L 6G72 DOHC V6 // 134 HP // 6-SPEED MANUAL <br />
              Prod. 1990 - 2000 | Body: 2-DOOR LIFTBACK Coupé
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
