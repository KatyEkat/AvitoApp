import styled from 'styled-components';

export const CloseBtnWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

export const CloseBtn = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;

  :hover {
    ::before,
    ::after {
      background-color: #009ee4;
    }
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #d9d9d9;
    top: 10px;
    left: 0;
    transition: background-color 0.3s ease;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(135deg);
  }
`;
