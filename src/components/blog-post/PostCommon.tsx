import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';

import { HeaderContent, ImageContent, ListContent, ParagraphContent, PostCommonProps } from './type';
import { fDateTime } from '../../utils/formatTime';

import './style.css';
import { StyledHeading, StyledPrimaryBtn } from '../../styles/Common';

const StyledContainer = styled('div')(({ theme }) => ({
  '&.post-container.--with-img': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    gap: '32px',

    '& img.cover-image': {
      margin: 'auto',
      width: '400px',
      height: '240px',
      objectFit: 'cover',
      backgroundPosition: 'center center',
      borderRadius: '16px',
    },

    'div:first-of-type': {
      width: '60%',
    },
  },

  '&.post-container.with-background': {
    position: 'relative',

    '& > div': {
      zIndex: 1,
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% + 32px)',
      height: 'calc(100% + 44px)',
      left: '-16px',
      top: '-20px',
      backgroundColor: '#fff7da',
      zIndex: 0,
    },
  },

  [theme.breakpoints.up('lg')]: {
    '&.post-container.with-background': {
      '&::before': {
        width: 'calc(100% + 120px)',
        left: '-60px',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.post-container.--with-img': {
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      gap: '16px',

      '& > div': {
        width: '100%',

        '& img.cover-image': {
          width: '100%',
          height: '200px',
        },
      },

      'div:first-of-type': {
        width: '100%',
      },
    },
  },
}));

const PostCommon = ({
  title,
  createDate,
  content,
  id,
  imgClassName,
  button,
  style,
  isDisplay = true,
}: PostCommonProps): JSX.Element => {
  const [image, setImage] = useState<ImageContent>();
  const [isImgOnly, setIsImgOnly] = useState(false);

  const renderListItem = (listData: ListContent) => {
    const { style, items } = listData;
    let className = '';
    switch (style) {
      case 'ordered':
        className = 'list-decimal p-[5px]';
        break;
      case 'asterisk':
        className = 'list-asterisk p-[5px]';
        break;
      case 'unordered':
      default:
        className = 'list-disc p-[5px]';
    }

    return (
      <ul className="pl-[2em]">
        {items.map((item, index) => (
          <li className={className} key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    );
  };

  const renderHeaderItem = (data: HeaderContent): JSX.Element => {
    let className = '';

    if (data.withBackground) {
      className += 'with-background';
    }

    if (title) {
      className += ' !pt-0';
    }

    switch (data.level) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      default:
        return <h4 className={className}>{data.text}</h4>;
    }
  };

  const containerClass = useMemo(() => {
    const image = content?.find((item) => item.type === 'image');

    if (!image) {
      return `post-container ${style}`;
    }

    if (content?.every((item) => item.type === 'image')) {
      setIsImgOnly(true);
      setImage(image.data as ImageContent);
      return;
    }

    setImage(image.data as ImageContent);
    return `post-container --with-img ${style}`;
  }, [content, style]);

  if (isDisplay === false) {
    return <></>;
  }

  return (
    <React.Fragment>
      {title && (
        <StyledHeading className="heading --with-background" id={id}>
          <span>{title}</span>
        </StyledHeading>
      )}
      <StyledContainer className={containerClass}>
        {!isImgOnly && (
          <div>
            {content?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.type === 'list' && renderListItem(item.data as ListContent)}
                  {item.type === 'paragraph' && (
                    <p dangerouslySetInnerHTML={{ __html: (item.data as ParagraphContent).text }} />
                  )}
                  {item.type === 'header' && renderHeaderItem(item.data as HeaderContent)}
                  {item.type === 'button' && (item.data as JSX.Element)}
                </React.Fragment>
              );
            })}
            {button &&
              button.map((btn, index) => (
                <React.Fragment key={index}>
                  <StyledPrimaryBtn className="--red w-[100%] md:w-[300px] mx-auto lg:m-0 !mt-[16px]" to={btn.location}>
                    {btn.innerText}
                  </StyledPrimaryBtn>
                </React.Fragment>
              ))}
          </div>
        )}

        {image && (
          <div className={imgClassName}>
            <img className="cover-image" src={image.file.url} alt={image.alt || ''} />
          </div>
        )}
      </StyledContainer>
      {createDate && (
        <p className="text-right mt-[16px] lg:mt-[40px]">{fDateTime(new Date(createDate), 'yyyy年MM月dd日 HH:mm')}</p>
      )}
    </React.Fragment>
  );
};

export default PostCommon;
