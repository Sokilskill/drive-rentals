import { Logo } from '../Logo/Logo';
import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer className="container">
      <Logo />
      <Navigation>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
