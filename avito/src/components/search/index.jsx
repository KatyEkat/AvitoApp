import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/static/logo.svg";
import MainButton from "../main-button";
import { StyledContainer } from "../../global-styles";
import { HOME_ROUTE } from "../../utils/consts";

function Search() {
  const { pathname } = useLocation();

  // Поиск по названию
  // const [value, setvalue] = useState('');

  // const fitredAdvs = adsList.filter(adv) => {
  //   return adv.name.toLowerCase().inCludes(value.toLowerCase())
  // }

  const isHome = pathname === HOME_ROUTE;

  return (
    <S.Search>
      <StyledContainer>
        <S.SearchWrapper>
          <img src={logo} alt="logo" />
          {isHome ? (
            <S.SearchBlock>
              <S.SearchInput
              // поиск по названию
                // onChange={(event) => setvalue(event.target.value)}

                placeholder="Поиск по объявлениям"
              />
              <MainButton>Найти</MainButton>
            </S.SearchBlock>
          ) : (
            <Link to="/">
              <MainButton>Вернуться на главную</MainButton>
            </Link>
          )}
        </S.SearchWrapper>
      </StyledContainer>
    </S.Search>
  );
}

export default Search;
