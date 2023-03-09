import styled, { createGlobalStyle } from 'styled-components';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
  
    ::before,::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }


  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: 'Roboto-Regular';

  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: 1px solid rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 6px;

    :focus {
      outline: 1px solid #009EE4;
    }

    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
      font-size: 16px;
    }
  }
  
  body {
    position: relative;
  }

  h1 {
    font-family: 'Roboto-Medium';
    font-size: 40px;
    margin-bottom: 10px;
    line-height: 2;
  }

  h2 {
    font-family: 'Roboto-Medium';
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 2;
  }
`;

export const StyledContainer = styled.div`
  width: 1160px;
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
