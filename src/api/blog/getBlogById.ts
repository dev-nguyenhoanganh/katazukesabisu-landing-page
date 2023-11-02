import { BlogDetailData } from '../../pages/BlogDetail';
import { ListBlog } from '../../pages/ListBlog';
import { AbstractResponse, get } from '../util';

export interface GetBlogByIdResponse extends AbstractResponse {
  data: BlogDetailData;
}

export const getBlogById = async (blogId: string) => {
  const response = await get<GetBlogByIdResponse>(`/public/blog/${blogId}`);

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
