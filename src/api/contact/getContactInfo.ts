import { PostCommonProps } from '../../components/blog-post/type';
import { AbstractResponse, get } from '../util';

export type Content = {
  type: 'image' | 'list' | 'paragraph' | 'header';
  data: ImageContent | ListContent | ParagraphContent | HeaderContent;
};

export type ImageContent = {
  file: {
    url: string;
  };
  caption: string;
};

type ListContent = {
  style: 'unordered' | 'ordered';
  items: string[];
};

type ParagraphContent = {
  text: string;
};

type HeaderContent = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
};

interface ContactInfo {
  title: string;
  list: ListContent;
  createDate: string;
  block: Content[];
}

export interface DataContactInfo {
  contactInfo: ContactInfo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  formNoteInfo: PostCommonProps;
  privacyPolicy: PostCommonProps;
  comunicationMethod: PostCommonProps;
}

export interface GetContactInfoResponse extends AbstractResponse {
  data: DataContactInfo;
}

export const getContactInfo = async () => {
  const response = await get<GetContactInfoResponse>('/public/mst_info');

  if (response.statusCode !== 200) {
    throw response;
  }

  return response;
};
