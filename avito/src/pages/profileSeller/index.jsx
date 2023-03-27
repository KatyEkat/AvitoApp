import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledContainer } from "../../global-styles";
import { API_URL } from "../../utils/consts";
import { get } from "../../utils/fetch";
import { maskPhoneNumber } from "../../utils/phone";
import * as S from "../profilePersonal/styles";

function Profile() {
  const [user, setUser] = useState({ name: "" });
  const [isPhoneHidden, setIsPhoneHidden] = useState(true);

  const params = useParams();

  useEffect(() => {
    getAllUsers();
  }, []);

  const onShowPhone = () => {
    setIsPhoneHidden(false);
  };

  const getAllUsers = async () => {
    const { json } = await get("/user/all");

    const user = json.find((user) => user.id === Number(params.id));
    setUser(user);
  };

  return (
    <S.Main>
      <StyledContainer>
        <>
          <h1>Профиль продавца</h1>
          <S.SellerInfoBlock>
            <div>
              <img
                src={`${API_URL}/` + user?.avatar}
                alt="seller avatar"
                width={170}
              />
            </div>
            <div>
              <p>{user?.name}</p>
              <p>{user?.city}</p>
              <p>{user?.sells_from}</p>
              <S.PhoneButton onClick={onShowPhone}>
                Показать телефон
                <span>
                  {isPhoneHidden
                    ? maskPhoneNumber(user?.phone || "")
                    : user?.phone}
                </span>
              </S.PhoneButton>
            </div>
          </S.SellerInfoBlock>
          <h2>Товары продавца</h2>
          {/* <S.AdvList>
              <Adv />
            </S.AdvList> */}
        </>
      </StyledContainer>
    </S.Main>
  );
}

export default Profile;
