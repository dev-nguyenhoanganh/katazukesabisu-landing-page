import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from '../pages/PageLayout';

const Home = React.lazy(() => import('../pages/Home'));

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
