import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
`;

export const SignupWrapper = styled.div`
  padding-top: 8px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media (max-width: 980px) {
    margin-bottom: 64px;
  }
`;

export const StepWrapper = styled.div<{ current: number }>`
  background-color: #b2b2b2;
  width: 325px;
  height: 5px;
  display: flex;
  justify-content: space-between;
  background: ${(props) =>
    props.current === 1
      ? `linear-gradient(
        to right,
        #099f0f 0%,
        #099f0f 25%,
        #b2b2b2 25%,
        #b2b2b2 100%
      )`
      : props.current === 2
      ? `linear-gradient(
        to right,
        #099f0f 0%,
        #099f0f 55%,
        #b2b2b2 55%,
        #b2b2b2 100%
      )`
      : props.current === 3
      ? `#099f0f`
      : "#b2b2b2"};
`;

export const StepCount = styled.div<{ current: boolean }>`
  display: flex;
  width: 35px;
  height: 35px;
  background: ${(props) =>
    props.current
      ? "linear-gradient(180deg, #24C92B 0%, #099F0F 100%)"
      : "#b2b2b2"};
  margin-left: 50px;
  align-self: center;
  border-radius: 25px;
  justify-content: center;
  align-content: center;

  p {
    margin: 6px;
    color: #fff;
  }
`;

export const StepContent = styled.div<{ current: boolean }>`
  display: ${(props) => (props.current ? "flex" : "none")};
  flex-direction: column;
  width: 330px;
  margin-top: 25px;
`;

export const StepInput = styled.input`
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

export const BackButton = styled.button`
  background-color: #fff;
  width: 302px;
  height: 36px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid #707070;
  border-radius: 18px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
`;
