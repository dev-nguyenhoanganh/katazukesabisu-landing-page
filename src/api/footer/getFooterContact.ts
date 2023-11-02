import { PostCommonProps } from '../../components/blog-post/type';
import { AbstractResponse, get } from '../util';

export interface GetFooterContactResponse extends AbstractResponse {
  data: PostCommonProps;
}

export const getFooterContact = async () => {
  const response = await get<GetFooterContactResponse>('/public/footer_contact');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
