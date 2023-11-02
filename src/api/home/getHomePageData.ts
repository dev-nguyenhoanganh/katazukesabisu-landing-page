import { ImageGalleryProps } from '../../components/blog-post/ImageGallery';
import { ImageGalleryProps as ImageGallery } from '../../components/blog-post/ListService';
import { PostCommonProps } from '../../components/blog-post/type';
import { CouponProps } from '../../components/coupons';
import { AbstractResponse, get } from '../util';

export type HomePageData = {
  introduction: PostCommonProps;
  serviceIntro: PostCommonProps;
  serviceList: ImageGallery;
  serviceGuide: ImageGalleryProps;
  availableArea: ImageGalleryProps;
  coupons: CouponProps;
};

export interface GetDataHomepageResponse extends AbstractResponse {
  data: {
    heading: string;
    homePage: HomePageData;
  };
}

export const getHomePage = async () => {
  const response = await get<GetDataHomepageResponse>('/public/home_page');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
