import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
// import { Input, Label } from '../UI';
import { Input, Label } from 'ui/UI';

const LabelWrapper = styled.div`
  margin-bottom: 10px;
`;

const InputWrapper = styled(Input)`
  margin-bottom: 10px;
  margin-left: 10px;
`;

export interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  // Keys can be strings, numbers, or symbols.
  // If you know it to be strings only, you can also restrict it to that.
  // For the value you can use any or unknown,
  // with unknown being the more defensive approach.
  [otherProps: string | number | symbol]: unknown;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  ...otherProps
}) => {
  // const handleChange = (event: Event) => {
  //   const { target } = event;
  //   if (target) onChange((target as HTMLInputElement).value);
  //   // const value = event?.target?.value;
  //   // if (value) onChange(value);
  // };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target) onChange((target as HTMLInputElement).value);
    // const value = event?.target?.value;
    // if (value) onChange(value);
  };

  return (
    <LabelWrapper>
      <Label>
        {label}
        <InputWrapper
          // type="text"
          type={type}
          value={value}
          onChange={handleChange}
          {...otherProps}
        />
      </Label>
    </LabelWrapper>
  );
};

export default InputField;
