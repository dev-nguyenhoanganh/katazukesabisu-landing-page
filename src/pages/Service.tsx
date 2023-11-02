import React, { useState, useEffect } from 'react';
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import { getServicePage } from '../api/service/getServicePage';
import { ServicePriceInfor } from '../interface/Service';

import { Helmet } from 'react-helmet';
import { HelmetProps } from '../api/util';
import { HomePageData, getHomePage } from '../api/home/getHomePageData';
import ImageGallery from '../components/blog-post/ImageGallery';
import PostCommon from '../components/blog-post/PostCommon';
import { StyledHeading, StyledRoot } from '../styles/Common';
import ServicePrice from '../components/service-prices';
import Loading from './Loading';
import { useAppDispatch } from '../store/hooks';
import { openSnackbar } from '../store/ui';
import message from '../lang/en.json';
import * as MOCK_DATA from '../_mock/HomePage';
import { ratePlan, seoHelmet as MOCK_SEO } from '../_mock/servicePage';

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: 'お問い合わせ', href: '' },
];

export default function Service(): JSX.Element {
  const dispatch = useAppDispatch();
  const [seoHelmet, setSeoHelmet] = useState<HelmetProps[]>(MOCK_SEO);
  const [data, setData] = useState<HomePageData>(MOCK_DATA);
  const [dataServicePrice, setDataServicePrice] = useState<ServicePriceInfor>();
  const [dataRatePlan, setDataRatePlan] = useState<ServicePriceInfor>(ratePlan);
  const [loading, setLoading] = useState(true);

  const getDataHomePage = async () => {
    try {
      setLoading(true);
      const { data } = await getHomePage();
      setData(data.homePage);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  const getService = async () => {
    try {
      const responseServicePrice = await getServicePage('/public/service_price_infor');
      const responseRatePlan = await getServicePage('/public/rate_plan');
      if (responseServicePrice === undefined || responseRatePlan === undefined) {
        return;
      }
      setDataServicePrice(responseServicePrice.data);
      setDataRatePlan(responseRatePlan.data);
      setSeoHelmet(responseServicePrice?.seoHelmet || []);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    }
  };

  // useEffect(() => {
  //   getService();
  //   getDataHomePage();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Helmet>
        {seoHelmet?.map((item, index) => <meta key={index} property={item.property} content={item.content} />)}
      </Helmet>

      <StyledRoot>
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />
        <StyledHeading className="lg:!text-[230%]">{dataServicePrice?.heading || 'サービス・料金案内'}</StyledHeading>
        {data && <ImageGallery {...data.serviceGuide} button={undefined} />}
        {dataRatePlan && <ServicePrice {...dataRatePlan} style={{ marginTop: '16px' }} />}
        {data && (
          <>
            <PostCommon {...data.serviceIntro} />
            <ImageGallery {...data.availableArea} />
          </>
        )}
      </StyledRoot>
    </>
  );
}
