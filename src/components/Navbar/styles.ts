import styled from "styled-components";

interface Props {
  current: string;
  page: string;
}

export const NavWrapper = styled.ul`
  width: 100%;
  height: 60px;
  margin: 0;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  padding-left: 8rem;
  padding-right: 8rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 980px) {
    position: fixed;
    z-index: 2;
    bottom: 0;
    box-shadow: 0px -3px 6px #00000029;
    height: 56px;
    padding: 1rem;
  }
`;

export const NavItem = styled.li<Props>`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  span {
    color: ${(props) => (props.current === props.page ? "#FF0000" : "#4c4c4c")};
  }

  @media (max-width: 980px) {
    flex-direction: column;
    font-size: 12px;
  }
`;
