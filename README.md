# @nib/ahri-sales-schema

Schema for AHRI Sales data.

## Installation

    npm install --save @nib/ahri-sales-schema

## Usage

```javascript
import validator from '@nib/schema-validation';
import schema from '@nib/ahri-sales-schema';

const values = {
  FirstName: 'John',
  PhoneHome: '',
  State: ''
};

validator.validate(schema.validate, values)
  .then(({valid, errors}) => console.log(valid, errors))
;

```