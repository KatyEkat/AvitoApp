import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/static/logo.svg";
import { StyledContainer } from "../../global-styles";
import { setAdsSearch } from "../../Redux/Ads/AdsActions";
import { HOME_ROUTE } from "../../utils/consts";
import MainButton from "../main-button";
import * as S from "./styles";

function Search() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const adsSearch = useSelector((state) => state.ads.adsSearch);

  const isHome = pathname === HOME_ROUTE;

  const onSearch = (event) => {
    dispatch(setAdsSearch(event.target.value));
  };

  return (
    <S.Search>
      <StyledContainer>
        <S.SearchWrapper>
          <img src={logo} alt="logo" />
          {isHome ? (
            <S.SearchBlock>
              <S.SearchInput
                placeholder="Поиск по объявлениям"
                value={adsSearch}
                onChange={onSearch}
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
