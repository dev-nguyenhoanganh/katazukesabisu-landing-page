import React from 'react';
import { Controller, FieldPath, FieldValues, useFormContext, get } from 'react-hook-form';

import { Checkbox } from './Checkbox';

type OptionType = {
  label: string;
  value: string;
  disabledFlg?: boolean;
};

type InputControlProps<T extends FieldValues> = {
  name: FieldPath<T>;
  options?: OptionType[];
  disabled_key_set?: boolean;
  onChangeFunc?: (value: string) => void;
  require?: boolean;
};

export function CheckboxControl<T extends FieldValues>({
  name,
  options = [],
  disabled_key_set = false,
  onChangeFunc = () => {},
}: InputControlProps<T>): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <Controller
              name={`${name}.${index}`}
              control={control}
              render={({ field: { onChange, onBlur, ref, value } }) => (
                <React.Fragment>
                  <Checkbox
                    inputRef={ref}
                    onChange={(val: string) => {
                      onChange(val);
                      onChangeFunc(val);
                    }}
                    onBlur={onBlur}
                    value={option.value}
                    name={`${name}.${index}`}
                    checked={(option.value == value) as boolean}
                    disabled={disabled_key_set || option.disabledFlg ? true : false}
                    hasError={Object.keys(errors).indexOf(name) >= 0 || get(errors, name)}
                  />
                </React.Fragment>
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
