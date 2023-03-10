import React from "react";
import ProfileDataForm from "../../components/profile-data-form";
import { StyledContainer } from "../../global-styles";
import Adv from "../../components/adv";
import * as S from "./styles";
import mockAvatar from "../../assets/static/mockAvatarMen.jpg";

function Profile({user}) {
  const isMyProfile = false;

  return (
    <S.Main>
      <StyledContainer>
        {isMyProfile ? (
          <>
            <h1>Здравсвуйте, {user.name}!</h1>
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
                <p>{user.name}</p>
                <p>{user.city}</p>
                <p>{user.sells_from}</p>
                <S.PhoneButton>
                  Показать телефон
                  <span>{user.phone}</span>
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
