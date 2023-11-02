import { PostCommonProps } from '../../components/blog-post/type';
import { AbstractResponse, get } from '../util';

export interface GetDataAboutUsReponse extends AbstractResponse {
  data: {
    heading: string;
    aboutUs: PostCommonProps;
  };
}

export const getAboutUs = async () => {
  const response = await get<GetDataAboutUsReponse>('/public/about_us');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
