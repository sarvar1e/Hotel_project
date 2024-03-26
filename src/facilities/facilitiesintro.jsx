import React from "react";
import { Background, Button, Scroll } from "../mainstyle";
import icon1 from "../assets/logo-btn.png";
import icon2 from "../assets/scroll-icon.png";
import FacilitiesBody from "./facilitiesbody";

const Facilities = () => {
  return (
    <>
      <Background $facilitybg>
        <h4>WELCOME TO</h4>
        <h1>LUXURY</h1>
        <h3>HOTELS</h3>
        <p>
          Book your stay and enjoy Luxury <br />
          redefined at the most affordable rates.
        </p>

        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button $introbutton>
            <img src={icon1} alt="icon1" />
            <p>BOOK NOW</p>
          </Button>
          <Scroll>
            <p>Scroll</p>
            <img src={icon2} alt="icon" />
          </Scroll>
        </div>
      </Background>
      <FacilitiesBody />
    </>
  );
};

export default Facilities;
