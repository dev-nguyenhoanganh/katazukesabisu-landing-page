import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props): JSX.Element {
  return (
    <div id="wrap">
      <div id="wrap_outer">{children}</div>
    </div>
  );
}
