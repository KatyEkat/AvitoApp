import React, { useEffect, useState } from "react";
import ProfileDataForm from "../../components/profile-data-form";
import { StyledContainer } from "../../global-styles";
import { get } from "../../utils/fetch";
import * as S from "./styles";

function Profile() {
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { json } = await get("/user", true);
    setUser(json);
  };

  return (
    <S.Main>
      <StyledContainer>
        <>
          <h1>Здравсвуйте, {user?.name}!</h1>
          <h2>Настройки профиля</h2>
          <ProfileDataForm user={user} setUser={setUser} />
          <h2>Мои товары</h2>
          {/* <S.AdvList>
              <Adv />
            </S.AdvList> */}
        </>
      </StyledContainer>
    </S.Main>
  );
}

export default Profile;
