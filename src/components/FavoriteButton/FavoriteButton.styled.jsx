import styled from '@emotion/styled';

// ========== Icon Heart ============
export const IconButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
`;

export const WrapperIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.8);

  &.active {
    fill: rgb(52, 112, 255);
    stroke: none;
  }
`;
