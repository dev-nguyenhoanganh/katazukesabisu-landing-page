import React, { Ref } from 'react';
import './style.css';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  inputRef?: Ref<HTMLInputElement>;
  checked?: boolean;
  name: string;
  disabled?: boolean;
  hasError?: boolean;
};

export function Checkbox({
  value,
  onChange,
  onBlur,
  inputRef,
  checked = false,
  disabled = false,
}: InputProps): JSX.Element {
  return (
    <div>
      <input
        type="checkbox"
        ref={inputRef}
        onChange={(e) => {
          e.stopPropagation();
          onChange(e.target.value);
        }}
        onBlur={onBlur}
        value={checked ? '' : value}
        checked={checked}
        disabled={disabled}
      />
    </div>
  );
}
