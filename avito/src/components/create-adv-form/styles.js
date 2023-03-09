import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 600px;
  border-radius: 12px;
  z-index: 1;
  background-color: #fff;
  padding: 20px 50px 42px 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const FormInputName = styled.input`
  padding: 13px 20px;
`;

export const FormInputDescription = styled.input`
  padding: 13px 20px 163px 20px;
`;

export const FormInputFile = styled.input`
  display: none;
`;

export const FormAdvImages = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const FormInputPriceWrapper = styled.div`
  max-width: 200px;
  position: relative;

  ::after {
    content: '₽';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const FormInputPrice = styled.input`
  width: 100%;
  padding: 13px 40px 13px 20px;
`;
