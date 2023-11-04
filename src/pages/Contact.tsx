import React, { useState, useEffect } from 'react';
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import ContactInfo from '../components/contact-section/ContactInfo';
import FormControl from '../components/contact-section/FormControl';
import { Content } from '../components/blog-post/type';
import svg from '../images/line-svg-icon.svg';
import { DataContactInfo, GetContactInfoResponse, getContactInfo } from '../api/contact/getContactInfo';
import { Helmet } from 'react-helmet';
import { HelmetProps } from '../api/util';
import { useAppDispatch } from '../store/hooks';
import { openSnackbar } from '../store/ui';
import message from '../lang/en.json';
import * as MOCK_DATA from '../_mock/contactPage';

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: 'お問い合わせ', href: '' },
];

const buttonContent: Content[] = [
  {
    type: 'button',
    data: (
      <Link className="line-btn !pl-[10px]" to={'#'} target="_blank">
        <img src={svg} alt="" /> 友だち追加
      </Link>
    ),
  },
  {
    type: 'button',
    data: (
      <Link className="line-btn red" to={'/flow#f03'}>
        LINEでのご相談方法はこちら
      </Link>
    ),
  },
];

export default function Contact(): JSX.Element {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<DataContactInfo>(MOCK_DATA);

  return (
    <React.Fragment>
      <Box className="p-[16px] lg:px-[60px] lg:w-[1024px] lg:py-[20px] w-[100%] bg-white mx-auto transition-[width] duration-500">
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />
        {data && (
          <>
            <ContactInfo {...data.contactInfo} />
            <FormControl {...data.form} />
            {/* <PostCommon {...data?.formNoteInfo} />
            <PostCommon {...data?.privacyPolicy} /> */}
            {/* <div className="contact-communication">
              {data.comunicationMethod !== undefined && (
                <PostCommon
                  createDate={data.comunicationMethod?.createDate}
                  title=""
                  content={[...data.comunicationMethod.content, ...buttonContent]}
                />
              )}
            </div> */}
          </>
        )}
      </Box>
    </React.Fragment>
  );
}
