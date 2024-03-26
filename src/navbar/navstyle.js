import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 2000;
`;

export const NavLeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavLeftLogoContainer = styled.div`
  background-color: #e0b973;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export const NavRightContainer = styled.div`
  background-color: #e0b973;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  p {
    cursor: pointer;
  }
  p:hover {
    color: white;
  }
`;
