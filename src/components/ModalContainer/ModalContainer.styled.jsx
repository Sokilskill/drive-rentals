import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 99;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;

  width: 541px;
  height: 752px;
  border-radius: 24px;
  background-color: rgb(255, 255, 255);
  z-index: 1000;

  transition: transform 0.35s ease-in-out;

  &.is-open {
    transform: translate(0);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: unset;
  color: rgb(18, 20, 23);
  width: 24px;
  height: 24px;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: green;
  }
`;

export const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
  stroke: currentColor;
`;
