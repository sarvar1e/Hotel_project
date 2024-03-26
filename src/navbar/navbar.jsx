import React from "react";
import { Link } from "react-router-dom";
import {
  NavContainer,
  NavLeftContainer,
  NavLeftLogoContainer,
  NavRightContainer,
} from "./navstyle";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLeftContainer>
        <NavLeftLogoContainer>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h2>LUXURY </h2>
            <p>HOTELS</p>
          </Link>
        </NavLeftLogoContainer>
      </NavLeftContainer>
      <NavRightContainer>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>Home</p>
        </Link>
        <Link
          to="/facilities"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Facilities</p>
        </Link>
        <Link to="/rooms" style={{ textDecoration: "none", color: "black" }}>
          <p>Rooms</p>{" "}
        </Link>
        <Link
          to="/contactus"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Contact-us</p>
        </Link>
      </NavRightContainer>
    </NavContainer>
  );
};

export default Navbar;
