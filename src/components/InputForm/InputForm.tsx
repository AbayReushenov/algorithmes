import React, { ChangeEvent } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { pattern } from '../common/helpers/pattern';
import { placeholder } from '../common/helpers/placeholder';
import { Precision } from '../common/helpers/Precision';

interface Props {
  title: string;
  keyI: string;
  value: number;
  onChange:  (event: ChangeEvent<HTMLInputElement>) => void;
  precision?: Precision;
}

export const InputForm: React.FunctionComponent<Props> = ({
  title,
  keyI,
  value,
  precision = Precision.ZERO,
  onChange,
}) => {
  return (
    <FormGroup>
      <Label for={keyI}>{title}</Label>
      <Input
        id={keyI}
        name={keyI}
        value={value}
        placeholder={placeholder(precision)}
        pattern={pattern(precision)}
        onChange={onChange}
      />
    </FormGroup>
  );
};
