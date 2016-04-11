var validate = require('@nib/validation-methods');
var filters = require('./lib/filters');

const REGEX_NAME = /^[a-zA-Z0-9\-\/' ]*$/;
const REGEX_PHONE = /^\d+$/;
const REGEX_STARTS_WITH_ZERO = /^0/;

module.exports = {
  firstName: {
      filters: [
          filters.toUpperCaseFirst
      ],
      validators: [
        [validate.maxlength(24), 'Sorry, our system can only handle up to 24 characters.'],
        [validate.regex(REGEX_NAME), 'First name contains invalid characters']
      ],
      empty: {
        default: ''
      }
  },
  motivator: {
      filters: [],
      validators: [
        [validate.in(['Tax', 'Cheaper', 'HealthConcern', 'BetterCover', 'Comparing']), 'Motivator must be one of the following values (Tax, Cheaper, HealthConcern, BetterCover, Comparing)']
      ],
      empty: {
        default: null
      }
  },
  phoneNumber: {
      filters: [
          filters.removeNonNumericCharacters
      ],
      validators: [
        [validate.minlength(10), 'Phone number needs to be at least 10 characters long.'],
        [validate.maxlength(10), 'Phone number needs to be no more than 10 characters long.'],
        [validate.regex(REGEX_STARTS_WITH_ZERO), 'Phone number needs to start with zero.'],
        [validate.regex(REGEX_PHONE), 'Phone number needs to be numeric.']
      ],
      empty: {
        default: ''
      }
  },
  scale: {
      filters: [],
      validators: [
        [validate.in(['Single', 'Couple', 'Family', 'SingleParentFamily']), 'Scale must be one of the following values (Single, Couple, Family, SingleParentFamily)']
      ],
      empty: {
        default: 'Single'
      }
  },
  state: {
      filters: [],
      validators: [
        [validate.in(['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']), 'State must be one of the following values (ACT, NSW, NT, QLD, SA, TAS, VIC, WA)']
      ],
      empty: {
        default: 'NSW'
      }
  },
  paymentFrequency: {
      filters: [],
      validators: [
        [validate.in(['Weekly', 'Fortnightly', 'Monthly', 'Quarterly', 'HalfYearly', 'Yearly']), 'Payment Frequency must be one of the following values (Weekly, Fortnightly, Monthly, Quarterly, HalfYearly, Yearly)']
      ],
      empty: {
        default: 'Weekly'
      }
  },
  visitorType: {
      filters: [],
      validators: [
        [validate.in(['Customer', 'NewToPHI', 'Switcher', 'IMAN', 'OSHC']), 'Visitor type must be one of the following values (Customer, NewToPHI, Switcher, IMAN, OSHC)']
      ],
      empty: {
        default: null
      }
  },
  hasCompletedAboutYou: {
      filters: [],
      validators: [
          [validate.boolean, 'Has Completed About You must be a boolean (true/false)']
      ],
      empty: {
        default: false
      }
  }
};
