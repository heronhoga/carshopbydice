import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

//WEB COMPONENTS
import Webnav from "./carshopcomponents/webnav"; //NAVIGATION BAR
import CarouselCar from "./carshopcomponents/CarouselCar"; //SLIDING CAR IMAGES
import AboutUs from "./carshopcomponents/AboutUs";
import AboutUsBanner from "./carshopcomponents/AboutUsBanner";
import CarListsBanner from "./carshopcomponents/carListsBanner";
import CarLists from "./carshopcomponents/CarLists";
import SparepartsBanner from "./carshopcomponents/SparepartsBanner";
import SparepartLists from "./carshopcomponents/SparepartLists";
import Footer from "./carshopcomponents/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Webnav />
    <CarouselCar />
    <AboutUsBanner />
    <AboutUs />
    <CarListsBanner />
    <CarLists />
    <SparepartsBanner />
    <SparepartLists />
    <Footer />
  </React.StrictMode>
);
