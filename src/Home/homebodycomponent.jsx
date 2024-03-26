import React from "react";
import image1 from "../assets/steven-ungermann-aRT5UCf2MYY-unsplash.png";
import image2 from "../assets/andrew-ruiz-fmz-B9At9iQ-unsplash.png";
import image3 from "../assets/location-icons.png";
import {
  HomeBody,
  HomeBodybox,
  HomeBodyboxleft,
  HomeBodyboxright,
} from "./homestyle";
import { Button, Locations } from "../mainstyle";

const HomeSecondComponent = () => {
  return (
    <HomeBody>
      <p>All our room types are including complementary breakfast</p>

      <HomeBodybox>
        <HomeBodyboxleft>
          <h1>Luxury redefined</h1>
          <p>
            Our rooms are designed to transport <br />
            you into an environment made for leisure. <br />
            Take your mind off the day-to-day of home <br />
            life and find a private paradise for yourself. <br />{" "}
          </p>
          <Button $homebody>EXPLORE</Button>
        </HomeBodyboxleft>
        <HomeBodyboxright>
          <img src={image1} alt="image1" />
        </HomeBodyboxright>
      </HomeBodybox>
      <HomeBodybox>
        <HomeBodyboxleft>
          <h1>
            Leave your worries in <br />
            the sand
          </h1>
          <p>
            We love life at the beach. Being close <br />
            to the ocean with access to endless sandy <br />
            beach ensures a relaxed state of mind. It <br />
            seems like time stands still watching the <br />
            ocean. <br />{" "}
          </p>
          <Button>EXPLORE</Button>
        </HomeBodyboxleft>
        <HomeBodyboxright>
          <img src={image2} alt="image2" />
        </HomeBodyboxright>
      </HomeBodybox>
      <Locations>
        <h1>Testimonials</h1>
        <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
        <p> Mr. and Mrs. Baxter, UK</p>
        <div className="location-icon">
          <img src={image3} alt="icon3" />
        </div>
      </Locations>
    </HomeBody>
  );
};

export default HomeSecondComponent;
