import styled from "styled-components";

export const OrderItemWrapper = styled.div`
  width: 328px;
  height: 348px;
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    margin-top: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 302px;
  }

  h3 {
    margin: 0;
    margin-bottom: 16px;
  }
`;

export const OrderItemImage = styled.div<{ image: string }>`
  width: 100%;
  height: 205px;
  border-radius: 14px 14px 0px 0px;
  background: ${(props) => `url(${props.image}) no-repeat`};
  background-size: contain;
  background-position-x: center;
`;

export const OrderItemButton = styled.button`
  width: 302px;
  height: 36px;
  text-align: center;
  letter-spacing: 0.64px;
  background-color: #24c92b;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 18px;
  color: #fff;
`;
