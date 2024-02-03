import { useEffect } from 'react';
import { Advertisement, Container, CtaButton, Title } from './HomePage.styled';
// import example from '../../assets/example.png';

const body = document.querySelector('body');
const HomePage = () => {
  useEffect(() => {
    body.classList.add('img');

    // Cleanup function
    return () => {
      body.classList.remove('img');
    };
  }, []);

  return (
    <Container>
      <Advertisement>
        <Title>Discover the Ultimate Driving Experience</Title>
        <p>
          Explore our premium selection of rental cars for your next adventure.
          Book now and hit the road!
        </p>
        <CtaButton to="/catalog">Book Now</CtaButton>
      </Advertisement>

      <Advertisement>
        <Title>Drive Rentals - Your Gateway to Seamless Car Rentals</Title>
        <p>
          Experience the convenience of browsing and booking rental cars with
          Drive Rentals. Our user-friendly app makes it easy to find the perfect
          car for your temporary needs.
        </p>
      </Advertisement>
    </Container>
  );
};

export default HomePage;
