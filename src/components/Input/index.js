import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import './style.css';

export default class Input extends React.Component {
  static defaultProps = {
    type: 'text',
    placeholder: '',
    upperCasePlaceholder: false,
    normalize: (val) => val,
    maxLength: 2,
  };

  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    upperCasePlaceholder: PropTypes.bool,
    normalize: PropTypes.func,
    maxLength: PropTypes.number,
  };

  render() {
    const { type, name, placeholder, upperCasePlaceholder, normalize, maxLength } = this.props;
    const inputPlaceholder = upperCasePlaceholder ? placeholder.toUpperCase() : placeholder;
    return (
      <Field
        name={name}
        normalize={normalize}
        component={({ input }) => {
          return (
            <input
              {...input}
              maxLength={maxLength}
              className="input"
              type={type}
              placeholder={inputPlaceholder}
            />
          );
        }}
      />
    )
  }
}
