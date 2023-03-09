import styled from 'styled-components';

export const Main = styled.div`
  padding-bottom: 80px;
`;

export const AdvList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 26px;
`;

export const SellerInfoBlock = styled.div`
  display: flex;
  column-gap: 50px;
`;

// export const SellerName = styled.p`
//   display: flex;
//   column-gap: 50px;
// `;

export const PhoneButton = styled.button`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  align-items: center;
  margin-top: 34px;
  background-color: #009ee4;
  padding: 13px 37px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: white;
  transition: background-color 0.2s ease-in;

  :hover {
    background-color: #0080c1;
  }
`;
