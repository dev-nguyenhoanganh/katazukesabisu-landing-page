import React, { useEffect, useState } from 'react';
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import { Box } from '@mui/material';
import ContactList from '../components/contact-section/ContactList';
import PostCommon from '../components/blog-post/PostCommon';
import { getAboutUs } from '../api/about/getAboutUs';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Helmet } from 'react-helmet';
import { HelmetProps } from '../api/util';
import { StyledHeading } from '../styles/Common';
import Loading from './Loading';
import { openSnackbar } from '../store/ui';
import message from '../lang/en.json';
import { PostCommonProps } from '../components/blog-post/type';
import { contactUs as MOCK_CONTACT } from '../_mock/common-block';
import MOCK_DATA, { seoHelmet as MOCK_SEO } from '../_mock/AboutPage';

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: '事業所概要', href: '' },
];

export default function About(): JSX.Element {
  const [data, setData] = useState<PostCommonProps>(MOCK_DATA.about);
  const [seoHelmet, setSeoHelmet] = useState<HelmetProps[]>(MOCK_SEO);
  const contactUs = useAppSelector((state) => state.contactUs);
  const [loading, setLoading] = useState(true);
  const [heading, setHeading] = useState('事業所情報');
  const dispatch = useAppDispatch();

  const getAboutUsInfor = async () => {
    try {
      setLoading(true);
      const { data, seoHelmet } = await getAboutUs();

      setData(data.aboutUs);
      setHeading(data.heading);
      setSeoHelmet(seoHelmet || []);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getAboutUsInfor();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <React.Fragment>
      <Helmet>
        {seoHelmet?.map((item, index) => <meta key={index} property={item.property} content={item.content} />)}
      </Helmet>

      <Box className="p-[16px] lg:px-[60px] lg:w-[1024px] lg:py-[20px] w-[100%] bg-white mx-auto transition-[width] duration-500">
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />
        <StyledHeading className="lg:!text-[230%]">{heading}</StyledHeading>
        {data !== undefined && <ContactList {...data} />}
        {/* {contactUs !== undefined && <PostCommon {...contactUs.data} />} */}
        <PostCommon {...MOCK_CONTACT} />
      </Box>
    </React.Fragment>
  );
}
