import React from "react";
import { BodyText, Locations } from "../mainstyle";
import image3 from "../assets/location-icons.png";

const RoomsBody = () => {
  return (
    <RoomsBody>
      <BodyText>
        <h1>ROOMS AND RATES</h1>
        <p>
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.{" "}
        </p>
      </BodyText>

      <Locations>
        <h1>Testimonials</h1>
        <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
        <p> Mr. and Mrs. Baxter, UK</p>
        <div className="location-icon">
          <img src={image3} alt="icon3" />
        </div>
      </Locations>
    </RoomsBody>
  );
};

export default RoomsBody;
