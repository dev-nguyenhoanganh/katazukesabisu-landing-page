export interface Section {
  style:
    | 'collection'
    | 'normal'
    | 'with-background'
    | 'list-service'
    | 'image-gallery'
    | 'image-gallery-caption'
    | 'list-sub';
  title: string;
  isDisplay: boolean;
  content: Content[];
}

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
  size?: number;
  description?: string;
  listContent?: SubContent[];
};

export type SubContent = {
  title: string;
  description1: string;
  description2: string;
};

export type ButtonContent = {
  style: 'red' | 'blue';
  name: string;
};

type ParagraphContent = {
  text: string;
};

type HeaderContent = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export type Content = {
  type: 'image' | 'list' | 'paragraph' | 'header' | 'button';
  data: ImageContent | ListContent | ParagraphContent | HeaderContent | ButtonContent;
};

interface HomePage {
  heading: string;
  section: Section[];
}

export const dataHomePage: HomePage = {
  heading: '不用品・粗大ゴミの回収なら片付けサービス',
  section: [
    {
      style: 'list-sub',
      title: 'Title1',
      isDisplay: true,
      content: [
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: 'キャンペーン実施中！',
            subTitle: 'お得に不用品回収・買取をしませんか？',
            listContent: [
              {
                title: 'CAMPAIGN 01',
                description1: '見積り時に「ホームページを見た」と お伝えいただければ',
                description2: '最大10,000円',
              },
              {
                title: 'CAMPAIGN 02',
                description1: 'おたすけクリーンをご利用いただいた人の紹介なら',
                description2: '3,000円OFF',
              },
            ],
          },
        },
      ],
    },
  ],
};

export const dataBlog = {};
