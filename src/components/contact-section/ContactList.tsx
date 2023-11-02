import React from 'react';
import { ContactListType, PostCommonProps } from '../blog-post/type';
import { StyledHeading } from '../../styles/Common';

const ContactList = ({ title, content }: PostCommonProps) => {
  return (
    <React.Fragment>
      {title && (
        <StyledHeading className="--with-background">
          <span>{title}</span>
        </StyledHeading>
      )}

      <div className="contact-list full-width">
        <div className="table">
          {content.map(
            (item, index) =>
              item.type === 'contact-list' && (
                <React.Fragment key={index}>
                  <div className="flex">
                    <p className="label">{(item.data as ContactListType).label}</p>
                    <p className="value" dangerouslySetInnerHTML={{ __html: (item.data as ContactListType).value }} />
                  </div>
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactList;
