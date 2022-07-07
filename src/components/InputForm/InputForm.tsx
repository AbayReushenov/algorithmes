import React, { ChangeEvent } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

interface Props {
  title: string;
  key: string;
  value: number;
  onChange:  (event: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

export const InputForm: React.FunctionComponent<Props> = ({
  title,
  key,
  value,
  onChange,
  min= 0,
  max = 100000,
  step = 1,
  placeholder = 'Введите данные',
}) => {
  return (
    <FormGroup>
      <Label for={key}>{title}</Label>
      <Input
        id={key}
        name={key}
        placeholder={placeholder}
        type='number'
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </FormGroup>
  );
};
