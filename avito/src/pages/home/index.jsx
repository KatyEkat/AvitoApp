import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Adv from "../../components/adv";
import { StyledContainer } from "../../global-styles";
import { get } from "../../utils/fetch";
import * as S from "./styles";

function Home() {
  const [adsList, setAdsList] = useState([]);
  const adsSearch = useSelector((state) => state.ads.adsSearch);

  const filteredAdsList = useMemo(
    () => adsList.filter((ad) => ad.title.toLowerCase().includes(adsSearch.toLowerCase())),
    [adsSearch, adsList]
  );

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
          {filteredAdsList.map((adv) => (
            <Adv key={adv.id} adv={adv} />
          ))}
        </S.AdvList>
      </StyledContainer>
    </S.Main>
  );
}

export default Home;
