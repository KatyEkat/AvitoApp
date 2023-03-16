import React, { useState } from "react";
import testImg from "../../assets/static/test.jpg";
import { isAuthTokenExists, post } from "../../utils/fetch";
import CloseFormButton from "../close-form-button";
import MainButton from "../main-button";
import * as S from "./styles";

function AdvReviews({ closeForm, adId, comments, setComments }) {
  const isAuth = isAuthTokenExists();
  const [text, setText] = useState("");

  const createAdComment = async () => {
    const { json } = await post(`/ads/${adId}/comments`, { text }, true);
    setText("");
    setComments([json, ...comments]);
  };

  return (
    <S.ReviewsBlock>
      <S.ReviewTitleWrapper>
        <h2>Отзывы о товаре</h2>
        <CloseFormButton onClick={closeForm} />
      </S.ReviewTitleWrapper>
      <S.OverflowBlock>
        <S.Subtitle>Добавить отзыв</S.Subtitle>
        <S.ReviewSendContainer>
          <S.ReviewSendFormInput
            value={text}
            onChange={(event) => setText(event.target.value)}
            type="text"
            placeholder="Введите отзыв"
          />
          <div>
            <MainButton
              active={Boolean(isAuth && text.length > 0)}
              onClick={createAdComment}
            >
              Опубликовать
            </MainButton>
          </div>
        </S.ReviewSendContainer>
        <S.ReviewsList>
          {comments.map((comment) => (
            <S.Review key={comment.id}>
              <S.ReviewerAvatar src={testImg} alt="user avatar" />
              <div>
                <S.ReviewerInfo>
                  <S.ReviewerName>{comment.author.name}</S.ReviewerName>
                  <S.ReviewDateRelease>
                    {comment.created_on}
                  </S.ReviewDateRelease>
                </S.ReviewerInfo>
                <S.ReviewerCommentBlock>
                  <S.ReviewerCommentTitle>Комментарий</S.ReviewerCommentTitle>
                  <S.ReviewCommentText>{comment.text}</S.ReviewCommentText>
                </S.ReviewerCommentBlock>
              </div>
            </S.Review>
          ))}
        </S.ReviewsList>
      </S.OverflowBlock>
    </S.ReviewsBlock>
  );
}

export default AdvReviews;
