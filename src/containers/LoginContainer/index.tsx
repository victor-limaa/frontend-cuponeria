import React, { FC, useEffect, useState } from "react";
import { LoginInput, LoginWrapper, NextButton, PageWrapper } from "./styles";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";

export const LoginContainer: FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Navbar />
      <LoginWrapper>
        <h2>Entrar</h2>

        <LoginInput placeholder="e-mail" />
        <LoginInput placeholder="senha" />

        <NextButton>
          <span>ver produto</span>
        </NextButton>

        <p>
          não tem uma conta?{" "}
          <Link href={"/signup"} passHref>
            <span
              style={{
                color: "#f91e96",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              cadastrar
            </span>
          </Link>
        </p>
      </LoginWrapper>
      <Footer position={"absolute"} />
    </PageWrapper>
  );
};
