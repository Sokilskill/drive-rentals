import { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';

import {
  CloseButton,
  IconWrapper,
  Modal,
  Overlay,
} from './ModalContainer.styled';
import { createPortal } from 'react-dom';
import { useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ModalContainer = ({ children, onToggle }) => {
  const closeModal = () => {
    onToggle();
    document.body.style.overflow = 'auto';
  };

  const onKeyDown = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        onToggle();
      }
    },
    [onToggle]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onKeyDown]);

  return createPortal(
    <>
      <Overlay onClick={closeModal} />
      <Modal>
        <CloseButton
          onClick={closeModal}
          aria-label="close modal"
          title="close"
        >
          <IconWrapper>
            <use href={`${sprite}#icon-close `}></use>
          </IconWrapper>
        </CloseButton>
        {children}
      </Modal>
    </>,
    modalRoot
  );
};
