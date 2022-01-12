import Image from "next/image";
import { useState } from "react";
import { NavItem, NavWrapper } from "./styles";
import HomeIcon from "../../assets/images/inicio.svg";
import RoupasIcon from "../../assets/images/roupas.svg";
import EletroIcon from "../../assets/images/eletronicos.svg";
import AcessoriosIcon from "../../assets/images/acessorios.svg";
import CartIcon from "../../assets/images/cart.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const current = router.pathname;

  return (
    <NavWrapper>
      <Link passHref href={"/"}>
        <NavItem current={current} page={"/"}>
          <HomeIcon fill={current === "/" ? "#ff0000" : "#7f7f7f"} />
          <span>início</span>
        </NavItem>
      </Link>

      <Link passHref href={"/clothes"}>
        <NavItem current={current} page={"/clothes"}>
          <RoupasIcon fill={current === "/clothes" ? "#ff0000" : "#7f7f7f"} />
          <span>roupas</span>
        </NavItem>
      </Link>

      <Link passHref href={"/electronics"}>
        <NavItem current={current} page={"/electronics"}>
          <EletroIcon
            fill={current === "/electronics" ? "#ff0000" : "#7f7f7f"}
          />
          <span>eletrônicos</span>
        </NavItem>
      </Link>

      <Link passHref href={"/jewelery"}>
        <NavItem current={current} page={"/jewelery"}>
          <AcessoriosIcon
            fill={current === "/jewelery" ? "#ff0000" : "#7f7f7f"}
          />
          <span>acessórios</span>
        </NavItem>
      </Link>

      <Link passHref href={"/cart"}>
        <NavItem current={current} page={"/cart"}>
          <CartIcon fill={current === "/cart" ? "#ff0000" : "#7f7f7f"} />
          <span>meu carrinho</span>
        </NavItem>
      </Link>
    </NavWrapper>
  );
};
