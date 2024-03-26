import styled from "styled-components";
import bg from "./assets/mainimage.png";
import facilitybg from "./assets/secondpagebg.jpg";
import roomsbg from "./assets/thirdpagemain.png";

export const Background = styled.div`
  background-image: url(${bg});
  background-image: ${(props) =>
    props.$facilitybg ? `url(${facilitybg})` : `url(${bg})`};
  background-image: ${(props) =>
    props.$rooms ? `url(${roomsbg})` : `url(${bg})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 75vh;
  color: white;
  h1 {
    font-family: "Adobe Garamond Pro";
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 10.78px;
    margin: -20px 0px -20px 40px;
  }
  h3 {
    color: #fff;
    font-family: "Adobe Garamond Pro";
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 15px;
    margin-left: 40px;
  }
  h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 40px;
  }
  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.5px;
    margin-left: 40px;
    text-align: left;
  }
`;

export const Button = styled.div`
  margin-top: ${(props) => (props.$introbutton ? "40px" : "0px")};
  margin-left: ${(props) => (props.$homebody ? "20px" : "0px")};
  width: 190px;
  height: 45px;
  flex-shrink: 0;
  background-color: #e0b973;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: -30px;
  }
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: -120px;
  cursor: pointer;
  img {
    width: 30px;
    margin: 10px 0 0 30px;
  }
`;

export const Locations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  p {
    margin: 10px;
  }
  img {
    width: 80px;
    height: auto;
    cursor: pointer;
  }
`;
//Code for second and third page body
export const BodyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    padding: 40px;
    font-size: 18px;
  }
`;
