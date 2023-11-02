import { PostCommonProps } from '../components/blog-post/type';

export const footerContact: PostCommonProps = {
  title: '事業所概要',
  createDate: '',
  content: [
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
        label: '受付時間',
        value: '24時間／年中無休',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '対応エリア',
        value: '愛知・岐阜・三重の周辺',
      },
    },
    {
      type: 'contact-list',
      data: {
        label: '所在地',
        value: '愛知県春日井市中央通2-78',
      },
    },
  ],
};
