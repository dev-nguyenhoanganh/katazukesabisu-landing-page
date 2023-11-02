import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MainContentWapper({ children }: Props) {
  return (
    <div id="mainContents">
      <div id="mainContents_outer">
        <div id="mainContents_body" className="mainContents">
          {children}
        </div>
      </div>
    </div>
  );
}
