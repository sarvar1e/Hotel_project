import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/navbar/navbar";
import HomeIntroComponent from "./Home/homeintrocomponent";
import Footer from "../src/footer/footer";
import Facilities from "../src/facilities/facilitiesintro";
import Rooms from "../src/rooms/roomsintro";
import ContacUs from "../src/contact-us/contactus";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeIntroComponent />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contactus" element={<ContacUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterComponent;
