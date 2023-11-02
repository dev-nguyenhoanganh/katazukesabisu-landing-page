import React, { useState, useMemo, FormEvent } from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { styled, alpha } from '@mui/material/styles';
import { Button, CircularProgress } from '@mui/material';

import './style.css';
import { StyledHeading } from '../../styles/Common';
import { useAppDispatch } from '../../store/hooks';
import { openSnackbar } from '../../store/ui';
import message from '../../lang/en.json';
import { postCreateQA } from '../../api/contact/postCreateQA';

type OptionBase = {
  value: string;
  label: string;
  ignoreInput?: boolean;
};

type InputControlProps = {
  label: string;
  type: string;
  required: boolean;
  options?: OptionBase[];
};

const StyledLoading = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: alpha('#000', 0.12),
  zIndex: 2000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FormControl = (props: Record<string, InputControlProps>): JSX.Element => {
  const dispatch = useAppDispatch();
  const formConfig = useForm<Record<string, string>>();
  const { getValues, control } = formConfig;
  const [loading, setLoading] = useState(false);

  const DEFAULT_TOUCH = useMemo(() => {
    const untouched: Record<string, boolean> = {};
    const touched: Record<string, boolean> = {};
    for (const field in props) {
      untouched[field] = false;
      touched[field] = true;
    }
    return { untouched, touched };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [touch, setTouch] = useState<Record<string, boolean>>(DEFAULT_TOUCH.untouched);

  const handleChangeTouch = (fieldName: string) => () => {
    setTouch({ ...touch, [fieldName]: true });
  };

  const renderFormData = (): JSX.Element => {
    const result: JSX.Element[] = [];
    let count = 0;

    for (const name in props) {
      const inputControl = props[name];
      count++;
      switch (inputControl.type) {
        case 'radio':
        case 'checkbox':
          result.push(
            <div className="form-item" key={name}>
              <label className={count === 1 ? '!pt-0' : ''}>{inputControl.label}</label>
              <div className={count === 1 ? 'content first-of-type:!pt-0' : 'content'}>
                {inputControl.options?.map((item, index) =>
                  item.ignoreInput ? (
                    <label key={index}>{item.label}</label>
                  ) : (
                    <label key={index} htmlFor={name + index}>
                      <Controller
                        name={inputControl.type === 'checkbox' ? `${name}.${index}` : name}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <input
                            name={name}
                            id={name + index}
                            onBlur={handleChangeTouch(name)}
                            type={inputControl.type}
                            onChange={(e) => {
                              let newValue: string | React.ChangeEvent<HTMLInputElement> = e;

                              if (inputControl.type === 'checkbox') {
                                newValue = e.target.checked ? item.value : '';
                              }

                              onChange(newValue);
                            }}
                            checked={item.value === value}
                            value={inputControl.type === 'checkbox' ? value : item.value}
                          />
                        )}
                      />

                      {item.label}
                    </label>
                  )
                )}
              </div>
            </div>
          );
          break;
        case 'text-area':
          result.push(
            <div className="form-item" key={name}>
              <label className={inputControl.required ? 'required' : ''}>{inputControl.label}</label>
              <div className="content">
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange } }) => (
                    <textarea
                      name={name}
                      id={name}
                      onBlur={handleChangeTouch(name)}
                      required={inputControl.required}
                      rows={3}
                      onChange={onChange}
                      className={touch[name] ? 'touched' : ''}
                    />
                  )}
                />

                {inputControl.required && <span className="invalid">必須項目です。</span>}
              </div>
            </div>
          );
          break;
        default:
          result.push(
            <div className="form-item" key={name}>
              <label className={inputControl.required ? 'required' : ''}>{inputControl.label}</label>
              <div className="content">
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange } }) => (
                    <input
                      name={name}
                      id={name}
                      type={inputControl.type}
                      onBlur={handleChangeTouch(name)}
                      required={inputControl.required}
                      onChange={onChange}
                      className={touch[name] ? 'touched' : ''}
                    />
                  )}
                />

                {inputControl.type === 'email' ? (
                  <span className="validate-message text-[#FF1C60]">メールアドレス形式で入力してください。</span>
                ) : (
                  inputControl.required && <span className="required text-[#FF1C60]">必須項目です。</span>
                )}
              </div>
            </div>
          );
      }
    }

    return (
      <React.Fragment>
        {result.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  const prepareData = () => {
    const formData = getValues();
    const result: Record<string, unknown> = {};

    for (const field in formData) {
      const fieldValue = formData[field];

      if (Array.isArray(fieldValue)) {
        result[field] = fieldValue.filter(Boolean);
        continue;
      }

      if (fieldValue) {
        result[field] = fieldValue;
      }
    }

    return result;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (loading) {
        return;
      }
      setLoading(true);
      const requestBody = prepareData();
      await postCreateQA(requestBody);
      dispatch(openSnackbar({ message: message['notice.submitForm.successful'], severity: 'success' }));
    } catch (e) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...formConfig}>
      {loading && (
        <StyledLoading>
          <CircularProgress />
        </StyledLoading>
      )}
      <form onSubmit={handleSubmit}>
        <StyledHeading className="--with-background">
          <span>お問い合わせフォーム</span>
        </StyledHeading>
        {renderFormData()}
        <div className="form-item after:!content-none">
          <label className="hidden lg:flex">&nbsp;</label>
          <div className="content">
            <Button
              className="w-[100%] lg:w-[200px] lg:h-[60px] !font-bold !text-[16px]"
              variant="contained"
              color="error"
              type="submit"
              onClick={() => setTouch(DEFAULT_TOUCH.touched)}
            >
              確認
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormControl;
