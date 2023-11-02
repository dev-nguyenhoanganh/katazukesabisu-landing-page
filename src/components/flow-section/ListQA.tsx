import React from 'react';
import { ListQAContent } from '../../interface/FlowType';

import './style.css';
import { StyledHeading, StyledPrimaryBtn } from '../../styles/Common';

interface Props {
  content: ListQAContent;
}

export default function ListQA({ content }: Props): JSX.Element {
  return (
    <React.Fragment>
      <StyledHeading className="--with-background" id={content.id}>
        <span>{content.title}</span>
      </StyledHeading>
      <div className="list-qa">
        {content.content.map((item, index) => (
          <React.Fragment key={index}>
            <div>
              <div className="question">
                <p dangerouslySetInnerHTML={{ __html: item.question }} />
              </div>
              <div className="answer">
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
              {item.button && (
                <div className="button-container">
                  {item.button.map((btn, idx) => (
                    <StyledPrimaryBtn className="--red w-[100%] sm:w-[300px] !mt-0" to={btn.location} key={idx}>
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
