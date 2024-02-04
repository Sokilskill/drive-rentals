import { useState } from 'react';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { ModalContainer } from '../ModalContainer/ModalContainer';
import {
  About,
  AboutTitle,
  Content,
  Description,
  LearnMoreButton,
  RentalButton,
  RentalInfo,
  RentalItem,
  RentalList,
  Title,
  WrapperDescription,
  WrapperImage,
  WrapperTitle,
} from './Card.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/favoritesSlice';
import { selectorDataListFavorites } from '../../redux/favorites/selectors';

function formatAddress(address) {
  const [street, city, country] = address.split(', ');
  return { city, country };
}

function getSplitArray(string, spliter) {
  const addressArray = string.split(spliter);
  const trimmedArray = addressArray.map((element) => element.trim());

  return trimmedArray;
}

export const Card = ({ data, modal }) => {
  const dispatch = useDispatch();
  const dataFavorite = useSelector(selectorDataListFavorites);

  const {
    id,
    img,
    photoLink,
    model,
    year,
    rentalPrice,
    address,
    type,
    make,
    description,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    rentalCompany,
    rentalConditions,
    mileage,
  } = data;

  const { city, country } = formatAddress(address);

  const spliterForConditions = '\n';
  const rentalConditionsArray = getSplitArray(
    rentalConditions,
    spliterForConditions
  );

  const spliterForMinimalAge = ': ';
  const minimalAgeArray = getSplitArray(
    rentalConditionsArray[0],
    spliterForMinimalAge
  );
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal((state) => !state);
  };
  const handlerFavoriteBtn = () => {
    dispatch(toggleFavorite(data));
  };

  const isFavorite = dataFavorite.find((item) => item.id === id);

  return (
    <>
      <WrapperImage className={modal ? 'large' : ''}>
        <img src={img ? img : photoLink} alt={model} loading="lazy" />
        {!modal && (
          <FavoriteButton
            isFavorite={isFavorite}
            onToogle={handlerFavoriteBtn}
          />
        )}
      </WrapperImage>

      <Content className={modal ? 'large' : ''}>
        <WrapperTitle>
          <Title className={modal ? 'large' : ''}>
            {make} <span style={{ color: 'blue' }}>{model}</span>, {year}
          </Title>
          {!modal && <p>{rentalPrice}</p>}
        </WrapperTitle>

        {!modal ? (
          <>
            <WrapperDescription>
              <Description>{city}</Description>
              <Description>{country}</Description>
              <Description>{rentalCompany}</Description>
            </WrapperDescription>

            <WrapperDescription>
              <Description>{type}</Description>
              <Description>{model}</Description>
              <Description>{id}</Description>
              {functionalities[0] === 'Power liftgate' ? (
                <Description>Power liftgate</Description>
              ) : (
                <Description>{accessories[2]}</Description>
              )}
            </WrapperDescription>
          </>
        ) : (
          <>
            <WrapperDescription>
              <Description>{city}</Description>
              <Description>{country}</Description>
              <Description>Id: {id}</Description>
              <Description>Year: {year}</Description>
              <Description>Type: {type}</Description>
            </WrapperDescription>

            <WrapperDescription>
              <Description>Fuel Consumption: {fuelConsumption}</Description>
              <Description>Engine Size: {engineSize}</Description>
            </WrapperDescription>

            <About>{description}</About>
            <AboutTitle>Accessories and functionalities:</AboutTitle>
            <WrapperDescription>
              <Description>{accessories[0]}</Description>
              <Description>{accessories[1]}</Description>
              <Description>{accessories[2]}</Description>
            </WrapperDescription>
            <WrapperDescription>
              <Description>{functionalities[0]}</Description>
              <Description>{functionalities[1]}</Description>
              <Description>{functionalities[2]}</Description>
            </WrapperDescription>
            <AboutTitle>Rental Conditions: </AboutTitle>
            <RentalList>
              <RentalItem>
                <RentalInfo>
                  {minimalAgeArray[0]}:&nbsp;<span>{minimalAgeArray[1]}</span>
                </RentalInfo>
              </RentalItem>
              <RentalItem>
                <RentalInfo>{rentalConditionsArray[1]}</RentalInfo>
              </RentalItem>
            </RentalList>
            <RentalList>
              <RentalItem>
                <RentalInfo>{rentalConditionsArray[2]}</RentalInfo>
              </RentalItem>
              <RentalItem>
                <RentalInfo>
                  Mileage:&nbsp;<span>{mileage}</span>
                </RentalInfo>
              </RentalItem>
              <RentalItem>
                <RentalInfo>
                  Price:&nbsp;<span>{rentalPrice}</span>
                </RentalInfo>
              </RentalItem>
            </RentalList>
          </>
        )}
      </Content>

      {!modal ? (
        <LearnMoreButton type="button" onClick={onToggleModal}>
          Learn more
        </LearnMoreButton>
      ) : (
        <RentalButton href="tel:+380730000000">Rental car</RentalButton>
      )}
      {showModal && (
        <ModalContainer onToggle={onToggleModal}>
          {showModal && <Card data={data} modal="true" />}
        </ModalContainer>
      )}
    </>
  );
};
