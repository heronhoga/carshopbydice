import R34 from "../images/jumbotronCarImage.jpg";
import R342 from "../images/jumbotronCarImage2.jpg";
import R35 from "../images/jumbotronCarImage3.jpg";

import Carousel from "react-bootstrap/Carousel";

import "../styles/CarouselCar.css";

function CarouselCar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={R34} alt="First slide" />
        <Carousel.Caption>
          <h3 className="CarouselTag">THE BEST CAR SHOP IN THE WORLD!</h3>
          <p className="CarouselDesc">ONLY THE GREATEST COLLECTIONS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={R342} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="CarouselTag">SO MANY RARE ITEMS!</h3>
          <p className="CarouselDesc">WE GOT MORE THAN 500 RARE CARS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={R35} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="CarouselTag">GENUINE PARTS</h3>
          <p className="CarouselDesc">WE ONLY SELL OEM AND AFTERMARKET COMPONENTS WITH THE WORLD-CLASS QUALITY</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCar;
