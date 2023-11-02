import image from './../images/161037146399401.jpg';
import imageSEO from './../images/161036975063802.jpg';
import { Location } from '../interface/FlowType';

interface Section {
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
  // listContent?: SubContent[];
};

interface ServicePriceInfor {
  heading: string;
  id?: string;
  section: Section[];
  button?: Location[];
}

type ParagraphContent = {
  text: string;
};

export const seoHelmet = [
  {
    property: 'og:image',
    content: 'https://res.cloudinary.com/dkgmisrng/image/upload/v1697387337/KATAZUKESABISU/homepage_1.jpg',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:url',
    content: 'https://katazukesabisu.com/service',
  },
  {
    property: 'og:title',
    content: 'サービス・料金案内｜かたづけサービス ｜不用品回収・遺品整理｜関西エリア',
  },
  {
    property: 'og:site_name',
    content: 'かたづけサービス',
  },
  {
    property: 'og:description',
    content: '愛知・岐阜・三重の不用品回収ならかたづけサービス',
  },
];

export const servicePriceInfor: ServicePriceInfor = {
  heading: 'サービス・料金案内',
  section: [
    {
      style: 'image-gallery',
      isDisplay: true,
      title: 'サービス案内',
      content: [
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '',
            imageURL: image,
            description: '不用品・粗大ゴミ回収',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '残置物撤去',
            imageURL: image,
            description: '残置物撤去',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: 'ゴミ屋敷清掃',
            imageURL: image,
            description: 'ゴミ屋敷清掃',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '遺品整理',
            imageURL: image,
            description: '遺品整理',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '引っ越し',
            imageURL: image,
            description: '引っ越し',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: 'ハウスクリーニング',
            imageURL: image,
            description: 'ハウスクリーニング',
          },
        },
      ],
    },
  ],
};

export const ratePlan: ServicePriceInfor = {
  heading: '料金プラン',
  id: '#price',
  button: [{ innerText: 'カード払いOK!', location: '/flow#f02' }],
  section: [
    {
      style: 'list-service-special',
      isDisplay: true,
      title: '',
      content: [
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: 'トラックパック',
            imageURL: image,
            fee: 9000,
            size: '1K',
            description: '一人暮らしの大掃除、家具の処分の場合は、こちらをご利用ください。',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '1tトラックパック',
            imageURL: image,
            fee: 15000,
            size: '1DK～',
            description: '一人暮らしの大掃除、大量のゴミの状態は、こちらをご利用ください。',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: '2tトラックパック',
            imageURL: image,
            fee: 20000,
            size: '2K～',
            description: '粗大家具や大量のゴミがある場合は、こちらをご利用ください。',
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            title: 'アルミバントラックパック',
            imageURL: image,
            fee: 90000,
            size: '3DK～',
            description: 'ゴミ屋敷の場合はこちらをご利用ください。',
          },
        },
      ],
    },
  ],
};
