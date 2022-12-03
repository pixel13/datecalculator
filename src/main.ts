#!/usr/bin/env node

import argsParser from './argsParser';
import calculator from './calculator';

try {
  const args = argsParser(process.argv.slice(2));
  const result = calculator(args);
  console.log(result.format('DD/MM/YYYY'));
} catch (error) {
  if (error instanceof Error) {
    console.error('ERROR: ' + error.message);
  }
  console.error('Usage: dcl [dd/mm/yyyy] <+|->NN<d|m|y>');
  console.error('Example: dcl +3d');
  console.error('Example: dcl 13/06/2022 -4m');
}
