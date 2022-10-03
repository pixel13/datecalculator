import {CalculatorArguments} from './types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Rome');

function calculator(args: CalculatorArguments): dayjs.Dayjs {
  const startDate = args.startDate || dayjs.tz(dayjs());
  const amount = args.operator === '-' ? -args.value : args.value;
  const unit = args.unit === 'm' ? 'M' : args.unit;

  return startDate.add(amount, unit);
}

export default calculator;
