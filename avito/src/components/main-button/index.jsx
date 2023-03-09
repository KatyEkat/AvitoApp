import React from 'react';
import * as S from './styles';

function MainButton({ children, active = true, type, onClick }) {
  if (!active)
    return (
      <S.InactiveButton type={type} disabled>
        {children}
      </S.InactiveButton>
    );

  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default MainButton;
