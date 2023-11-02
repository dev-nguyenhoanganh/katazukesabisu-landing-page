import { AbstractResponse, post } from '../util';

export const postCreateQA = async (args: Record<string, unknown>) => {
  const response = await post<AbstractResponse>(`/public/inquiry/create`, args);

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
