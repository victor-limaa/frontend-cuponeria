import styled from "styled-components";

interface ISelectOption {
  visible: boolean;
}

export const SelectOrder = styled.div`
  width: 328px;
`;

export const SelectCurrentOption = styled.div<{ current: boolean }>`
  height: 56px;
  border: 1px solid #f62996;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 8px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  p {
    color: ${(props) => (props.current ? "#f62996" : "#4c4c4c")};
  }
`;

export const SelectOptionWrapper = styled.div<ISelectOption>`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  width: 328px;
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.3), -3px 0px 4px rgba(0, 0, 0, 0.2);
`;

export const SelectOptionItem = styled.div`
  background: rgba(249, 30, 150, 0) padding-box;
  border-bottom: 1px solid #fed8ed;
  height: 51px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 0;

  :hover {
    background-color: #fed8ed;
    cursor: pointer;
  }
`;
