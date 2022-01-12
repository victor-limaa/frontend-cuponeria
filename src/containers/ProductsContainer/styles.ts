import styled from "styled-components";

interface IFlexRow {
  justify: string;
  align: string;
}

export const HomeWrapper = styled.div`
  display: grid;
`;

export const ItemsWrapper = styled.div`
  padding-top: 18px;
  padding-left: 8rem;
  padding-right: 8rem;
  box-sizing: border-box;

  @media (max-width: 980px) {
    padding: 16px;
  }
`;

export const FlexRow = styled.div<IFlexRow>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  @media (max-width: 980px) {
    flex-direction: column;
    h3 {
      margin: 12px;
    }
  }
`;

export const GridColumns = styled.div`
  padding-top: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 27px;
  column-gap: 16px;
  justify-content: center;

  @media (max-width: 980px) {
    grid-template-columns: auto;
  }
`;
