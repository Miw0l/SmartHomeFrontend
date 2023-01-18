import { useState } from "react";
import styled from "styled-components";
import { appColors } from "../components/utils/colors";
import axios from "axios";

const LoginContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: auto;

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

const RegisterPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [MAC, setMAC] = useState();

  function validForm() {
    return email?.length > 0 && password?.length > 0;
  }

  const registerUser = async () => {
    await axios
      .post("http://localhost:8080/user/register", {
        username: email,
        password: password,
        MAC: MAC,
      })
  };

  const handleSubmit = (e) => {
    registerUser();
    e.preventDefault();
  };

  return (
    <Wrapper>
      <LoginContainer>
        <h1
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Zarejestruj się
        </h1>
        <p style={{ marginBottom: "0" }}>Panel rejestracji</p>
        <FormWrapper onSubmit={handleSubmit}>
          <label>Nazwa użytkownika</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              fontWeight: 600,
              width: "100%",
              height: "30px",
              margin: "10px",
              borderRadius: "5px",
              color: "#5E6472",
              background: "#e0dede",

              outline: "none",
              border: "none",
            }}
          ></input>

          <label>Hasło</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              fontWeight: 600,
              width: "100%",
              height: "30px",
              margin: "10px",
              borderRadius: "5px",
              color: "#5E6472",
              background: "#e0dede",

              outline: "none",
              border: "none",
            }}
          ></input>

          <label>Adres mac urządzenia</label>
          <input
            type="text"
            name="text"
            onChange={(e) => setMAC(e.target.value)}
            style={{
              fontWeight: 600,
              width: "100%",
              height: "30px",
              margin: "10px",
              borderRadius: "5px",
              color: "#5E6472",
              background: "#e0dede",

              outline: "none",
              border: "none",
            }}
          ></input>
          <LoginButton disabled={!validForm()} onClick={handleSubmit}>Zarejestruj</LoginButton>
        </FormWrapper>
      </LoginContainer>
    </Wrapper>
  );
};

export default RegisterPage;
