import React, { useEffect, useState } from "react";
import Adv from "../../components/adv";
import { StyledContainer } from "../../global-styles";
import { get } from "../../utils/fetch";
import * as S from "./styles";

function Home() {
  const [adsList, setAdsList] = useState([]);

  useEffect(() => {
    getAdv();
  }, []);

  const getAdv = async () => {
    const { json } = await get("/ads");
    setAdsList(json);
  };

  return (
    <S.Main>
      <StyledContainer>
        <S.Title>Объявления</S.Title>
        <S.AdvList>
          {/* {fitredAdvs.map((adv)  поиск по названию. fitredAdvs из search*/}
          {adsList.map((adv) => (
            <Adv key={adv.id} adv={adv}/>
          ))}
        </S.AdvList>
      </StyledContainer>
    </S.Main>
  );
}

export default Home;
