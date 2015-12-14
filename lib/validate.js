var validate = require('@nib/validation-methods');

module.exports = {

  FirstName: [
    [validate.required, 'First name is required.']
  ],

  PhoneHome: [
    [validate.required, 'Phone home is required.'],
    [validate.minlength(8), 'Phone home needs to be at least 8 characters long.']
  ],

  State: [
    [validate.required, 'State is required.']
  ]

};
