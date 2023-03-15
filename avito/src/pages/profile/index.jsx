import React from "react";
import ProfileDataForm from "../../components/profile-data-form";
import { StyledContainer } from "../../global-styles";
import Adv from "../../components/adv";
import * as S from "./styles";
import mockAvatar from "../../assets/static/mockAvatarMen.jpg";

function Profile() {
  const isMyProfile = false;

  return (
    <S.Main>
      <StyledContainer>
        {isMyProfile ? (
          <>
            <h1>Здравсвуйте, Илья!</h1>
            <h2>Настройки профиля</h2>
            <ProfileDataForm />
            <h2>Мои товары</h2>
            {/* <S.AdvList>
              <Adv />
            </S.AdvList> */}
          </>
        ) : (
          <>
            <h1>Профиль продавца</h1>
            <S.SellerInfoBlock>
              <div>
                <img src={mockAvatar} alt="seller avatar" width={170} />
              </div>
              <div>
                <p>Илья Котейкин</p>
                <p>Санкт-Петербург</p>
                <p>Продает товары с октября 2003</p>
                <S.PhoneButton>
                  Показать телефон
                  <span>8 905 ХХХ ХХ ХХ</span>
                </S.PhoneButton>
              </div>
            </S.SellerInfoBlock>
            <h2>Товары продавца</h2>
            {/* <S.AdvList>
              <Adv />
            </S.AdvList> */}
          </>
        )}
      </StyledContainer>
    </S.Main>
  );
}

export default Profile;
