import React, { useState } from 'react';
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import { Box } from '@mui/material';
import ContactList from '../components/contact-section/ContactList';
import PostCommon from '../components/blog-post/PostCommon';
import { StyledHeading } from '../styles/Common';
import { PostCommonProps } from '../components/blog-post/type';
import { contactUs as MOCK_CONTACT } from '../_mock/common-block';
import MOCK_DATA from '../_mock/AboutPage';

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: '事業所概要', href: '' },
];

export default function About(): JSX.Element {
  const [data, setData] = useState<PostCommonProps>(MOCK_DATA.about);

  return (
    <React.Fragment>
      <Box className="p-[16px] lg:px-[60px] lg:w-[1024px] lg:py-[20px] w-[100%] bg-white mx-auto transition-[width] duration-500">
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />
        <StyledHeading className="lg:!text-[230%]">事業所情報</StyledHeading>
        {data !== undefined && <ContactList {...data} />}
        {/* {contactUs !== undefined && <PostCommon {...contactUs.data} />} */}
        <PostCommon {...MOCK_CONTACT} />
      </Box>
    </React.Fragment>
  );
}
