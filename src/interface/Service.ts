import { Location } from './FlowType';

export interface Section {
  style:
    | 'collection'
    | 'normal'
    | 'with-background'
    | 'list-service'
    | 'list-service-special'
    | 'image-gallery'
    | 'image-gallery-caption'
    | 'image-gallery-no-bg'
    | 'list-sub';
  title: string;
  isDisplay: boolean;
  displayStatus?: string;
  content: Content[];
}

export type Content = {
  type: 'list' | 'button' | 'image' | 'paragraph';
  data: ImageContent | ListContent | ButtonContent | ParagraphContent;
};

export type ButtonContent = {
  style: 'red' | 'blue';
  name: string;
};

export type ImageContent = {
  file: {
    url: string;
  };
  caption: string;
};

export type ListContent = {
  style: 'unordered' | 'ordered';
  subTitle?: string;
  imageURL?: string;
  title: string;
  fee?: number;
  size?: string;
  description?: string;
};

export interface ServicePriceInfor {
  heading: string;
  id?: string;
  section: Section[];
  button?: Location[];
}

type ParagraphContent = {
  text: string;
};
