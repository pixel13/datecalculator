# Date Calculator

A simple CLI command to make date calculations

### Installation

Clone the repository then install project dependencies:

`npm install`

Then compile the project with:

`npm run compile`

To have `dcl` (date calculator) as a globally available command, launch this command from the project root directory:

`npm install -g .`

### Usage

The basic syntax of `dcl` is:

`dcl [startDate] <+|->NN<d|m|y>`

where:

- `startDate` is an optional parameter that contains the starting date in the format `dd/mm/yyyy` or `yyyy-mm-dd` (default to current date if not given)

- The operation parameter can be a combination of the sign `+` or `-` (no sign at all is the same as `+`), followed by a number and a time unit letter (`d` for days, `m` for months, `y` for years)

For example:

- `dcl +3m`: current date plus 3 months
- `dcl 13/06/2022 -4d`: calculates the date that's 4 days before 13/06/2022
- `dcl 20y`: current date plus 20 years

### Timezone

The current version of the project only supports the timezone `Europe/Rome`.
