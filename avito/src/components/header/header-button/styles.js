import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 8px 24px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
