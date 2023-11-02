import image5 from './../images/161060655013302.png';
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
  description?: string;
  listContent?: SubContent[];
  updateDatetime?: string;
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

interface BlogsPage {
  heading: string;
  section: Section[];
}

export const blogsPage: BlogsPage = {
  heading: 'おたすけクリーンのホームページをオープンいたしました。',
  section: [
    {
      title: '123',
      isDisplay: true,
      style: 'list-service',
      content: [
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '',
            description:
              'この度、おたすけクリーンのホームページをオープンいたしました。おたすけクリーンは不用品回収・粗大ゴミ・遺品整理・ゴミ屋敷・お引越しでのゴミ回収など、お客様のお困りごとに全力で対応させていただいております。関東エリア・東海エリアで不用品回収・粗大ゴミの回収、遺品整理などでお困りの方はご相談ください。今後ともよろしくお願いいたします。',
            imageURL: image5,
            updateDatetime: '',
          },
        },
      ],
    },
  ],
};
