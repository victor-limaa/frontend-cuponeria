import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
`;

export const LoginWrapper = styled.div`
  display: grid;
  justify-content: center;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

export const LoginInput = styled.input`
  width: 328px;
  height: 56px;
  border: 1px solid #4c4c4c;
  border-radius: 4px;
  padding: 14px;
  margin: 5px;
  box-sizing: border-box;
`;
export const NextButton = styled.button`
  background-color: #24c92b;
  width: 302px;
  height: 36px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 18px;
  border: none;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;

  span {
    color: #fff;
  }

  :hover {
    background-color: #099f0f;
  }
`;
