import { PostCommonProps } from '../../components/blog-post/type';
import { AbstractResponse, get } from '../util';

export interface GetCommonBlockResponse extends AbstractResponse {
  data: PostCommonProps;
}

export const getCommonBlock = async () => {
  const response = await get<GetCommonBlockResponse>('/public/common_block');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
