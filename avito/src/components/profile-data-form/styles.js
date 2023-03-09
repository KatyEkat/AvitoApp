import styled from 'styled-components';

export const DataForm = styled.form`
  display: flex;
  column-gap: 50px;
  margin-bottom: 70px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ChangeAvatarBtn = styled.button`
  color: #009ee4;
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const TextData = styled.div`
  max-width: 614px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const InputsNameBlock = styled.div`
  display: flex;
  column-gap: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const DataFormInput = styled.input`
  border: 1px solid #c4c4c4;
  display: inline-block;
  padding: 13px 19px;
  cursor: pointer;
  border-radius: 6px;

  :focus,
  :hover {
    outline: 1px solid #009ee4;
  }
`;

export const DataFormLabel = styled.label`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: ${({ inputFocused }) => (inputFocused ? '#009ee4' : '#c4c4c4')};
`;

export const DataFormInputFile = styled.input`
  display: none;
`;
