import { Li, List } from './AdvertsList.styled';
import { Card } from '../Card/Card';

const AdvertsList = ({ dataList }) => {
  return (
    <List>
      {dataList.map((data) => {
        return (
          <Li key={data.id}>
            <Card data={data} />
          </Li>
        );
      })}
    </List>
  );
};

export default AdvertsList;
