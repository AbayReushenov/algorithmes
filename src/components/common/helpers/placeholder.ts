import { Precision } from './Precision';

export const placeholder = (precision: number = Precision.ZERO) =>
  String(Number(0).toFixed(precision));
