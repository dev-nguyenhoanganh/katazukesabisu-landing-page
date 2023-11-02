import { PostCommonProps } from '../components/blog-post/type';
import image from './../images/161037146399401.jpg';
import image3 from './../images/161060655013303.png';
import image4 from './../images/161060655013301.png';
import image5 from './../images/161060655013302.png';
import image_hompage_1 from './../images/homepage_1.jpg';
import image_hompage_2 from './../images/homepage_2.jpg';
import image_hompage_3 from './../images/homepage_3.jpg';
import image_hompage_4 from './../images/homepage_4.jpg';
import image_hompage_5 from './../images/homepage_5.jpg';
import image_hompage_6 from './../images/homepage_6.jpg';
import image_hompage_7 from './../images/homepage_7.jpg';

import { ImageGalleryProps } from '../components/blog-post/ImageGallery';
import { CouponProps } from '../components/coupons';

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
    content: 'https://katazukesabisu.com/',
  },
  {
    property: 'og:title',
    content: 'おたすけクリーン｜不用品回収・遺品整理｜関西エリア',
  },
  {
    property: 'og:site_name',
    content: 'おたすけクリーン',
  },
  {
    property: 'og:description',
    content:
      '関西エリアで不用品回収・粗大ゴミ・遺品整理・ゴミ屋敷・お引越しでのゴミ回収などでお困りの方は、おたすけクリーンまでご相談ください。出張費・お見積り・基本料金無料！立ち合いのみで事前の分別も不要です。全てお任せください！',
  },
];

const heading = '不用品・粗大ゴミの回収なら片付けサービス';

const introduction: PostCommonProps = {
  title: '不用品の回収は、全てお任せください！',
  createDate: '',
  content: [
    {
      type: 'image',
      data: {
        file: {
          url: image_hompage_1,
        },
        caption: '',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'かたづけサービスは不用品・粗大ゴミ・引っ越しでのゴミなどの回収に困っているお客様は、ご軽気にご連絡ください',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: '<strong>お見積りは無料です！</strong>',
      },
    },
  ],
};

const serviceIntro: PostCommonProps = {
  title: '追加料金は一切なし！',
  createDate: '',
  style: 'with-background',
  isDisplay: true,
  button: [{ innerText: '料金プランはこちら', location: '/service#price' }],
  content: [
    {
      type: 'image',
      data: {
        file: {
          url: image_hompage_2,
        },
        caption: '',
      },
    },
    {
      type: 'header',
      data: {
        text: '出張費・お見積り・基本料金は全て無料！',
        withBackground: true,
        level: 4,
      },
    },
    {
      type: 'paragraph',
      data: {
        text: '全てお任せください！お客様はお立ち合いだけです。',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'お見積りでご提示した金額は搬出作業費や掃除作業費なども全て含まれておりますので、追加料金は一切ありません。',
      },
    },
  ],
};

const serviceList = {
  title: 'おたすけクリーンのお約束',
  content: [
    {
      image: image3,
      title: '最短30分以内に到着！',
      content: 'お申し込みいただいてから最短で30分で作業を開始します。',
    },
    {
      image: image4,
      title: '24時間年中無休で対応可能！',
      content: '思い立った時にお申し込みください。24時間体制で即日対応可能です。',
    },
    {
      image: image5,
      title: 'コロナ対策を徹底しています！',
      content: '手洗い・検温・消毒・マスクの着用など、感染拡大防止策を徹底しております。',
    },
  ],
};

const serviceGuide: ImageGalleryProps = {
  title: 'サービス案内',
  style: 'width-background',
  button: [{ innerText: 'サービス・料金案内はこちら', location: '/service' }],
  content: [
    {
      src: image_hompage_3,
      subTitle: '粗大ゴミの回収',
      alt: 'クレジットカード支払_VISA',
      caption: '粗大ゴミの処理にお困りしませんか？',
    },
    {
      src: image_hompage_4,
      subTitle: '不用品の撤去',
      alt: 'クレジットカード支払_VISA',
      caption: '山積みのゴミにお困りしませんか？',
    },
    {
      src: image_hompage_5,
      subTitle: '引っ越しのお掃除',
      alt: 'クレジットカード支払_VISA',
      caption: 'お引越しのお客様はご安心いただけます！',
    },
    {
      src: image_hompage_6,
      subTitle: 'モノの買取',
      alt: 'クレジットカード支払_VISA',
      caption: '捨てそうな家電製品は高額で販売できるかもしれません！',
    },
  ],
};

const availableArea: ImageGalleryProps = {
  title: '対応エリア',
  style: 'img-map',
  content: [
    {
      src: image_hompage_7,
      alt: '大阪．兵庫．奈良エリア',
      caption: '',
    },
  ],
};

const coupons: CouponProps = {
  title: 'キャンペーン実施中！',
  isDisplay: false,
  content: {
    heading: {
      text: '出張費・お見積り・基本料金無料！',
      level: 4,
    },
    coupons: [
      {
        title: 'CAMPAIGN 01',
        description: '見積り時に「<strong>ホームページを見た</strong>」と <br/> お伝えいただければ',
        saleAmount: '最大<strong>10,000</strong>円OFF',
      },
      {
        title: 'CAMPAIGN 02',
        description: 'おたすけクリーンを <br/> ご利用いただいた人の紹介なら',
        saleAmount: '最大<strong>10,000</strong>円OFF',
      },
    ],
  },
};

export { introduction, serviceIntro, serviceList, serviceGuide, availableArea, coupons, heading };
