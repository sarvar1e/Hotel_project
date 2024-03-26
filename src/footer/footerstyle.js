import styled from "styled-components";
import footerbg from "../assets/footerbackround.png";

export const Footermain = styled.div`
  background-image: url(${footerbg});
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  width: 100%;
  height: 250px;
  margin-top: 40px;
  padding: 30px;
`;

export const Footerfirst = styled.div`
  flex: 1;
  color: white;
  margin: 30px;
  p {
    margin-top: 15px;
  }
  img {
    cursor: pointer;
  }
`;

export const Footersecond = styled.div`
  flex: 1;
  color: white;
  margin: 30px;
  p {
    margin-top: 15px;
    cursor: pointer;
  }
`;

export const Footerthird = styled.div`
  flex: 1;
  color: white;
  margin: 30px;
`;

export const Footerthirdsocial = styled.div`
  display: flex;
  margin-top: 15px;
  cursor: pointer;
  p {
    margin-left: 10px;
  }
`;

export const Footerfourth = styled.div`
  flex: 1;
  color: white;
  margin: 30px;
`;

export const Footerfourthsubmit = styled.div`
  display: flex;
  border: 2px solid #e0b973;
  margin-top: 15px;
  border-radius: 4px;
  height: 35px;
`;
export const Footerfouremail = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
  }
`;
export const Footerfouremailsubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #e0b973;
  color: black;
  cursor: pointer;
`;
