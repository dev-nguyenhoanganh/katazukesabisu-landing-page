import { PostCommonProps } from '../components/blog-post/type';
import imageSEO from '../images/161067216639801.png';

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
    content: 'https://katazukesabisu.com/about',
  },
  {
    property: 'og:title',
    content: '事業所概要｜おたすけクリーン｜不用品回収・遺品整理｜関西エリア',
  },
  {
    property: 'og:site_name',
    content: 'おたすけクリーン',
  },
  {
    property: 'og:description',
    content:
      '関西エリアにて不用品回収を行う、おたすけクリーンの事業所概要はこちらをご覧ください。不用品回収・粗大ゴミ・遺品整理・ゴミ屋敷・お引越しでのゴミ回収など、お客様のお困りごとに全力で対応させていただいております。',
  },
];

const about: PostCommonProps = {
  title: '事業所情報',
  createDate: '',
  content: [
    {
      type: 'contact-list',
      data: {
        label: '企業名',
        value: 'MaiLinhGroup株式会社',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '所在地',
        value: '愛知県春日井市中央通2-78',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '事業所名',
        value: 'かたづけサービス',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '電話番号',
        value: '070-2213-4567',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '営業時間',
        value: '24時間',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '定休日',
        value: '年中無休',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '事業内容',
        value: '不用品・粗大ゴミの回収、引っ越しの掃除、遺品整理など',
      },
    },
  ],
};

export default {
  heading: '事業所情報',
  about,
};
