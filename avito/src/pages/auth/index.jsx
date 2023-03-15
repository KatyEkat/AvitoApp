import React from 'react';
// import { useLocation } from 'react-router-dom';
import LogoAuth from '../../assets/static/logo_auth.svg';
// import { SIGNUP_ROUTE } from '../../utils/consts';
import * as S from './styles';
import MainButton from '../../components/main-button';
import { isAuthTokenExists } from '../../utils/fetch';

function Auth() {

  const isSignUp = isAuthTokenExists();

  return (
    <S.Auth>
      <S.AuthBlock>
        <img src={LogoAuth} alt="logo" />

        <S.AuthForm>
          <S.AuthFormInput placeholder="email" type="email" />
          <S.AuthFormInput placeholder="Пароль" type="password" />
          {isSignUp && (
            <>
              <S.AuthFormInput placeholder="Повторите пароль" type="password" />
              <S.AuthFormInput placeholder="Имя(необязательно)" type="text" />
              <S.AuthFormInput
                placeholder="Фамилия(необязательно)"
                type="text"
              />
              <S.AuthFormInput placeholder="Город(необязательно)" type="text" />
            </>
          )}

          {isSignUp ? (
            <MainButton type="submit">Зарегистрироваться</MainButton>
          ) : (
            <>
              <MainButton type="submit">Войти</MainButton>
              <S.SignUpLink to="/signup">Зарегистрироваться</S.SignUpLink>
            </>
          )}
        </S.AuthForm>
      </S.AuthBlock>
    </S.Auth>
  );
}

export default Auth;
