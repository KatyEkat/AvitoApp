import React from 'react';
import * as S from './styles';

function HeaderButton({ children, onClick }) {
  return (
    <S.Button type="button" onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default HeaderButton;
