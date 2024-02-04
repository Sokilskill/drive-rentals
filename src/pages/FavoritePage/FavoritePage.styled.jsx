import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListSection = styled.section`
  padding: 100px 0;
`;

export const Notification = styled.section`
  padding-top: 200px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-right: 10px;
  font-size: 28px;
  margin-bottom: 30px;
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
