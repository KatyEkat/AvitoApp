import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoAuth from "../../assets/static/logo_auth.svg";
import MainButton from "../../components/main-button/index";
import { authLogin } from "../../utils/clients/authClient";
import { PROFILE_PERSONAL_ROUTE, SIGNUP_ROUTE } from "../../utils/consts";
import * as S from "./styles";

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    const { error } = await authLogin({ email, password });
    if (!error) {
      navigate(PROFILE_PERSONAL_ROUTE);
    }
  };

  return (
    <S.Auth>
      <S.AuthBlock>
        <img src={LogoAuth} alt="logo" />

        <S.AuthFormInput
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          type="email"
        />
        <S.AuthFormInput
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Пароль"
          type="password"
        />

        <MainButton onClick={onLogin}>Войти</MainButton>
        <S.SignUpLink to={`${SIGNUP_ROUTE}`}>Зарегистрироваться</S.SignUpLink>
      </S.AuthBlock>
    </S.Auth>
  );
}

export default Auth;
