import {
  CtaButton,
  ListSection,
  Notification,
  Title,
} from './FavoritePage.styled';
import { useSelector } from 'react-redux';
import { selectorDataListFavorites } from '../../redux/favorites/selectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';

const FavoritePage = () => {
  const data = useSelector(selectorDataListFavorites);

  return data.length !== 0 ? (
    <ListSection>
      <AdvertsList dataList={data} />
    </ListSection>
  ) : (
    <Notification>
      <Title>
        The favorites list is empty. To populate it, please navigate to the
        catalog.
      </Title>
      <CtaButton to="/catalog">Go to catalog</CtaButton>
    </Notification>
  );
};

export default FavoritePage;
