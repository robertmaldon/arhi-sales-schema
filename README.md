# @nib/arhi-sales-schema

Schema for ARHI Sales data.

## Installation

    npm install --save @nib/arhi-sales-schema

## Usage

```javascript
import validator from '@nib/schema-validator';
import schema from '@nib/arhi-sales-schema';

const values = {
  firstName: 'John',
  phoneHome: '',
  state: '',
  scale: ''
};

validator.validate(schema.filter, schema.validate, values)
  .then(({valid, errors}) => console.log(valid, errors))
;

```