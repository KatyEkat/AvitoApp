import styled from 'styled-components';

export const Button = styled.button`
  background-color: #009ee4;
  padding: 13px 37px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: white;
  transition: background-color 0.2s ease-in;

  :hover {
    background-color: #0080c1;
  }
`;

export const InactiveButton = styled(Button)`
  background-color: #d9d9d9;
  cursor: auto;

  :hover {
    background-color: #d9d9d9;
  }
`;
