import { Button } from './LoadMoreButton.styled';

export const LoadMore = ({ handlerBtn }) => {
  return (
    <Button onClick={handlerBtn} type="button">
      Load more
    </Button>
  );
};
