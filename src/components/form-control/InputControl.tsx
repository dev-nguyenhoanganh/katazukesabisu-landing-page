import React, { HTMLInputTypeAttribute, useEffect } from 'react';
import { Control, Controller, FieldPath, FieldValues, useFormContext, get } from 'react-hook-form';

import { Input } from './Input';

type InputControlProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  className?: string;
  initValue?: string;
  disabled?: boolean;
  require?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  readonly?: boolean;
  onChangeFunc?: (value: string) => void;
};

export function InputControl<T extends FieldValues>({
  name,
  control,
  initValue = '',
  disabled = false,
  require = false,
  type = 'text',
  placeholder = '',
  readonly = false,
  onChangeFunc = () => {},
}: InputControlProps<T>): JSX.Element {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue(name as string, initValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initValue]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, value } }) => (
          <Input
            inputRef={ref}
            onChange={(value: string) => {
              setValue(name as string, value);
              onChangeFunc(value);
            }}
            value={value as string}
            disabled={disabled}
            require={require}
            type={type}
            placeholder={placeholder}
            readonly={readonly}
            hasError={get(errors, name)}
          />
        )}
      />
    </div>
  );
}
