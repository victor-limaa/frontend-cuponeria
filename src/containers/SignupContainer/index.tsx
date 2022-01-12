import React, { FC, useState, useEffect } from "react";
import {
  SignupWrapper,
  PageWrapper,
  StepWrapper,
  StepCount,
  StepContent,
  StepInput,
  NextButton,
  BackButton,
} from "./styles";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";

export const SignupContainer: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<any>({});

  const handleAddStep = () => {
    if (currentStep >= 1 && currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleRemoveStep = () => {
    if (currentStep >= 1 && currentStep <= 3) setCurrentStep(currentStep - 1);
  };

  const getAddressByCep = async () => {
    if (cep.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const addr = await res.json();
        setAddress(addr);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getAddressByCep();
  }, [cep, setCep]);

  return (
    <PageWrapper>
      <Header />
      <Navbar />
      <SignupWrapper>
        <h2>Criar conta</h2>
        <StepWrapper current={currentStep}>
          <StepCount current={currentStep >= 1}>
            <p>01</p>
          </StepCount>
          <StepCount current={currentStep >= 2}>
            <p>02</p>
          </StepCount>
          <StepCount current={currentStep >= 3}>
            <p>03</p>
          </StepCount>
        </StepWrapper>

        <StepContent current={currentStep === 1}>
          <StepInput placeholder="nome" />
          <StepInput placeholder="sobrenome" />
          <StepInput placeholder="telefone" />
        </StepContent>

        <StepContent current={currentStep === 2}>
          <StepInput placeholder="email" />
          <StepInput placeholder="criar senha" />
        </StepContent>

        <StepContent current={currentStep === 3}>
          <StepInput
            maxLength={8}
            placeholder="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <StepInput placeholder="rua" value={address.logradouro} />
          <StepInput placeholder="cidade" value={address.localidade} />
          <StepInput
            placeholder="país"
            value={address.localidade ? "Brasil" : ""}
          />
        </StepContent>

        <NextButton onClick={handleAddStep}>
          <span>{currentStep === 3 ? "cadastrar" : "continuar"}</span>
        </NextButton>
        {currentStep > 1 && (
          <BackButton onClick={handleRemoveStep}>
            <span>voltar</span>
          </BackButton>
        )}
        <p>
          já tem uma conta?{" "}
          <Link href={"/login"} passHref>
            <span
              style={{
                color: "#f91e96",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              entrar
            </span>
          </Link>
        </p>
      </SignupWrapper>
      <Footer position={"absolute"} />
    </PageWrapper>
  );
};
