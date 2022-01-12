import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
`;

export const GridColumns = styled.div`
  padding-top: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 500px 500px;
  column-gap: 18px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 980px) {
    grid-template-columns: auto;
    padding: 16px;
  }
`;

export const ProductImage = styled.div<{ image: string }>`
  width: 500px;
  height: 310px;
  background: ${(props) => `url(${props.image}) no-repeat`};
  background-size: contain;
  background-position-x: center;
  border-radius: 14px;

  @media (max-width: 980px) {
    width: 328px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0px;
    margin: 0;
    margin-bottom: 6px;
  }

  span {
    text-align: left;
    font-weight: bold;
    font-size: 30px;
    color: #4caf50;
    margin-bottom: 20px;
  }

  @media (max-width: 980px) {
    display: grid;
    grid-template-columns: 328px;
  }
`;

export const ProductButton = styled.button`
  width: 302px;
  height: 36px;
  text-align: center;
  letter-spacing: 0.64px;
  background: linear-gradient(
    90deg,
    rgba(36, 201, 43, 1) 0%,
    rgba(9, 159, 15, 1) 100%
  );
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 18px;
  color: #fff;
  margin-top: 42px;
`;
