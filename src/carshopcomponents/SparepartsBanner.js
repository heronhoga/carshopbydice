import "../styles/AboutUsBanner.css";
import AboutUsImage from "../images/bannerAboutUs.jpg";
import Card from "react-bootstrap/Card";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function SparepartsBanner() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <Card className="AboutUsCard" id="spareParts" data-aos="zoom-out">
      <Card.Img src={AboutUsImage} alt="About Us Image" className="image" />
      <Card.ImgOverlay>
        <Card.Title className="position-absolute top-50 start-50 translate-middle" id="cardText">
          SPAREPARTS
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SparepartsBanner;
