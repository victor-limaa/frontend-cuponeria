import styled from "styled-components";

export const FooterWrapper = styled.footer<{ position: string }>`
  width: 100%;
  height: 124px;
  margin-top: 42px;
  background: transparent linear-gradient(180deg, #ff0000 0%, #f91e96 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.position};
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 980px) {
    height: 160px;
    align-items: flex-start;
    padding-top: 42px;
    box-sizing: border-box;
    position: relative;
  }
`;

export const FooterIcon = styled.div`
  width: 39px;
  height: 39px;
  margin: 0 24px;
`;
