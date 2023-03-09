import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import HeaderButton from './header-button';
import { StyledContainer, Overlay } from '../../global-styles';
import CreateAdvForm from '../create-adv-form';
// import Auth from '../../pages/auth/index';

function Header({ isAuth }) {
  const [visibleAddAdv, setVisibleAddAdv] = useState();
  return (
    <S.Header>
      <StyledContainer>
        <S.HeaderInner>
          {isAuth ? (
            <Link to="/profile/1">
              <HeaderButton>Вход в личный кабинет</HeaderButton>
            </Link>
          ) : (
            <S.HeaderAuthButtons>
              <HeaderButton onClick={() => setVisibleAddAdv(true)}>
                Разместить объявление
              </HeaderButton>
              <Link to="/profile/1">
                <HeaderButton>Личиный кабинет</HeaderButton>
              </Link>
            </S.HeaderAuthButtons>
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
