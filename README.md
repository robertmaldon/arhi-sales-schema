# @nib/arhi-sales-schema

Schema for ARHI Sales data.

## Installation

    npm install --save @nib/arhi-sales-schema

## Usage

```javascript
import validator from '@nib/schema-validation';
import schema from '@nib/arhi-sales-schema';

const values = {
  FirstName: 'John',
  PhoneHome: '',
  State: ''
};

validator.validate(schema.validate, values)
  .then(({valid, errors}) => console.log(valid, errors))
;

```