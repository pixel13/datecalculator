import {CalculatorArguments, Operator, TemporalUnit, Operation} from './types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Rome');

function parseOperation(op: string): Operation {
  const regexp = /^(\+|-)?(\d+)(d|m|y)$/;
  const match = op.match(regexp);
  if (!match) {
    throw new Error('Invalid operation format ' + op);
  }

  return {
    operator: match[1] as Operator,
    value: parseInt(match[2]),
    unit: match[3] as TemporalUnit,
  };
}

function parseDate(dateStr: string): dayjs.Dayjs {
  const regexp = /^(\d{2})\/(\d{2})\/(\d{2,4})$/;
  const match = dateStr.match(regexp);
  if (match) {
    return dayjs.tz(match[3] + '-' + match[2] + '-' + match[1]);
  }
  return dayjs.tz(dateStr);
}

export default function argsParser(args: string[]): CalculatorArguments {
  switch (args.length) {
    case 1:
      return parseOperation(args[0]);
    case 2:
      return {startDate: parseDate(args[0]), ...parseOperation(args[1])};
    default:
      throw new Error(
        'dateCalculator accepts 1 or 2 arguments, ' + args.length + ' provided'
      );
  }
}
