import { useDispatch } from 'react-redux';
import { Button } from './LoadMoreButton.styled';
import { useState } from 'react';
import { fetchAdverts } from '../../redux/advert/operations';

export const LoadMore = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const [showBtn, setShowBtn] = useState(true);

  const handlerLoadMoreBtn = async () => {
    const { payload } = await dispatch(fetchAdverts(page));

    if (payload.length < 12) {
      setShowBtn(false);
    }
    setPage(page + 1);
  };

  return (
    showBtn && (
      <Button onClick={handlerLoadMoreBtn} type="button">
        Load more
      </Button>
    )
  );
};
