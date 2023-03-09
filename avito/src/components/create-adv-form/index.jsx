import React, { useState, useRef } from "react";
import * as S from "./styles";
import MainButton from "../main-button";
import CloseFormButton from "../close-form-button";
import plug from "../../assets/static/add_adv_photo_plug.jpg";

function CreateAdvForm({ closeForm }) {
  const hiddenFileInput = useRef();

  const [advImage, setAdvImage] = useState();

  const handleClick = (e) => {
    const { target } = e;
    console.log(target);
  };

  const handleChange = () => {
    const fileUploaded = hiddenFileInput.current.files[0];
    const obj = URL.createObjectURL(fileUploaded);
    setAdvImage(obj);
  };
  return (
    <S.FormWrapper>
      <S.TitleWrapper>
        <h2>Новое объявление</h2>
        <CloseFormButton onClick={closeForm} />
      </S.TitleWrapper>
      <S.Form>
        <S.InputWrapper>
          <label htmlFor="adv-name">Название</label>
          <S.FormInputName
            name="adv-name"
            placeholder="Введите название"
            type="text"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-description">Описание</label>
          <S.FormInputDescription
            name="adv-description"
            placeholder="Введите описание"
            type="text"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-photo">
            Фотографии товара <span>не более 5 фотографий</span>
          </label>
          <S.FormInputFile
            name="adv-photo"
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleChange}
          />

          <S.FormAdvImages>
            {Array.from({ length: 5 }, (_v, k) => (
              <div key={k} onClick={handleClick}>
                <img src={advImage || plug} alt="название" />
              </div>
            ))}
          </S.FormAdvImages>
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-price">Цена</label>
          <S.FormInputPriceWrapper>
            <S.FormInputPrice name="adv-price" type="number" />
          </S.FormInputPriceWrapper>
        </S.InputWrapper>
        <div>
          <MainButton active={false}>Опубликовать</MainButton>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
}

export default CreateAdvForm;
