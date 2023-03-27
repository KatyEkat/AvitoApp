import React, { useState } from "react";
import { useDispatch } from "react-redux";
import plug from "../../assets/static/add_adv_photo_plug.jpg";
import { createAd } from "../../Redux/Ads/AdsActions";
import { uploadImage } from "../../utils/clients/adsClient";
import { post } from "../../utils/fetch";
import CloseFormButton from "../close-form-button";
import MainButton from "../main-button";
import * as S from "./styles";

function CreateAdvForm({ closeForm }) {
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSelectImage = (event) => {
    setFiles([...files, event.target.files[0]]);
  };
  const isFilePickerDisabled = (index) => {
    if (index === 0) {
      return false;
    }
    if (index > files.length) {
      return true;
    }
  };

  const onCreateAd = async () => {
    const { json } = await post(
      `/adstext`,
      { price, title, description },
      true
    );
    const ads = await Promise.all(
      files.map(async (file) => await uploadImage({ file, adId: json.id }))
    );
    dispatch(createAd(files.length === 0 ? json : ads[0]));
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

          <S.FormAdvImages>
            {Array.from({ length: 5 }, (_v, k) => (
              <label htmlFor={k} key={k}>
                <img
                  src={files[k] ? URL.createObjectURL(files[k]) : plug}
                  alt="название"
                  style={{ width: 90, height: 90 }}
                />
                <S.FormInputFile
                  name="adv-photo"
                  id={k}
                  type="file"
                  accept="image/*"
                  onChange={onSelectImage}
                  disabled={isFilePickerDisabled(k)}
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
