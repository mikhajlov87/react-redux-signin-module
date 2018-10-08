import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import './style.css';

const RadioButton = (props) => {
  const { name, value } = props;
  return (
    <Field
      name={name}
      value={value}
      component={({ input }) => {
        return (
          <input
            {...input}
            type="radio"
            className="radio-button"
            value={value}
          />
        );
      }}
    />
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioButton;
