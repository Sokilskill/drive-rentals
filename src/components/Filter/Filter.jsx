import {
  Button,
  Form,
  Input,
  Label,
  Select,
  SelectPrice,
} from './Filter.styled';
import prices from '../../data/prices.json';
import makes from '../../data/makes.json';

const Filter = ({
  handleMakeSelectChange,
  handlePriceSelectChange,
  handleOnSubmit,
  selectedMake,
  selectedPrice,
}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        Car brand
        <Select
          name="models"
          value={selectedMake}
          onChange={handleMakeSelectChange}
        >
          <option value="" disabled hidden>
            Enter the text
          </option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <SelectPrice
          name="prices"
          value={selectedPrice}
          onChange={handlePriceSelectChange}
        >
          <option value="" disabled hidden>
            To $
          </option>
          {prices.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </SelectPrice>
      </Label>

      <Label>
        Car mileage / km
        <Input placeholder="From" />
      </Label>
      <Label>
        <Input placeholder="To" />
      </Label>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filter;
