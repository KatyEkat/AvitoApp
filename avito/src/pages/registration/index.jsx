import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoAuth from "../../assets/static/logo_auth.svg";
import MainButton from "../../components/main-button/index";
import { authLogin } from "../../utils/clients/authClient";
import { PROFILE_PERSONAL_ROUTE } from "../../utils/consts";
import { post } from "../../utils/fetch";
import * as S from "../login/styles";

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");

  const onRegistration = async () => {
    const { error } = await post("/auth/register", {
      email,
      password,
      name,
      surname,
      city,
    });
    if (!error) {
      const { error: authError } = await authLogin({ email, password });
      if (!authError) {
        navigate(PROFILE_PERSONAL_ROUTE);
      }
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

        <S.AuthFormInput
          onChange={(event) => setRepeatPassword(event.target.value)}
          placeholder="Повторите пароль"
          type="password"
        />
        <S.AuthFormInput
          onChange={(event) => setName(event.target.value)}
          placeholder="Имя(необязательно)"
          type="text"
        />
        <S.AuthFormInput
          onChange={(event) => setSurname(event.target.value)}
          placeholder="Фамилия(необязательно)"
          type="text"
        />
        <S.AuthFormInput
          onChange={(event) => setCity(event.target.value)}
          placeholder="Город(необязательно)"
          type="text"
        />

        <MainButton onClick={onRegistration}>Зарегистрироваться</MainButton>
      </S.AuthBlock>
    </S.Auth>
  );
}

export default Auth;
