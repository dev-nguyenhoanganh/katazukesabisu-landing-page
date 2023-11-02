import React, { HTMLInputTypeAttribute, Ref } from 'react';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  inputRef?: Ref<HTMLInputElement>;
  disabled?: boolean;
  require?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  readonly?: boolean;
  hasError?: boolean;
};

export function Input({
  value,
  onChange,
  inputRef,
  disabled = false,
  type = 'text',
  placeholder = '',
  readonly = false,
}: InputProps): JSX.Element {
  return (
    <input
      type={type}
      readOnly={readonly}
      ref={inputRef}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}
