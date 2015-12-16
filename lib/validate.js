var validate = require('@nib/validation-methods');

module.exports = {

  FirstName: [
    [validate.required, 'First name is required.']
  ],

  PhoneNumber: [
    [validate.required, 'Phone number is required.'],
    [validate.minlength(8), 'Phone number needs to be at least 8 characters long.']
  ],
  
  State: [
    [validate.required, 'State is required.']
  ]
  

};
