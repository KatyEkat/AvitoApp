import React, { useRef, useState } from "react";
import mockAvatarMen from "../../assets/static/mockAvatarMen.jpg";
import { patch } from "../../utils/fetch";
import MainButton from "../main-button";
import * as S from "./styles";
import UpdatePasswordForm from "./UpdatePasswordForm";


function ProfileDataForm({ user, setUser }) {
  const hiddenFileInput = useRef();
  const avatarRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  const [avatarSrc, setAvatarSrc] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = () => {
    const fileUploaded = hiddenFileInput.current.files[0];
    const obj = URL.createObjectURL(fileUploaded);
    setAvatarSrc(obj);
    // setUser({...user, avatar: obj});
  };

  const onChangeUser = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  const onUpdateProfile = async () => {
    await patch(
      "/user",
      {
        // avatar: user.avatar,
        name: user.name,
        surname: user.surname,
        city: user.city,
        phone: user.phone,
      },
      true
    );
  };

  return (
    <S.DataForm>
      <S.AvatarWrapper>
        <S.Avatar
          src={avatarSrc || mockAvatarMen}
          alt="profile avatar"
          ref={avatarRef}
        />
        <S.ChangeAvatarBtn type="button" onClick={handleClick}>
          Заменить
        </S.ChangeAvatarBtn>
        <S.DataFormInputFile
          type="file"
          name="avatar"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
      </S.AvatarWrapper>
      <S.TextData>
        <S.InputsNameBlock>
          <S.InputWrapper>
            <S.DataFormLabel htmlFor="first-name" ref={nameRef}>
              Имя
            </S.DataFormLabel>
            <S.DataFormInput
              placeholder="Имя"
              type="text"
              name="first-name"
              onFocus={() => nameRef.current.focus()}
              onBlur={() => nameRef.current.blur()}
              value={user?.name}
              onChange={onChangeUser("name")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.DataFormLabel htmlFor="last-name" ref={surnameRef}>
              Фамилия
            </S.DataFormLabel>
            <S.DataFormInput
              placeholder="Фамилия"
              type="text"
              name="last-name"
              onFocus={() => surnameRef.current.focus()}
              onBlur={() => surnameRef.current.blur()}
              value={user?.surname}
              onChange={onChangeUser("surname")}
            />
          </S.InputWrapper>
        </S.InputsNameBlock>

        <S.InputWrapper>
          <S.DataFormLabel htmlFor="city" ref={cityRef}>
            Город
          </S.DataFormLabel>
          <S.DataFormInput
            placeholder="Город"
            type="text"
            name="city"
            onFocus={() => cityRef.current.focus()}
            onBlur={() => cityRef.current.blur()}
            value={user?.city}
            onChange={onChangeUser("city")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.DataFormLabel htmlFor="phone" ref={phoneRef}>
            Телефон
          </S.DataFormLabel>
          <S.DataFormInput
            placeholder="8999*******"
            type="tel"
            name="phone"
            onFocus={() => phoneRef.current.focus()}
            onBlur={() => phoneRef.current.blur()}
            onMouseEnter={() => phoneRef.current.focus()}
            onMouseLeave={() => phoneRef.current.blur()}
            value={user?.phone}
            onChange={onChangeUser("phone")}
          />
        </S.InputWrapper>
        <div>
          <MainButton onClick={onUpdateProfile}>Сохранить</MainButton>
        </div>

        <UpdatePasswordForm />

      </S.TextData>
    </S.DataForm>
  );
}

export default ProfileDataForm;