import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 500px;
`;

export const Title = styled.h1`
  margin-right: 10px;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Advertisement = styled.section`
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  width: 500px;

  & > p {
    font-size: 16px;
    margin-bottom: 20px;
  }
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
