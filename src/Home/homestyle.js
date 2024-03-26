import styled from "styled-components";

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: #14274a;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
  }
`;
export const HomeBodybox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeBodyboxleft = styled.div`
  flex: 1;
  border-left: 2px solid #14274a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-left: 20px;
  }
  p {
    margin: 20px;
  }
`;
export const HomeBodyboxright = styled.div`
  flex: 1;
  margin-left: 50px;
  img {
    width: 600px;
    height: 300px;
    border-radius: 40px;
  }
`;
