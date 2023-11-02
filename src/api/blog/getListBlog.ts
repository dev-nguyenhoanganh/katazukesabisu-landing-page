import { ListBlog } from '../../pages/ListBlog';
import { AbstractResponse, excludeInvalidValues, get } from '../util';

export interface GetListBlogRequest {
  currentPage: number;
  title?: string;
  sortItem?: string;
  sortOrder?: 'asc' | 'desc';
  limit?: number;
}

export interface GetListBlogResponse extends AbstractResponse {
  data: ListBlog;
  totalRecord: number;
  currentPage: number;
  totalPage: number;
}

export const getListBlog = async (args: GetListBlogRequest) => {
  const requestBody = new URLSearchParams(excludeInvalidValues(Object.entries(args))).toString();
  const response = await get<GetListBlogResponse>('/public/list_blog?' + requestBody);

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
