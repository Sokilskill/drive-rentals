import { Button, Form, Label, Select, SelectPrice } from './Filter.styled';

const prices = [
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
  '110',
  '120',
  '130',
  '140',
  '150',
];
const makes = [
  'All',
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];
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
          <option value="To $" disabled>
            To $
          </option>
          {prices.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </SelectPrice>
      </Label>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filter;
