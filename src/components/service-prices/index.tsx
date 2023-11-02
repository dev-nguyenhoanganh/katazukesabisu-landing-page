import React from 'react';
import { StyledHeading, StyledPrimaryBtn } from '../../styles/Common';
import { Content, ListContent, ServicePriceInfor } from '../../interface/Service';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { fCurrency } from '../../utils/formatNumber';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '32px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  },
}));

const StyledCardItem = styled(Box)(({ theme }) => ({
  backgroundColor: '#cef',
  borderRadius: '8px',
  overflow: 'hidden',

  h3: {
    textAlign: 'center',
    width: '100%',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: '180%',
    fontWeight: 'bold',
    padding: '8px 30px',
    marginBottom: 0,
    border: 0,
    backgroundColor: '#18a4ea',
    backgroundImage: 'repeating-linear-gradient(-45deg, #43b1e8, #43b1e8 7px, transparent 0, transparent 14px)',
    color: '#fff',
    borderRadius: '8px 8px 0 0',
  },

  img: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundPosition: 'center center',
  },

  'div.detail': {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
    paddingTop: '8px',

    '& > .label': {
      gridColumn: 'span 3 / span 3',
      padding: '4px 16px 8px',
      borderBottom: '4px solid rgb(85 167 217)',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    '& > .content': {
      gridColumn: 'span 4 / span 4',
      padding: '4px 16px 8px',
      borderBottom: '2px solid #999',
    },
  },

  '.description': {
    padding: '8px 16px 8px',
  },

  [theme.breakpoints.down('lg')]: {
    h3: {
      fontSize: '140%',
      padding: '4px 30px',
    },
  },
}));

interface ServicePriceProps extends ServicePriceInfor {
  style?: React.CSSProperties;
}

const ServicePrice = ({ heading, style, section, id, button }: ServicePriceProps) => {
  const renderImageItem = (item: Content) => {
    const data = item.data as ListContent;

    return (
      <StyledCardItem>
        <h3>{data.title}</h3>
        <img src={data.imageURL} alt={data.title} />
        <div className="detail">
          <p className="label">料金</p>
          <p className="content">{fCurrency(data.fee)}</p>
          <p className="label">お部屋の目安</p>
          <p className="content">{data.size}</p>
        </div>
        <p className="description">{data.description}</p>
      </StyledCardItem>
    );
  };

  return (
    <>
      <StyledHeading style={style} id={id} className="lg:!text-[230%]">
        {heading}
      </StyledHeading>

      {section.map((item, index) => (
        <React.Fragment key={index}>
          {item.isDisplay && (
            <StyledContainer>
              {item.content.map((content, idx) => (
                <React.Fragment key={idx}>{renderImageItem(content)}</React.Fragment>
              ))}
            </StyledContainer>
          )}
        </React.Fragment>
      ))}

      {button &&
        button.map((btn, index) => (
          <React.Fragment key={index}>
            <StyledPrimaryBtn className="--red w-[100%] md:w-[300px] mx-auto !mt-[16px]" to={btn.location}>
              {btn.innerText}
            </StyledPrimaryBtn>
          </React.Fragment>
        ))}
    </>
  );
};

export default ServicePrice;
