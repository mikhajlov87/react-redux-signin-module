import React from 'react';
import { Field } from 'redux-form';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Label from '../Label';
import './style.css';

const FormField = ({ className, type, name, label, validate }) => (
  <Field
    name={name}
    validate={validate}
    component={({ input, meta: { touched, error } }) => {
      const isError = !!(touched && error);
      const isSuccess = !!(touched && !error);
      const computedLabel = isError ? `${label} ${error}` : label;
      const classNames = cx('form-field', { [className]: className });
      return (
        <div className={classNames}>
          <Label label={computedLabel} error={isError} success={isSuccess}>
            <input
              {...input}
              className="form-control"
              type={type}
            />
          </Label>
        </div>
      );
    }}
  />
);

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.array,
};

FormField.defaultProps = {
  className: '',
  type: 'text',
  label: '',
  validate: [],
};

export default FormField;
