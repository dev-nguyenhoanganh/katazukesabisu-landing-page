import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from '../pages/PageLayout';
import { URL_MAPPING } from './urlMapping';
import { useAppDispatch } from '../store/hooks';
import { getDataContactUs } from '../store/contactUs';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Service = React.lazy(() => import('../pages/Service'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Page404 = React.lazy(() => import('../pages/Page404'));
const FlowPage = React.lazy(() => import('../pages/Flow'));
const MaintainPage = React.lazy(() => import('../pages/Maintain'));
const BlogDetail = React.lazy(() => import('../pages/BlogDetail'));
const ListBlog = React.lazy(() => import('../pages/ListBlog'));

export const AppRoutes = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getDataContactUs());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path={URL_MAPPING.ABOUT_US_PAGE_URL} element={<About />} />
        <Route path={URL_MAPPING.SERVICE_PAGE_URL} element={<Service />} />
        <Route path={URL_MAPPING.FLOW_PAGE_URL} element={<FlowPage />} />
        <Route path={URL_MAPPING.CONTACT_PAGE_URL} element={<Contact />} />
        <Route path="/blog" element={<ListBlog />} />
        <Route path="/blog-detail/:blogId" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path={URL_MAPPING.MAINTAIN_PAGE_URL} element={<MaintainPage />} />
      <Route path={URL_MAPPING.PAGE_404_URL} element={<Page404 />} />
      <Route path="/*" element={<Navigate to={URL_MAPPING.PAGE_404_URL} />} />
    </Routes>
  );
};
