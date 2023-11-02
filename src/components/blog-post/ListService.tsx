import React from 'react';

import './style.css';
import { StyledHeading } from '../../styles/Common';

export interface ServiceItem {
  image: string;
  title: string;
  content: string;
}

export interface ImageGalleryProps {
  title: string;
  content: ServiceItem[];
}

const ListService = ({ title, content }: ImageGalleryProps): JSX.Element => {
  return (
    <React.Fragment>
      {title && (
        <StyledHeading className="--with-background">
          <span>{title}</span>
        </StyledHeading>
      )}
      <section className="list-service">
        {content.map((item, idx) => (
          <div className="item" key={idx}>
            <img src={item.image} alt={item.title} />
            <div className="w-full">
              <h4 className="with-background !pt-0">{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default ListService;
