import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  background: transparent linear-gradient(95deg, #ff0000 0%, #f91e96 100%) 0% 0%
    no-repeat padding-box;
  height: 110px;
  align-items: center;
  padding-left: 8rem;
  box-sizing: border-box;

  @media (max-width: 980px) {
    padding-left: 16px;
  }
`;
