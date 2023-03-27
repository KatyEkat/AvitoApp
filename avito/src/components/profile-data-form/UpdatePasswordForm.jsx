import React from "react";
import { useState } from "react";
import { put } from "../../utils/fetch";
import MainButton from "../main-button";
import * as S from "./styles";

function UpdatePasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const updatePassword = async (event) => {
    console.log("click");
    event.preventDefault();
    if (newPassword1 === newPassword2) {
      const body = {
        password_1: oldPassword,
        password_2: newPassword1,
      };

      try {
        await put("/user/password", body, true);
        alert("Пароль успешно изменен");

        setOldPassword("");
        setNewPassword1("");
        setNewPassword2("");
      } catch (error) {
        console.log(error.response);
        if (error.response.data.detail === "Incorrect password")
          alert("Неверный старый пароль");
      }
    } else {
      alert("Значения в полях нового пароля не совпадают");
    }
  };

  return (
    <>
      <S.InputWrapper>
        <h3 style={{ margin: "14px 0 5px 0" }}>Сменить пароль</h3>
        <S.DataFormLabel htmlFor="old-password">Старый пароль</S.DataFormLabel>
        <S.DataFormInput
          type="password"
          name="old-password"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
        />
      </S.InputWrapper>
      <S.InputsNameBlock>
        <S.InputWrapper>
          <S.DataFormLabel htmlFor="new-password">Новый пароль</S.DataFormLabel>
          <S.DataFormInput
            type="password"
            name="new-password"
            value={newPassword1}
            onChange={(event) => setNewPassword1(event.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.DataFormLabel htmlFor="new-password-2">
            Повторите пароль
          </S.DataFormLabel>
          <S.DataFormInput
            type="password"
            name="new-password-2"
            value={newPassword2}
            onChange={(event) => setNewPassword2(event.target.value)}
          />
        </S.InputWrapper>
      </S.InputsNameBlock>

      <MainButton
        type="submit"
        active={oldPassword && newPassword1 && newPassword2}
        onClick={updatePassword}
      >
        Сменить пароль
      </MainButton>
    </>
  );
}

export default UpdatePasswordForm;
