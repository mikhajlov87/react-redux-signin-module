import React from 'react';
import { Field } from 'redux-form';

const renderError = ({input, meta: { error }, ...props}) => (
  <span {...props} className="error">{error}</span>
);

const ErrorMessage = ({ name }) => <Field name={name} component={renderError} />

export default ErrorMessage;
