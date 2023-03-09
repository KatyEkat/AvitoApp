import React from 'react';
import * as S from './styles';

function CloseFormButton({ onClick }) {
  return (
    <S.CloseBtnWrapper>
      <S.CloseBtn onClick={onClick} />
    </S.CloseBtnWrapper>
  );
}

export default CloseFormButton;
