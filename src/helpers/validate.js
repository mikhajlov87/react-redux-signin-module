import {
  required,
  email,
  length,
  confirmation,
} from 'redux-form-validators';

const validations = {
  email: [
    required({ msg: 'is required' }),
    email({ msg: 'is not valid' }),
  ],
  pass: [
    required({ msg: 'is required' }),
    length({ min: 6, msg: 'is less than 6 char' }),
  ],
  'confirm-pass': [
    required({ msg: 'is required' }),
    confirmation({ field: 'pass', msg: 'is not equel' }),
  ],
  sex: [
    required({ msg: 'is required' }),
  ],
}

const validate = (values) => {
  const errors = {};
  for (let field in validations) {
    let value = values[field];
    errors[field] = validations[field].map((validateField) => {
      return validateField(value, values);
    }).find(x => x);
  }
  return errors;
}

export default validate;
