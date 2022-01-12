import { FC, useState } from "react";
import { IProduct } from "../../models/IProducts";
import {
  SelectOptionWrapper,
  SelectOptionItem,
  SelectOrder,
  SelectCurrentOption,
} from "./styles";
import ArrowDown from "../../assets/images/arrow.svg";

interface IOptionText {
  [key: string]: string;
}

interface Props {
  data: IProduct[];
  changeFilter: (products: IProduct[]) => void;
}

const optionText: IOptionText = {
  cresc: "menor preço",
  newest: "mais recentes",
  alph: "a - z",
};

export const SelectOrderComponent: FC<Props> = ({ data, changeFilter }) => {
  const [selectVisible, setSelectVisible] = useState(false);
  const [option, setOption] = useState("");

  const changeOption = (option: string) => {
    setOption(option);
    handleFilter(option);
    setSelectVisible(false);
  };

  const handleFilter = (option: any) => {
    let products: IProduct[] = [...data];
    if (option === "cresc") {
      products = products.sort((a: any, b: any) =>
        a.price > b.price ? 1 : a.price < b.price ? -1 : 0
      );
    } else if (option === "alph") {
      products = products.sort((a: any, b: any) =>
        a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      );
    }
    changeFilter(products);
  };

  return (
    <SelectOrder>
      <SelectCurrentOption
        onClick={() => setSelectVisible(!selectVisible)}
        current={option.length > 0}
      >
        <p>{option ? optionText[option] : "ordenar por"}</p>
        <ArrowDown />
      </SelectCurrentOption>
      <SelectOptionWrapper visible={selectVisible}>
        <SelectOptionItem onClick={() => changeOption("cresc")}>
          <p>menor preço</p>
        </SelectOptionItem>
        <SelectOptionItem onClick={() => changeOption("alph")}>
          <p>a - z</p>
        </SelectOptionItem>
        <SelectOptionItem onClick={() => changeOption("newest")}>
          <p>mais recentes</p>
        </SelectOptionItem>
      </SelectOptionWrapper>
    </SelectOrder>
  );
};
