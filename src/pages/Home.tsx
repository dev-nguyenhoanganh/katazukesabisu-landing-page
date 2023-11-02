import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

// Component
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import PostCommon from '../components/blog-post/PostCommon';
import ImageGallery from '../components/blog-post/ImageGallery';
import Coupons from '../components/coupons';
import Loading from './Loading';

// API
import { GetDataHomepageResponse, HomePageData, getHomePage } from '../api/home/getHomePageData';
import { HelmetProps } from '../api/util';

// Redux
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { openSnackbar } from '../store/ui';

// Resource
import { StyledHeading, StyledRoot } from '../styles/Common';
import message from '../lang/en.json';
import * as MOCK_DATA from '../_mock/HomePage';
import { contactUs as MOCK_CONTACT } from '../_mock/common-block';

const breadcrumbs: BreadcrumbItem[] = [{ name: 'ホーム', href: '' }];

export default function Home(): JSX.Element {
  const [data, setData] = useState<HomePageData>(MOCK_DATA);
  const [heading, setHeading] = useState('不用品・粗大ゴミの回収なら片付けサービス');
  const [seoHelmet, setSeoHelmet] = useState<HelmetProps[]>(MOCK_DATA.seoHelmet);
  const contactUs = useAppSelector((state) => state.contactUs);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const getDataHomePage = async () => {
    try {
      setLoading(true);
      const response = await getHomePage();
      if (response === undefined) {
        return;
      }
      const {
        data: { heading, homePage },
        seoHelmet,
      } = response as GetDataHomepageResponse;
      setData(homePage);
      setSeoHelmet(seoHelmet || []);
      setHeading(heading);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getDataHomePage();
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

      <StyledRoot>
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />

        <StyledHeading className="lg:!text-[230%]">{heading}</StyledHeading>

        {data && (
          <>
            <PostCommon {...data.introduction} />
            <PostCommon {...data.serviceIntro} />
            {/* <ListService {...data.serviceList} /> */}
            <ImageGallery {...data.serviceGuide} />
            <ImageGallery {...data.availableArea} />
            {/* {contactUs !== undefined && <PostCommon {...contactUs.data} />} */}
            <PostCommon {...MOCK_CONTACT} />
            {data.coupons?.isDisplay && <Coupons {...data.coupons} />}
          </>
        )}
      </StyledRoot>
    </React.Fragment>
  );
}
