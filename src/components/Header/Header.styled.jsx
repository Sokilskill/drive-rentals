import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: #111111;

  border-radius: 12px;
  border: 1px solid #e9dbb7;
  padding: 10px 27px;
  transition: background 250ms linear;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  &.active {
    color: #efede8;
    background: #1a787c;
    border: 1px solid #e9dbb7;
  }

  &:hover,
  &:focus {
    background: #23b6bc;
  }
`;
