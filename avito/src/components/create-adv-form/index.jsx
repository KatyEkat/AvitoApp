import React, { useState, useRef } from "react";
import * as S from "./styles";
import MainButton from "../main-button";
import CloseFormButton from "../close-form-button";
import plug from "../../assets/static/add_adv_photo_plug.jpg";
import { createAd } from "../../utils/clients/adsClient";
import { post } from "../../utils/fetch";

function CreateAdvForm({ closeForm }) {
  const hiddenFileInput = useRef();

  const [advImage, setAdvImage] = useState();
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = (e) => {
    const { target } = e;
    console.log(target);
  };

  const handleChange = () => {
    const fileUploaded = hiddenFileInput.current.files[0];
    const obj = URL.createObjectURL(fileUploaded);
    setAdvImage(obj);
  };

  const onCreateAd = async () => {
    const query = new URLSearchParams({ price, title, description });
    await post(`/ads?${query.toString()}`, {}, true);
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
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            name="adv-name"
            placeholder="Введите название"
            type="text"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-description">Описание</label>
          <S.FormInputDescription
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            name="adv-description"
            placeholder="Введите описание"
            type="text"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-photo">
            Фотографии товара <span>не более 5 фотографий</span>
          </label>
          {/* <S.FormInputFile
            name="adv-photo"
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleChange}
          /> */}

          <S.FormAdvImages>
            {Array.from({ length: 5 }, (_v, k) => (
              <label htmlFor={k} key={k} onClick={handleClick}>
                <img src={advImage || plug} alt="название" />
                <S.FormInputFile
                  name="adv-photo"
                  id={k}
                  type="file"
                  accept="image/*"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                />
              </label>
            ))}
          </S.FormAdvImages>
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-price">Цена</label>
          <S.FormInputPriceWrapper>
            <S.FormInputPrice
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              name="adv-price"
              type="number"
            />
          </S.FormInputPriceWrapper>
        </S.InputWrapper>
        <div>
          <MainButton onClick={onCreateAd} active={true}>
            Опубликовать
          </MainButton>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
}

export default CreateAdvForm;
