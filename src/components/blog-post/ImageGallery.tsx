import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';

import './style.css';
import { Location } from '../../interface/FlowType';
import { StyledHeading, StyledPrimaryBtn } from '../../styles/Common';

export interface ImageItem {
  src: string;
  alt: string;
  caption: string;
  subTitle?: string;
}

export interface ImageGalleryProps {
  id?: string;
  title: string;
  style?: string;
  isLogo?: boolean;
  button?: Location[];
  content: ImageItem[];
}

const StyledImageContainer = styled('div')(({ theme }) => ({
  '&.image-gallery.width-background': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '16px',
    width: '100%',

    '& > figure': {
      backgroundColor: '#cef',
      padding: '16px',
      display: 'flex',
      gap: '8px',
      flexDirection: 'column',
      borderRadius: '16px',
    },
  },

  '&.image-gallery.logo': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',

    '& img': {
      width: '94px',
      height: 'auto',
      borderRadius: 'unset',
    },
  },

  '& img': {
    height: '240px',
    borderRadius: '8px',
    objectFit: 'cover',
    backgroundPosition: 'center center',
  },

  '&.image-gallery.img-map': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      height: '450px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '&.image-gallery.width-background': {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',

      '& img': {
        height: '200px',
      },
    },
  },
}));
const StyledButtonContainer = styled('div')(() => ({
  width: '100%',
  marginTop: '16px',
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const ImageGallery = ({ title, content, id, isLogo = false, style, button }: ImageGalleryProps): JSX.Element => {
  const containerClass = useMemo(() => {
    if (isLogo) {
      return 'image-gallery logo';
    }

    return `image-gallery ${style}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {title && (
        <StyledHeading className="--with-background" id={id}>
          <span>{title}</span>
        </StyledHeading>
      )}
      <StyledImageContainer className={containerClass}>
        {content.map((img, idx) => (
          <figure key={idx}>
            <img src={img.src} alt={img.alt} />
            {img.subTitle && <h4>{img.subTitle}</h4>}
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </StyledImageContainer>
      {button && button.length && (
        <StyledButtonContainer>
          {button.map((btn, index) => (
            <React.Fragment key={index}>
              <StyledPrimaryBtn className="--red w-[100%] md:w-fit !mt-0 !px-[36px] flex-grow-0" to={btn.location}>
                {btn.innerText}
              </StyledPrimaryBtn>
            </React.Fragment>
          ))}
        </StyledButtonContainer>
      )}
    </React.Fragment>
  );
};

export default ImageGallery;
