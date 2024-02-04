import { useEffect, useState } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import { Container, WrapperList, WrapperFilter } from './CatalogPage.styled';
import { LoadMore } from '../../components/LoadMoreButton/LoadMoreButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDataList,
  selectGetLimit,
  selectIsLoading,
  selectPageNumber,
  selectSelectedMake,
  selectSelectedPrice,
  selectShowLoadMore,
} from '../../redux/advert/selectors';
import { fetchAdverts } from '../../redux/advert/operations';
import Filter from '../../components/Filter/Filter';
import {
  clearDataList,
  incrementPage,
  setSelectedMake,
  setSelectedPrice,
} from '../../redux/advert/advertsSlice';
import { Loader } from '../../components/Loader/Loader';
import prices from '../../data/prices.json';
import makes from '../../data/makes.json';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDataList);
  const showBtn = useSelector(selectShowLoadMore);

  const make = useSelector(selectSelectedMake);
  const rentalPrice = useSelector(selectSelectedPrice);
  const page = useSelector(selectPageNumber);
  const limit = useSelector(selectGetLimit);
  const isLoading = useSelector(selectIsLoading);
  const [selectedMake, setSelectedMakeLocal] = useState(make);
  const [selectedPrice, setSelectedPriceLocal] = useState(rentalPrice);

  const isData = data.length !== 0;

  useEffect(() => {
    if (page < 2) {
      dispatch(clearDataList());
    }
    dispatch(fetchAdverts({ page, limit, make, rentalPrice }));
  }, [dispatch, limit, make, page, rentalPrice]);

  const pageIncrement = () => {
    dispatch(incrementPage());
  };

  const handleMakeSelectChange = (event) => {
    setSelectedMakeLocal(event.target.value);
  };
  const handlePriceSelectChange = (event) => {
    setSelectedPriceLocal(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(clearDataList());
    // dispatch(fetchAdverts({ page: 1, make, rentalPrice: '', limit }));
    dispatch(setSelectedMake(selectedMake === 'All' ? '' : selectedMake));
    dispatch(setSelectedPrice(selectedPrice === 'All' ? '' : selectedPrice));
  };

  return (
    <Container>
      <WrapperFilter>
        <Filter
          handleMakeSelectChange={handleMakeSelectChange}
          handlePriceSelectChange={handlePriceSelectChange}
          handleOnSubmit={handleOnSubmit}
          selectedMake={selectedMake}
          selectedPrice={selectedPrice}
          makes={makes}
          prices={prices}
        />
      </WrapperFilter>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isData ? (
            <>
              <WrapperList>
                <AdvertsList dataList={data} />
              </WrapperList>
              {showBtn && isData && <LoadMore handlerBtn={pageIncrement} />}
            </>
          ) : (
            <h1 style={{ margin: '0 auto', fontSize: '40px' }}>
              {`Sorry, but I couldn't find anything based on your request. Please try something else.`}
            </h1>
          )}
        </>
      )}
    </Container>
  );
};

export default CatalogPage;
