var validate = require('@nib/validation-methods');

const REGEX_NAME = /^[a-zA-Z0-9\-\/' ]*$/;
const REGEX_PHONE = /^\d+$/;
const REGEX_STARTS_WITH_ZERO = /^0/;

module.exports = {

  firstName: [
    [validate.required, 'First name is required.'],
    [validate.maxlength(24), 'Sorry, our system can only handle up to 24 characters.'],
    [validate.regex(REGEX_NAME), 'First name contains invalid characters']
  ],

  motivator: [
    [validate.in(['Tax', 'Cheaper', 'HealthConcern', 'BetterCover', 'Comparing']), 'Motivator must be one of the following values (Tax, Cheaper, HealthConcern, BetterCover, Comparing)']
  ],

  phoneNumber: [
    [validate.required, 'Phone number is required.'],
    [validate.minlength(10), 'Phone number needs to be at least 10 characters long.'],
    [validate.maxlength(10), 'Phone number needs to be no more than 10 characters long.'],
    [validate.regex(REGEX_STARTS_WITH_ZERO), 'Phone number needs to start with zero.'],
    [validate.regex(REGEX_PHONE), 'Phone number needs to be numeric.']
  ],

  scale: [
    [validate.required, 'Scale is required'],
    [validate.in(['Single', 'Couple', 'Family', 'SingleParentFamily']), 'Scale must be one of the following values (Single, Couple, Family, SingleParentFamily)']
  ],

  state: [
    [validate.required, 'State is required.'],
    [validate.in(['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']), 'State must be one of the following values (ACT, NSW, NT, QLD, SA, TAS, VIC, WA)']
  ],

  visitorType: [
    [validate.in(['Customer', 'NewToPHI', 'Switcher', 'IMAN', 'OSHC']), 'Visitor type must be one of the following values (Customer, NewToPHI, Switcher, IMAN, OSHC)']
  ]

};
