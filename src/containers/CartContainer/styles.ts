import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
`;

export const PageTitle = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 25px;
  width: 100%;
  padding-left: 8rem;
  padding-right: 8rem;
  box-sizing: border-box;

  @media (max-width: 980px) {
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    margin: 0;

    h3 {
      font-size: 22px;
    }
  }
`;

export const GridColumns = styled.div`
  display: grid;
  padding-left: 8rem;
  padding-right: 8rem;
  grid-template-columns: auto 328px;
  grid-template-rows: auto auto;
  column-gap: 16px;
  justify-content: center;

  @media (max-width: 980px) {
    grid-template-columns: auto;
    width: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 64px;
  }
`;

export const ProductGrid = styled.div<{ overflow: string }>`
  display: grid;
  grid-template-columns: 680px;
  justify-content: space-between;
  overflow-y: ${(props) => props.overflow};
  min-height: 340px;
  max-height: 80%;
  padding: 0px 8px;

  @media (max-width: 980px) {
    min-height: 198px;
    grid-template-columns: 100%;
    padding: 0;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(241, 241, 241, 0.05);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(76, 76, 76, 0.08);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(196, 196, 196, 0.12);
    opacity: 1;
  }
`;
export const ProductItem = styled.div`
  max-width: 672px;
  height: 144px;
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 27px 16px;
  box-sizing: border-box;
  margin-bottom: 16px;

  @media (max-width: 980px) {
    width: 328px;
    height: 198px;
    box-sizing: border-box;
    flex-direction: column;
  }
`;

export const ProductItemImage = styled.div<{ image: string }>`
  width: 145px;
  height: 90px;
  border-radius: 14px;
  background: ${(props) => `url(${props.image}) no-repeat`};
  background-size: contain;
  background-position: center;

  @media (max-width: 980px) {
    width: 140px;
    height: 87px;
  }
`;

export const ProductItemTitle = styled.p`
  margin-left: 8px;
  width: 210px;

  @media (max-width: 980px) {
    font-size: 14px;
    width: 150px;
    margin: 0;
  }
`;

export const ProductItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;

  button {
    width: 16px;
    height: 16px;
    background-color: #4c4c4c;
    border: none;
    border-radius: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 53px;
    height: 25px;
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 4px;
    text-align: center;
    margin: 5px;
  }

  @media (max-width: 980px) {
    margin: 0;
    position: absolute;
    left: -152px;
    top: 12px;
  }
`;
export const ProductItemPrice = styled.span`
  color: #4caf50;
  font-size: 16px;
  margin-left: 20px;
  margin-right: 32px;
  width: 64px;
  white-space: nowrap;

  @media (max-width: 980px) {
    display: flex;
    position: absolute;
    right: -152px;
    top: 12px;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 328px;
  height: 144px;
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 24px 12px;
  box-sizing: border-box;

  span {
    color: #4caf50;
    font-size: 30px;
  }

  button {
    width: 302px;
    height: 36px;
    background-color: #24c92b;
    color: #fff;
    border-radius: 18px;
    border: none;

    :hover {
      background-color: #099f0f;
    }
  }

  @media (max-width: 980px) {
    margin-top: 0;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 980px) {
    padding-top: 12px;
    position: relative;

    #deleteIcon {
      position: absolute;
      left: -46px;
      top: 12px;
    }
  }
`;
