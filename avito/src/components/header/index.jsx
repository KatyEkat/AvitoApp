import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import HeaderButton from "./header-button";
import { StyledContainer, Overlay } from "../../global-styles";
import CreateAdvForm from "../create-adv-form";
import {
  LOGIN_ROUTE,
  PROFILE_PERSONAL_ROUTE,
  SIGNUP_ROUTE,
} from "../../utils/consts";

function Header({ isAuth }) {
  const [visibleAddAdv, setVisibleAddAdv] = useState();
  return (
    <S.Header>
      <StyledContainer>
        <S.HeaderInner>
          {isAuth ? (
            <S.HeaderAuthButtons>
              <HeaderButton onClick={() => setVisibleAddAdv(true)}>
                Разместить объявление
              </HeaderButton>
              <Link to={PROFILE_PERSONAL_ROUTE}>
                <HeaderButton>Личиный кабинет</HeaderButton>
              </Link>
            </S.HeaderAuthButtons>
          ) : (
            <Link to={`${LOGIN_ROUTE}`}>
              <HeaderButton>Вход в личный кабинет</HeaderButton>
            </Link>
          )}
        </S.HeaderInner>
      </StyledContainer>

      {visibleAddAdv && (
        <>
          <CreateAdvForm closeForm={() => setVisibleAddAdv(false)} />
          <Overlay />
        </>
      )}
    </S.Header>
  );
}

export default Header;
