import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MainrticlesWapper({ children }: Props) {
  return (
    <div id="mainArticles">
      <div id="mainArticles_outer">
        <div id="mainArticles_body" className="mainArticles">
          {children}
        </div>
      </div>
    </div>
  );
}
