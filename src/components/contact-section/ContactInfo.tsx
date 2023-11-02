import React from 'react';
import { fDateTime } from '../../utils/formatTime';
import { Content } from '../../_mock/contactPage';
import './style.css';
import { StyledHeading } from '../../styles/Common';
import { styled } from '@mui/material/styles';

interface ContactInfoProps {
  title: string;
  list: {
    style: 'unordered' | 'ordered';
    items: string[];
  };
  createDate: string;
  block: Content[];
}

type ParagraphContent = {
  text: string;
};

export type ImageContent = {
  file: {
    url: string;
  };
  caption: string;
  style?: string;
};

const StyledContainer = styled('div')(({ theme }) => ({
  border: '3px solid #169bca',
  padding: '20px',
  marginTop: '10px',
  backgroundColor: '#fff8ed',
  textAlign: 'center',
  display: 'grid',
  gridTemplateColumns: '0.2fr 1fr',
  alignItems: 'center',
  gap: '8px',

  '& img.QR-code': {
    gridRow: '1 / span 2',
    height: 'auto',
    borderRadius: '8px',
  },
  '& img.full-width': {
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',

    '& img.QR-code': {
      gridRow: 'unset',
      height: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  // sm
}));

const ContactInfo = ({ createDate, block, title }: ContactInfoProps) => {
  if (!title) {
    return null;
  }

  const renderBlockItems = () => {
    return block?.map((item, index) => {
      if (item.type === 'paragraph') {
        const { text } = item.data as ParagraphContent;
        return (
          <p className="whitespace-pre-wrap" key={index}>
            {text}
          </p>
        );
      }

      if (item.type === 'image') {
        const { file, caption, style } = item.data as ImageContent;
        return <img className={style} key={index} src={file.url} alt={caption} />;
      }

      return;
    });
  };

  return (
    <React.Fragment>
      <StyledHeading className="lg:!text-[230%]">{title}</StyledHeading>
      <StyledContainer>{renderBlockItems()}</StyledContainer>

      <p className="text-right mt-[16px] lg:mt-[40px]">
        {createDate ? fDateTime(new Date(createDate), 'yyyy年MM月dd日 HH:mm') : ''}
      </p>
    </React.Fragment>
  );
};

export default ContactInfo;
