import React, { ChangeEvent } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

interface Props {
  title: string;
  keyI: string;
  value: number;
  onChange:  (event: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

export const InputForm: React.FunctionComponent<Props> = ({
  title,
  keyI,
  value,
  onChange,
  min= 0,
  max = 100000,
  step = 1,
  placeholder = 'Введите данные',
}) => {
  return (
    <FormGroup>
      <Label for={keyI}>{title}</Label>
      <Input
        id={keyI}
        name={keyI}
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
