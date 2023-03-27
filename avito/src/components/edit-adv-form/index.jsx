import React, { useState } from "react";
import plug from "../../assets/static/add_adv_photo_plug.jpg";
import { patch } from "../../utils/fetch";
import CloseFormButton from "../close-form-button";
import MainButton from "../main-button";
import * as S from "./styles";

function EditAdvForm({ adv, closeForm, setAdv }) {
  const [files, setFiles] = useState([]);
  const [price, setPrice] = useState(adv.price);
  const [title, setTitle] = useState(adv.title);
  const [description, setDescription] = useState(adv.description);
  const hiddenFileInput = useState();
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

  const onAdUpdate = async () => {
    const { json, error } = await patch(
      `/ads/${adv.id}`,
      {
        price,
        title,
        description,
      },
      true
    );
    setAdv(json);
    !error && closeForm();
  };

  return (
    <S.FormWrapper>
      <S.TitleWrapper>
        <h2>Редактировать объявление</h2>
        <CloseFormButton onClick={closeForm} />
      </S.TitleWrapper>
      <S.Form>
        <S.InputWrapper>
          <label htmlFor="adv-name">Название</label>
          <S.FormInputName
            name="adv-name"
            placeholder="Введите название"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <label htmlFor="adv-description">Описание</label>
          <S.FormInputDescription
            name="adv-description"
            placeholder="Введите описание"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
            <S.FormInputPrice
              name="adv-price"
              type="number"
              placeholder="Введите цену"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            ></S.FormInputPrice>
          </S.FormInputPriceWrapper>
        </S.InputWrapper>
        <div>
          <MainButton active={true} onClick={onAdUpdate}>
            Сохранить
          </MainButton>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
}

export default EditAdvForm;
