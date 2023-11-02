import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ContentWrapper({ children }: Props) {
  return (
    <div id="contents" className="bg-[#EDF4F9]">
      <div id="contents_outer">
        <div id="contents_body" className="contents">
          {children}
        </div>
      </div>
    </div>
  );
}
