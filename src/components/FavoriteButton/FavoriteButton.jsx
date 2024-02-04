import sprite from '../../assets/sprite.svg';
import { IconButton, WrapperIcon } from './FavoriteButton.styled';

export const FavoriteButton = ({ isFavorite, onToogle }) => {
  return (
    <IconButton
      onClick={onToogle}
      aria-label="button add or remove from favorites"
      title="favorite"
    >
      <WrapperIcon className={isFavorite ? 'active' : ''}>
        <use href={`${sprite}#icon-heart`}></use>
      </WrapperIcon>
    </IconButton>
  );
};
