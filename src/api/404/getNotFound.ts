import { AbstractResponse, get } from '../util';

interface ItemContent {
  type: string;
  data: { text: string };
}

export interface NotFoundData {
  title: string;
  createDate: string;
  content: ItemContent[];
}

export interface GetNotFounaDataResponse extends AbstractResponse {
  data: NotFoundData;
}

export const getNotFound = async () => {
  const response = await get<GetNotFounaDataResponse>('/public/404_not_found');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
