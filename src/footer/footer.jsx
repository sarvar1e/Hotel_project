import React from "react";
import image1 from "../assets/footer-icon.png";
import logo1 from "../assets/facebook.png";
import logo2 from "../assets/twitter.svg";
import logo3 from "../assets/instagram.png";
import {
  Footerfirst,
  Footerfouremail,
  Footerfouremailsubmit,
  Footerfourth,
  Footerfourthsubmit,
  Footermain,
  Footersecond,
  Footerthird,
  Footerthirdsocial,
} from "./footerstyle";

const Footer = () => {
  return (
    <Footermain>
      <Footerfirst>
        <img src={image1} alt="icon" />
        <p style={{ fontSize: "12px" }}>
          497 Evergreen Rd. Roseville, CA 95673 <br />
          +44 345 678 903 <br />
          luxury_hotels@gmail.com <br />
        </p>
      </Footerfirst>
      <Footersecond>
        <p>About Us</p>
        <p>Contact</p>
        <p>Terms & Conditions</p>
      </Footersecond>
      <Footerthird>
        <Footerthirdsocial>
          <img src={logo1} alt="logo1" />
          <p>Facebook</p>
        </Footerthirdsocial>
        <Footerthirdsocial>
          <img src={logo2} alt="logo2" />
          <p>Twitter</p>
        </Footerthirdsocial>
        <Footerthirdsocial>
          <img src={logo3} alt="logo3" />
          <p>Instagram</p>
        </Footerthirdsocial>
      </Footerthird>
      <Footerfourth>
        <p>Subscribe to our newsletter</p>
        <Footerfourthsubmit>
          <Footerfouremail>
            <p>Email Address</p>
          </Footerfouremail>
          <Footerfouremailsubmit>
            <p>OK</p>
          </Footerfouremailsubmit>
        </Footerfourthsubmit>
      </Footerfourth>
    </Footermain>
  );
};

export default Footer;
