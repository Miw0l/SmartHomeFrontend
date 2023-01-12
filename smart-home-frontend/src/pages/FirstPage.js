// import { useRouter } from "next/router";
// import BasicLayout  from "../components/molecules/basic_layout"
// import { useForm } from 'react-hook-form';
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
// import Link from "next/link";
import axios from "axios";
import { useSignIn } from "react-auth-kit";

// const Card = styled.form`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// background-color: green;
// `;

const LoginContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: auto;
  // left: 50%;
  //transform: translate(-50%, -50%);

  padding: 32px;
  border-radius: 15px;
  box-shadow: 7px 7px 27px -7px rgba(66, 68, 90, 1);
  z-index: 2;
  max-height: 90vh;

  & span {
    overflow: initial !important;
  }

  @media (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    position: initial;
    display: flex;
    transform: none;
    //  padding-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;

const LoginButton = styled.button`
  font-size: 16px;
  color: white;
  padding: 8px 16px;
  font-weight: 500;
  outline: 0;
  border: 0;
  border-radius: 5px;
  height: min-content;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  padding: 12px 24px;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${appColors.darkGreen};
`;

const StyledLink = styled(Link)`
  color: ${appColors.darkGreen};
  margin: "50px";
  //  textdecoration: "none";
`;

const LoginPage = () => {
  // const router = useRouter();

  return (
    <Wrapper>
      <h1> Siema</h1>
    </Wrapper>
  );
};

export default LoginPage;
