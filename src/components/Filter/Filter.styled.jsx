import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
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

  &:focus {
    outline: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const SelectPrice = styled(Select)`
  padding-right: 30px;
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

export const InputFirst = styled.input`
  width: 160px;
  border: none;
  background: var(--select-bg);
  outline: none;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primary-text-color);
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding: 14px 14px 14px 70px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputSecond = styled.input`
  width: 160px;
  border: none;
  background: var(--select-bg);
  outline: none;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primary-text-color);

  border-radius: 0 14px 14px 0;
  padding: 14px 14px 14px 50px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputContainer = styled.div`
  display: flex;
`;
export const Wrap = styled.div`
  position: relative;
`;
export const Placeholder = styled.p`
  position: absolute;
  top: 14px;
  left: 24px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primary-text-color);
`;
