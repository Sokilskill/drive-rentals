import { useEffect, useState } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import { Container, WrapperList, WrapperFilter } from './CatalogPage.styled';
import { LoadMore } from '../../components/LoadMoreButton/LoadMoreButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDataList,
  selectGetLimit,
  selectPageNumber,
  selectSelectedMake,
  selectShowLoadMore,
} from '../../redux/advert/selectors';
import { fetchAdverts } from '../../redux/advert/operations';
import Filter from '../../components/Filter/Filter';
import {
  clearDataList,
  incrementPage,
  setSelectedMake,
} from '../../redux/advert/advertsSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDataList);
  const showBtn = useSelector(selectShowLoadMore);

  const make = useSelector(selectSelectedMake);
  const page = useSelector(selectPageNumber);
  const limit = useSelector(selectGetLimit);

  const [selectedPrice, setSelectedPrice] = useState('To $');

  const isData = data.length !== 0;

  useEffect(() => {
    if (make === '') {
      dispatch(clearDataList());
      dispatch(fetchAdverts({ page: 1, limit }));
    }
  }, []);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchAdverts({ page, make, limit }));
    }
  }, [dispatch, page]);

  // LoadMore
  const pageIncrement = () => {
    dispatch(incrementPage());
  };

  const handleMakeSelectChange = (event) => {
    dispatch(setSelectedMake(event.target.value));
  };
  const handlePriceSelectChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(clearDataList());
    dispatch(fetchAdverts({ page: 1, make, limit }));
  };

  return (
    <Container>
      <WrapperFilter>
        <Filter
          handleMakeSelectChange={handleMakeSelectChange}
          handlePriceSelectChange={handlePriceSelectChange}
          handleOnSubmit={handleOnSubmit}
          selectedMake={make}
          selectedPrice={selectedPrice}
        />
      </WrapperFilter>
      <WrapperList>{isData && <AdvertsList dataList={data} />}</WrapperList>
      {showBtn && <LoadMore handlerBtn={pageIncrement} />}
    </Container>
  );
};

export default CatalogPage;
