import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import testImg from "../../assets/static/test.jpg";
import AdvReviews from "../../components/adv-reviews";
import EditAdvForm from "../../components/edit-adv-form";
import MainButton from "../../components/main-button";
import { Overlay, StyledContainer } from "../../global-styles";
import { API_URL, PROFILE_ROUTE } from "../../utils/consts";
import { get } from "../../utils/fetch";
import * as S from "./styles";

function AdvPage() {
  const isUserAdv = true;
  const params = useParams();

  const [adv, setAdv] = useState({ images: [] });
  const [comments, setComments] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(false);
  const [visibleEditAdvForm, setVisibleEditAdvForm] = useState(false);

  useEffect(() => {
    getAdv();
    getAdComments();
  }, []);

  const getAdv = async () => {
    const { json } = await get(`/ads/${params.id}`);
    setAdv(json);
  };

  const getAdComments = async () => {
    const { json } = await get(`/ads/${params.id}/comments`);
    setComments(json);
  };

  return (
    <S.Main>
      <StyledContainer>
        <S.AdvInfo>
          <S.AdvImagesBlock>
            <S.CurrentAdvImage
              src={`${API_URL}/` + adv?.images[activeImg]?.url}
              alt="Изображение"
            />
            <S.AdvImagesList>
              {adv?.images?.map((image, index) => (
                <S.AdvImage
                  key={image.id}
                  src={`${API_URL}/` + image.url}
                  alt="Изображение"
                  onClick={() => setActiveImg(index)}
                />
              ))}
            </S.AdvImagesList>
          </S.AdvImagesBlock>
          <div>
            <S.AdvTitle>{adv.title}</S.AdvTitle>
            <S.AdvDataRelease>{adv.created_on}</S.AdvDataRelease>
            <S.AdvLocation>{adv?.user?.city}</S.AdvLocation>
            <S.AdvReviews onClick={() => setVisibleReviews(true)}>
              {comments.length} отзыва
            </S.AdvReviews>
            <S.AdvPrice>{adv.price}</S.AdvPrice>
            {isUserAdv ? (
              <S.AdvSettingsButtons>
                <MainButton
                  type="button"
                  onClick={() => setVisibleEditAdvForm(true)}
                >
                  Редактировать
                </MainButton>
                <MainButton type="button">Снять с публикации</MainButton>
              </S.AdvSettingsButtons>
            ) : (
              <S.PhoneButton>
                Показать телефон
                <span>8 905 ХХХ ХХ ХХ</span>
              </S.PhoneButton>
            )}

            <S.SellerInfo>
              <S.SellerAvatar src={testImg} alt="seller avatar" />
              <div>
                <S.SellerName to={`${PROFILE_ROUTE}/${adv?.user?.id}`}>
                  {adv?.user?.name}
                </S.SellerName>
                <S.SellerActivity>
                  Продает товары с октября 2003
                </S.SellerActivity>
              </div>
            </S.SellerInfo>
          </div>
        </S.AdvInfo>
        <div>
          <h2>Описание товара</h2>
          <S.AdvDescription>{adv.description}</S.AdvDescription>
        </div>
      </StyledContainer>
      {visibleReviews && (
        <>
          <AdvReviews
            adId={adv.id}
            comments={comments}
            setComments={setComments}
            closeForm={() => setVisibleReviews(false)}
          />
          <Overlay />
        </>
      )}

      {visibleEditAdvForm && (
        <>
          <EditAdvForm
            adv={adv}
            closeForm={() => setVisibleEditAdvForm(false)}
          />
          <Overlay />
        </>
      )}
    </S.Main>
  );
}

export default AdvPage;
