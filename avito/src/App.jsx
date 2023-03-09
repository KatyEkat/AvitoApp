import React from 'react';
import Header from './components/header';
import Search from './components/search';
import AppRoutes from './routes';
import { GlobalStyle } from './global-styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Search />
      <AppRoutes />
    </>
  );
}

export default App;
