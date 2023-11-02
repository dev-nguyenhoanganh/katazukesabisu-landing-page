import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionContent } from '../../interface/FlowType';

import './style.css';
import { StyledHeading, StyledPrimaryBtn } from '../../styles/Common';

interface FlowCollectionProps {
  content: CollectionContent;
}

export default function FlowCollection({ content }: FlowCollectionProps): JSX.Element {
  return (
    <React.Fragment>
      <StyledHeading className="--with-background" id={content.id}>
        <span>{content.title}</span>
      </StyledHeading>
      <div className="flow-collection">
        {content.content.map((item, index) => (
          <React.Fragment key={index}>
            <div className="item">
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
              {item.button && (
                <div className="button-container">
                  {item.button.map((btn, idx) => (
                    <StyledPrimaryBtn className="--red w-[100%]" to={btn.location} key={idx}>
                      {btn.innerText}
                    </StyledPrimaryBtn>
                  ))}
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
