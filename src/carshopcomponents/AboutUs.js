import Card from "react-bootstrap/Card";
import AboutPhoto from "../images/aboutUsPhotoSmall.jpg";

import "../styles/AboutUs.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function AboutUs() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <Card className="Card" data-aos="zoom-out">
      <Card.Img src={AboutPhoto} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="textTitle">
          WHAT IS <span className="textTitle Brand">DICECARSHOP</span> ?
        </Card.Title>
        <Card.Text className="textAbout">
          DICECARSHOP is the world-leading cars shop where you can find a lot of rare cars in the world. We offer a wide selection of the latest models from top brands, as well as high-quality used vehicles. Our team of experienced
          technicians is here to provide expert maintenance and repair services to keep your car running smoothly. We also have a fully-stocked parts department with all the components you need to keep your car in top condition. Plus, we
          offer competitive pricing and financing options to make your purchase or service as affordable as possible. Visit us today and see why we're the best choice for all your automotive needs!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default AboutUs;
