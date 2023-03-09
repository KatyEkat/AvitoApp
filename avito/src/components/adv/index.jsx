import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { ADV_ROUTE } from "../../utils/consts";
import { API_URL } from "../../utils/consts";
import testImg from "../../assets/static/test.jpg";

function Adv({ adv }) {
  const advImg = adv.images[0]?.url;

  return (
    <S.Adv>
      <Link to={`${ADV_ROUTE}/${adv.id}`}>
        <S.AdvImage src={advImg ? `${API_URL}/` + advImg : testImg} alt="img" />
      </Link>
      <Link to={`${ADV_ROUTE}/${adv.id}`}>
        <S.AdvTitle>{adv.title}</S.AdvTitle>
      </Link>

      <S.AdvPrice>{adv.price}</S.AdvPrice>
      <S.AdvLocation>{adv.user.city}</S.AdvLocation>
      <S.AdvDataRelease>{adv.created_on}</S.AdvDataRelease>
    </S.Adv>
  );
}

export default Adv;
