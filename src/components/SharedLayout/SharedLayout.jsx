import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Styled } from './StyledSharedLayout';
import LoadingPoints from './LoadingPoints';

const SharedLayout = () => {
  return (
    <>
      <Styled.Header>
        <nav>
          <Styled.Link to="/">Home</Styled.Link>
          <Styled.Link to="/movies">Movies</Styled.Link>
        </nav>
      </Styled.Header>

      <Suspense fallback={<LoadingPoints />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
