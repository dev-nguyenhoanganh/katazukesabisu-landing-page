import { ImageGalleryProps } from '../../components/blog-post/ImageGallery';
import { PostCommonProps } from '../../components/blog-post/type';
import { CollectionContent, ListQAContent, SummaryContent } from '../../interface/FlowType';
import { AbstractResponse, get } from '../util';

export interface FlowData {
  summary: SummaryContent;
  collection: CollectionContent;
  paymentMethod: ImageGalleryProps;
  guide: PostCommonProps;
  lineTemplate: PostCommonProps;
  listQA: ListQAContent;
  heading: string;
}

export interface GetFlowPageResponse extends AbstractResponse {
  data: FlowData;
}

export const getFlowPage = async () => {
  const response = await get<GetFlowPageResponse>('/public/flow_page');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
