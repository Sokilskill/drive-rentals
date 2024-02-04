import styled from '@emotion/styled';

export const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  height: 248px;

  &.large {
    height: 270px;
  }

  & > img {
    display: block;
    border-radius: 14px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

// ========== Content ============
export const Content = styled.div`
  padding: 14px 0 28px;

  &.large {
    padding: 14px 0 24px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 8px;
  // white-space: nowrap;

  font-size: 16px;
  line-height: 1.5;

  &.large {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;

  &.large {
    margin-bottom: 14px;
  }
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  text-align: start;
  white-space: nowrap;

  &:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const About = styled.p`
  color: rgb(18, 20, 23);
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 24px;
`;

export const AboutTitle = styled.h3`
  color: rgb(18, 20, 23);
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 8px;
`;

export const LearnMoreButton = styled.button`
  padding: 12px 99px;
  border-radius: 12px;
  background: rgb(52, 112, 255);
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border-radius: 12px;
    background: rgb(11, 68, 205);
  }
`;

// ============ Rental Info ===========

export const RentalList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const RentalItem = styled.li`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: rgb(249, 249, 249);
`;

export const RentalInfo = styled.p`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: rgb(54, 53, 53);
  > span {
    color: rgb(52, 112, 255);
    font-weight: 600;
  }
`;

export const RentalButton = styled.a`
  display: inline-block;
  padding: 12px 50px 12px 50px;
  border-radius: 12px;
  background: rgb(52, 112, 255);

  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border-radius: 12px;
    background: rgb(11, 68, 205);
  }
`;
