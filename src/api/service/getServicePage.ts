import { ServicePriceInfor } from '../../interface/Service';
import { AbstractResponse, get } from '../util';

export interface GetServicePageResponse extends AbstractResponse {
  data: ServicePriceInfor;
}

export const getServicePage = async (url: string) => {
  const response = await get<GetServicePageResponse>(url);

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
