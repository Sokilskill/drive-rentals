import styled from '@emotion/styled';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 200px;
`;

const LoaderIcon = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  animation: spin 1.3s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => (
  <LoaderContainer>
    <LoaderIcon></LoaderIcon>
  </LoaderContainer>
);
