import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adv from "../../components/adv";
import { StyledContainer } from "../../global-styles";
import { setAds } from "../../Redux/Ads/AdsActions";
import { get } from "../../utils/fetch";
import * as S from "./styles";

function Home() {
  const dispatch = useDispatch();

  const adsList = useSelector((state) => state.ads.ads);
  const adsSearch = useSelector((state) => state.ads.adsSearch);

  const filteredAdsList = useMemo(
    () =>
      adsList.filter((ad) =>
        ad.title.toLowerCase().includes(adsSearch.toLowerCase())
      ),
    [adsSearch, adsList]
  );

  useEffect(() => {
    getAdv();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAdv = async () => {
    const { json } = await get("/ads");
    dispatch(setAds(json));
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
