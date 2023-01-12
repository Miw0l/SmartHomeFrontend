// import { useRouter } from "next/router";
// import BasicLayout  from "../components/molecules/basic_layout"
// import { useForm } from 'react-hook-form';
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
import { MacroOff } from "@mui/icons-material";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
// import Link from "next/link";
// import axios from "axios";

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
  // textdecoration: "none";
`;

const RegisterPage = () => {
  // const router = useRouter();
  const signIn = useSignIn();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [MAC, setMAC] = useState();

  function validForm() {
    return email?.length > 0 && password?.length > 0;
  }

  const registerUser = async () => {
    if (
      signIn({
        token: "",
        tokenType: "Bearer",
        expiresIn: 60,
        authState: {
          userID: "examle_user_id",
        },
      })
    ) {
      console.log("zalogowano");
    } else {
      console.log("chuj");
    }
    // await axios
    //   .post("http://localhost:8080/user/register", {
    //     username: email,
    //     password: password,
    //     MAC: MAC,
    //   })
    //   .then((e) => {
    //     console.log(e);
    //   });
    // console.log("test");
  };

  const handleSubmit = (e) => {
    console.log(email);
    console.log(password);
    console.log(MAC);
    registerUser();
    e.preventDefault();
  };

  return (
    <Wrapper>
      <LoginContainer>
        {/* <Card onSubmit={handleSubmit}> */}
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
          <label>Email</label>
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
          {/* <input type="submit" disabled={!validForm()}></input> */}
          <LoginButton onClick={handleSubmit}>Zarejestruj</LoginButton>
          {/* <StyledLink to="/register">Utwórz konto</StyledLink> */}
          {/* <Link to="/register" style={{textDecoration: "none", color: appColors.darkGreen }}>Utwórz konto</Link> */}
        </FormWrapper>
      </LoginContainer>
    </Wrapper>
  );
};

export default RegisterPage;
