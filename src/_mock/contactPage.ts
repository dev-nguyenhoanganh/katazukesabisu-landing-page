import { PostCommonProps } from '../components/blog-post/type';
import ImgContact from '../images/banner2.png';
import ImgQRCode from '../images/167375512749501.png';
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
    content: 'https://katazukesabisu.com/contact',
  },
  {
    property: 'og:title',
    content: 'お問い合わせ｜おたすけクリーン｜不用品回収・遺品整理｜関西エリア',
  },
  {
    property: 'og:site_name',
    content: 'おたすけクリーン',
  },
  {
    property: 'og:description',
    content:
      '関西エリアで不用品回収・粗大ゴミ・遺品整理・ゴミ屋敷・お引越しでのゴミ回収でお困りの方はおたすけクリーンまで、お気軽にご相談ください。出張費・お見積り・基本料金無料！事前分別も不要。LINEでのご相談も承っております。',
  },
];

export interface ContactPage {
  heading: string;
  section: Section[];
}

export interface Section {
  style: 'collection' | 'normal' | 'with-background' | 'list-service' | 'image-gallery' | 'image-gallery-caption';
  title: string;
  isDisplay: boolean;
  content: Content[];
}

export type Content = {
  type: 'image' | 'list' | 'paragraph' | 'header';
  data: ImageContent | ListContent | ParagraphContent | HeaderContent;
};

export type ImageContent = {
  file: {
    url: string;
  };
  caption: string;
  style?: string;
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

const contactInfo: ContactInfo = {
  title: 'お問い合わせはこちら',
  createDate: '',
  list: {
    style: 'unordered',
    items: [],
  },
  block: [
    {
      type: 'image',
      data: {
        file: {
          url: ImgContact,
        },
        caption: '',
        style: 'full-width',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'お急ぎの方は、この番号までお電話・LINE・メッセージにてご連絡いただけます！',
      },
    },
    {
      type: 'image',
      data: {
        file: {
          url: ImgQRCode,
        },
        caption: '',
        style: 'QR-code',
      },
    },
  ],
};

const form = {
  inquiryItem: {
    label: 'お問い合わせ項目',
    type: 'radio',
    required: false,
    options: [
      { value: '001', label: '無料お見積り依頼' },
      { value: '002', label: '無料相談' },
      { value: '003', label: 'お申し込み' },
      { value: '004', label: 'その他ご質問' },
    ],
  },
  requestContent: {
    label: '依頼内容',
    type: 'checkbox',
    required: false,
    options: [
      { value: '001', label: '粗大ゴミ' },
      { value: '002', label: '回収引っ越し' },
      { value: '003', label: 'ハウスクリーニング' },
      { value: '004', label: '遺品整理' },
      { value: '005', label: 'ゴミ屋敷' },
    ],
  },
  name: {
    label: 'お名前',
    required: true,
    type: 'text',
  },
  furigana: {
    label: 'ふりがな',
    required: false,
    type: 'text',
  },
  emailAddress: {
    label: 'メールアドレス',
    required: true,
    type: 'email',
  },
  address: {
    label: 'ご住所',
    required: false,
    type: 'text',
  },
  telephoneNumber: {
    label: '電話番号',
    required: true,
    type: 'text',
  },
  preferredContact: {
    label: 'ご希望の連絡方法',
    required: false,
    type: 'checkbox',
    options: [
      { value: '001', label: 'メール' },
      { value: '002', label: '電話' },
      { value: '', label: 'LINEの場合は上記QRコードまたはバナーよりご連絡ください。', ignoreInput: true },
    ],
  },
  contentOfInquiry: {
    label: 'ご希望の連絡方法',
    required: false,
    type: 'text-area',
  },
};

const formNoteInfo: PostCommonProps = {
  title: 'フォームの注意事項',
  createDate: '2023-08-15 00:53',
  content: [
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'メールアドレスは半角英数字で入力し、送信前に誤りがないことをご確認ください。',
          '半角カナ入力は文字化けの原因となりますのでご注意ください。',
          '全角のダッシュ「―」波形「～」は文字化けの原因となりますのでご注意ください。',
          'ご記入いただいたアドレス宛に記入内容が自動返信されます。もしこちらが届かなかった場合はメールアドレスが間違っている可能性があるため、お電話にてお問い合わせください。',
        ],
      },
    },
  ],
};

const privacyPolicy: PostCommonProps = {
  title: 'フォームの注意事項',
  createDate: '2023-08-26 12:45',
  content: [
    {
      type: 'paragraph',
      data: {
        text: '当サイトは、保護方針を定め、その履行に努めてまいります。',
      },
    },
    {
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          '個人情報を集めるときには、お客様等に対し、利用する目的を明確にし、その目的以外にはその情報は使用いたしません。',
          '個人情報は漏えいを防止するため、安全に管理いたします。',
          '個人情報を利用する際は、利用目的の範囲内で適切に行い、法令で認められている場合を除いて、ご本人の同意を取らないで第三者に提供するようなことはいたしません。',
          '個人情報に関して本人から情報の開示、訂正、削除、利用停止等を求められたとき、速やかに対応いたします。また、個人情報を正確かつ最新の状態に保つよう努めます。',
          '当サイトは、Googleのアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスはトラフィックデータ収集のためCookieを使用し、データは匿名で収集されています。したがって個人を特定しておりません。その機能はCookieを無効にすると収集を拒否できます。お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは<a href="https://www.google.com/analytics/terms/jp.html" rel="noopener" target="_blank">Google アナリティクス利用規約</a>からご覧ください。',
        ],
      },
    },
  ],
};

const comunicationMethod: PostCommonProps = {
  title: '',
  createDate: '2023-08-26 12:45',
  content: [
    {
      type: 'header',
      data: {
        text: 'LINEでのご依頼・お見積り',
        withBackground: true,
        level: 4,
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'こちらのQRコードを読み取るか、お友達登録ボタンをクリックして弊社公式LINEよりご連絡ください。',
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

export { contactInfo, form, formNoteInfo, privacyPolicy, comunicationMethod };
