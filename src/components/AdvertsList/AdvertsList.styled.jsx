import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 50px 29px;
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  min-height: 426px;

  // style for card
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  // background-color: #e3e3e3;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: zoom-in;
    transform: scale(1.09);
  }
`;
