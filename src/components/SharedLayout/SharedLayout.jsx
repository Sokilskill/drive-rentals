import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main className="container">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
