import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MainTopicWapper({ children }: Props) {
  return (
    <div id="mainTopics">
      <div id="mainTopics_outer">
        <div id="mainTopics_body" className="mainTopics">
          {children}
        </div>
      </div>
    </div>
  );
}
