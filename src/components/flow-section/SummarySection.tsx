import React from 'react';
import { SummaryContent } from '../../interface/FlowType';

import './style.css';
import { StyledHeading } from '../../styles/Common';

interface SummarySectionProps {
  content: SummaryContent;
}

export default function SummarySection({ content }: SummarySectionProps): JSX.Element {
  return (
    <React.Fragment>
      {content.title && <StyledHeading className="lg:!text-[230%]">{content.title}</StyledHeading>}
      <ul className="flow-summary">
        {content.content.map((item, index) => (
          <li key={index}>
            <a href={item.location}>{item.innerText}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
