import React from 'react';

interface Props {
  error?: Error;
}

export default function ErrorMessage({ error }: Props): JSX.Element {
  return error ? <p>{error.message}</p> : <></>;
}
