import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
import { useNavigate } from "react-router-dom";
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
  const signIn = useSignIn();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function validForm() {
    return username?.length > 0 && password?.length > 0;
  }

  const loginUser = async () => {
    // await axios
    //   .post("http://localhost:8080/user/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((e) => {
    // console.log(e);
    if (
      signIn({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        tokenType: "Bearer",
        expiresIn: 60,
        authState: {
          user: "awdawd",
          usernamme: "awdawdawd",
          devices: "awddawd",
          mac: "awdawdwad",
          // user: e.data.id,
          // username: e.data.username,
          // devices: e.data.devices,
          // mac: e.data.MAC,
        },
      })
    ) {
      // tym se mozeice przechodzic miedzy stronami
      navigate("/dashboard");
      console.log("true");
    } else {
      console.log("blad");
    }

    // });

    console.log("test");
  };

  const handleSubmit = (e) => {
    console.log(username);
    console.log(password);
    loginUser();
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
          Zaloguj się
        </h1>
        <p style={{ marginBottom: "0" }}>Panel logowania</p>
        <FormWrapper onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setUsername(e.target.value)}
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
          {/* <input type="submit" disabled={!validForm()}></input> */}
          <LoginButton disabled={!validForm()} onClick={handleSubmit}>
            Zaloguj
          </LoginButton>
          {/* <StyledLink to="/register">Utwórz konto</StyledLink> */}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: appColors.darkGreen }}
          >
            Utwórz konto
          </Link>
        </FormWrapper>
      </LoginContainer>
    </Wrapper>
  );
};

export default LoginPage;
