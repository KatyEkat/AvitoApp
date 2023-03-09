import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import CloseFormButton from '../close-form-button';
import plug from '../../assets/static/add_adv_photo_plug.jpg';
import MainButton from '../main-button';
// import { patch } from '../../utils/fetch';
// import { useParams } from "react-router-dom";
// import { API_URL } from "../../utils/consts";


function EditAdvForm({ closeForm }) {
  // const params = useParams();

  const hiddenFileInput = useRef();

  // const [adv, setAdv] = useState({images:[]});
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

  // useEffect(() => {
  //   patchAdv();
  // }, []);

  // const patchAdv = async () => {
  //   const { json } = await patch(`/ads/${params.id}`);
  //   patchAdv(json);
  // };

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
            type="text"
          >Название</S.FormInputName>
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-description">Описание</label>
          <S.FormInputDescription
            name="adv-description"
            placeholder="Введите описание"
            type="text"> описание тут</S.FormInputDescription>
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
            <S.FormInputPrice name="adv-price" type="number">2 200</S.FormInputPrice>
          </S.FormInputPriceWrapper>
        </S.InputWrapper>
        <div>
          <MainButton active={false}>Сохранить</MainButton>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
}

export default EditAdvForm;
