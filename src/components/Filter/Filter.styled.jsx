import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-weight: 500;
  line-height: 1.2;
`;

export const Select = styled.select`
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  padding: 14px 89px 14px 18px;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  border: none;
  outline: none;

  & > option {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
  }

  &:focus {
    outline: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const SelectPrice = styled(Select)`
  padding-right: 30px;
`;

export const Input = styled.input`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  width: 160px;
  padding: 14px 89px 14px 18px;
  color: rgb(18, 20, 23);
  border-radius: 14px;
  background: rgb(247, 247, 251);
  border: none;
  outline: none;

  &::placeholder {
    color: rgb(18, 20, 23);
  }

  &:focus {
    outline: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const Button = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  background-color: rgb(52, 112, 255);

  color: rgb(255, 255, 255);
  font-weight: 600;
  line-height: 1.4;
  transition: background-color 250ms linear;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;
