import dayjs from 'dayjs';

export type Operator = '+' | '-' | '';

export type TemporalUnit = 'd' | 'm' | 'y';

export type Operation = {
  operator: Operator;
  value: number;
  unit: TemporalUnit;
};

export type CalculatorArguments = Operation & {
  startDate?: dayjs.Dayjs;
};
