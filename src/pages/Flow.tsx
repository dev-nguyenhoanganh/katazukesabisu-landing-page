import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ImageGallery from '../components/blog-post/ImageGallery';
import PostCommon from '../components/blog-post/PostCommon';
import { Content } from '../components/blog-post/type';
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import { FlowCollection } from '../components/flow-section';

import { FlowData, GetFlowPageResponse, getFlowPage } from '../api/flow/getFlowPage';
import { HelmetProps } from '../api/util';
import { useAppDispatch } from '../store/hooks';
import { openSnackbar } from '../store/ui';
import { StyledHeading, StyledRoot } from '../styles/Common';

import svg from '../images/line-svg-icon.svg';
import message from '../lang/en.json';
import * as MOCK_DATA from '../_mock/FlowPage';
import { contactUs as MOCK_CONTACT } from '../_mock/common-block';

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: 'ご利用の流れ', href: '' },
];

const buttonContent: Content[] = [
  {
    type: 'button',
    data: (
      <Link className="line-btn !pl-[10px]" to={'#'} target="_blank">
        <img className="!h-[32px] !w-[32px]" src={svg} alt="友だち追加" /> 友だち追加
      </Link>
    ),
  },
];

export default function FlowPage(): JSX.Element {
  const [seoHelmet, setSeoHelmet] = useState<HelmetProps[]>(MOCK_DATA.seoHelmet);
  const [data, setData] = useState<FlowData>(MOCK_DATA);
  const [heading, setHeading] = useState('ご利用の流れ');
  const { collection, paymentMethod, guide } = data;

  return (
    <React.Fragment>
      <Helmet>
        {seoHelmet?.map((item, index) => <meta key={index} property={item.property} content={item.content} />)}
      </Helmet>
      <StyledRoot>
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />
        <StyledHeading className="lg:!text-[230%]">{heading}</StyledHeading>

        {/* {summary && <SummarySection content={summary} />} */}
        {collection && <FlowCollection content={data.collection} />}
        {paymentMethod && <ImageGallery {...data.paymentMethod} isLogo={true} />}
        {guide && (
          <PostCommon
            {...guide}
            content={[...guide.content, ...buttonContent]}
            imgClassName="[&>img]:!w-[300px] [&>img]:!object-contain"
          />
        )}

        {/* <div className="contact-communication">
          <PostCommon {...lineTemplate} />
        </div> */}
        {/* {listQA && <ListQA content={data.listQA} />} */}
        {/* {contactUs && <PostCommon {...contactUs.data} />} */}
        <PostCommon {...MOCK_CONTACT} />
      </StyledRoot>
    </React.Fragment>
  );
}
