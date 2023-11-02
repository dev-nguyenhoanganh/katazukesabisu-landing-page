import { ListQAContent, SummaryContent } from '../interface/FlowType';
import visaImg from '../images/Visa Payment Card.svg';
import amexImg from '../images/amex-card-logo-svg-vector.svg';
import masterCardImg from '../images/MasterCard_Logo.svg';
import jcbImg from '../images/JCB_logo.svg';
import ImgQRCode from '../images/167375512749501.png';
import imageSEO from '../images/161067216639801.png';

import { PostCommonProps } from '../components/blog-post/type';

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
    content: 'https://katazukesabisu.com/flow',
  },
  {
    property: 'og:title',
    content: 'ご利用の流れ｜おたすけクリーン｜不用品回収・遺品整理｜関西エリア',
  },
  {
    property: 'og:site_name',
    content: 'おたすけクリーン',
  },
  {
    property: 'og:description',
    content:
      '関西エリアにて不用品回収を行う、おたすけクリーンのご利用の流れはこちら。回収までの流れやよくある質問等をご案内しています。また、LINEでのご相談も承っております。お見積り無料ですので、まずはお気軽にご相談ください。',
  },
];

export const summary: SummaryContent = {
  title: 'ご利用の流れ',
  content: [
    { innerText: '回収までの流れ', location: '#f01' },
    { innerText: '取り扱いクレジットカード', location: '#f02' },
    { innerText: 'LINEでのご相談方法', location: '#f03' },
    { innerText: 'よくあるご質問', location: '#f04' },
  ],
};

const collection = {
  title: '回収までの流れ',
  id: 'f01',
  content: [
    {
      title: '1.お問い合わせ',
      content:
        'まずはお電話（<a class="tel-link" href="tel:07022134567">070-2213-4567</a>）、<a href="https://line.me/ti/p/AQDDUa5nTq" rel="noopener" target="_blank">LINE</a>などにてお問い合わせいただきます。',
      button: [
        { innerText: 'お問い合わせフォーム', location: '/contact' },
        { innerText: 'LINEでのご相談方法', location: '#f03' },
      ],
    },
    {
      title: '2.お見積り',
      content: ' 現場までお伺いいたしますので、ご都合の良い日時を教えてください！',
    },
    {
      title: '3.作業開始',
      content:
        'お提示のお見積りで問題がなければ、ご都合の良い日時を取り決め、作業を開始いたします。<br> 即日も対応可能です！',
    },
    {
      title: '4.作業終了、お支払い',
      content: '現金もクレジットカードも振り込みも対応いたします！',
    },
  ],
};

const paymentMethod = {
  title: '取り扱いクレジットカード',
  id: 'f02',
  content: [
    { src: visaImg, alt: 'クレジットカード支払_VISA', caption: '' },
    { src: amexImg, alt: 'クレジットカード支払_アメックス', caption: '' },
    { src: masterCardImg, alt: 'クレジットカード支払_マスター', caption: '' },
    { src: jcbImg, alt: 'クレジットカード支払_JCB', caption: '' },
  ],
};

const guide: PostCommonProps = {
  title: 'LINEでのご相談・お見積り方法',
  id: 'f03',
  createDate: '',
  content: [
    {
      type: 'paragraph',
      data: {
        text: 'LINEでもご相談とお見積りのご依頼を簡単にできますので、このQRコードで「友だち追加」をして、ご連絡ください！',
      },
    },
    {
      type: 'image',
      data: {
        caption: '',
        alt: 'LINEお見積り',
        file: {
          url: ImgQRCode,
        },
      },
    },
  ],
};

const listQA: ListQAContent = {
  title: 'よくあるご質問',
  id: 'f04',
  content: [
    {
      question: '見積りだけでも来てもらえますか？',
      answer:
        'お電話でもおおよその料金を出すこともできますし、詳しいご要望をお伺いし正確な料金をご提示することもできます。',
      button: [{ innerText: 'お問い合わせフォーム', location: '/contact' }],
    },
    {
      question: '電話した当日に作業してもらえますか？',
      answer:
        '可能です！ご予約の状況にもよりますが、早急に近くの現場スタッフに確認をとり迅速に対応させていただきます！',
    },
    {
      question: '梱包、分別は必要ですか？',
      answer: '必要ありません！そのままの状態で問題ございませんので担当スタッフにお任せください！',
    },
    {
      question: '電話し回収出来ないものはありますか？',
      answer: '基本的にございませんので、何でもご相談ください！',
    },
  ],
};

export const lineTemplate: PostCommonProps = {
  title: '',
  id: '',
  createDate: '',
  content: [
    {
      type: 'header',
      data: {
        text: 'LINEにて下記内容をお伝えください',
        withBackground: true,
        level: 4,
      },
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: ['ご相談内容（見積り依頼）、お名前、住所、ご連絡先電話番号', '処分を希望する品物、またはそのお写真'],
      },
    },
    {
      type: 'list',
      data: {
        style: 'asterisk',
        items: [
          '内容を確認後、その他に関しましては後程スタッフより詳細を伺うこともございます。',
          '写真添付は何枚でも可能です。',
        ],
      },
    },
    {
      type: 'image',
      data: {
        caption: '',
        alt: '',
        file: {
          url: ImgQRCode,
        },
      },
    },
  ],
};

const heading = 'ご利用の流れ';

export { collection, paymentMethod, guide, listQA, heading };
