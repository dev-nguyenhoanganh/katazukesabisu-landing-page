import { PostCommonProps } from '../components/blog-post/type';
import ImgContactUs from '../images/banner3.png';

const contactUs: PostCommonProps = {
  title: 'お問い合わせはこちら',
  createDate: '',
  content: [
    {
      type: 'image',
      data: {
        caption: '',
        alt: '',
        file: {
          url: ImgContactUs,
        },
      },
    },
  ],
};

export { contactUs };
