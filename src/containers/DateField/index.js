import React from 'react';
import { Field } from 'redux-form';
import Label from '../../components/Label';
import Input from '../../components/Input';
import isValidDate from '../../helpers/isValidDate';
import './style.css';

class DateField extends React.Component {
  render() {
    return (
      <Field
        name="date"
        component={({ meta: { error } }) => {
          const label = 'date of birth';
          const isError = !!error;
          const computedLabel = isError ? `${label} ${error}` : label;
          return (
            <Label center={true} label={computedLabel} error={isError}>
              <div className="date-field__container">
                <div className="input__container">
                  <Input
                    placeholder="dd"
                    name="day"
                    upperCasePlaceholder={true}
                    normalize={(val) => (31 >= val >= 1) ? val : 0 }
                  />
                </div>
                <div className="input__container">
                  <Input
                    placeholder="mm"
                    name="month"
                    upperCasePlaceholder={true}
                    normalize={(val) => (12 >= val >= 1) ? val : 0 }
                  />
                </div>
                <div className="input__container">
                  <Input
                    placeholder="yyyy"
                    name="year"
                    upperCasePlaceholder={true}
                    normalize={(val) => (val >= 0) ? val : 0}
                    maxLength={4}
                  />
                </div>
              </div>
            </Label>
          );
        }}
      />
    );
  }
}

export default DateField;
