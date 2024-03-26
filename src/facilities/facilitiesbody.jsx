import React from "react";
import image3 from "../assets/location-icons.png";
import image1 from "../assets/gym.png";
import image2 from "../assets/poolside.png";
import image4 from "../assets/spa.png";
import image5 from "../assets/pool.png";
import image6 from "../assets/restaurant.png";
import image7 from "../assets/laundry.png";
import { BodyText, Locations } from "../mainstyle";
import { Facilitiesbody, Facilitiesbodyphotos } from "./facilitiesstyle";

const FacilitiesBody = () => {
  return (
    <Facilitiesbody>
      <BodyText>
        <h1>FACILITIES</h1>
        <p>
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.{" "}
        </p>
      </BodyText>
      <Facilitiesbodyphotos>
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image4} alt="image4" />
        <img src={image5} alt="image5" />
        <img src={image6} alt="image6" />
        <img src={image7} alt="image7" />
      </Facilitiesbodyphotos>

      <Locations>
        <h1>Testimonials</h1>
        <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
        <p> Mr. and Mrs. Baxter, UK</p>
        <div className="location-icon">
          <img src={image3} alt="icon3" />
        </div>
      </Locations>
    </Facilitiesbody>
  );
};

export default FacilitiesBody;
