import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthBlock = styled.div`
  max-width: 366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
  row-gap: 42px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

export const AuthFormInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 8px;
`;

export const SignUpLink = styled(Link)`
  border: 1px solid #d9d9d9;
  padding: 14px;
  text-decoration: none;
  color: black;
  border-radius: 6px;
  cursor: pointer;
`;
