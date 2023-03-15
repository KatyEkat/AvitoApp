import React from "react";
import Header from "./components/header";
import Search from "./components/search";
import AppRoutes from "./routes";
import { GlobalStyle } from "./global-styles";
import { isAuthTokenExists } from "./utils/fetch";

function App() {
  const isAuth = isAuthTokenExists();
  console.log(isAuth);

  return (
    <>
      <GlobalStyle />
      <Header isAuth={isAuth} />
      <Search />
      <AppRoutes />
    </>
  );
}

export default App;
