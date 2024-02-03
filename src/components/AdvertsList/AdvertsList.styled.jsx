import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px 29px;
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
  //   flex-basis: calc((20% - 15px * 3) / 4);
  border-radius: 12px;

  // style for card
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  // background-color: #e3e3e3;
  transition: transform 0.3s ease-in-out;

  overflow: hidden;

  &:hover {
    cursor: zoom-in;
    transform: scale(1.09);
  }
`;
