import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/layouts';
import ContentWrapper from '../components/layouts/Content/ContentWrapper';
import Loading from './Loading';

export const PageLayout = () => (
  <>
    <Header />
    <ContentWrapper>
      <Suspense
        fallback={
          <div className="flex items-center content-center w-full">
            <Loading />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </ContentWrapper>
    <Footer />
  </>
);
