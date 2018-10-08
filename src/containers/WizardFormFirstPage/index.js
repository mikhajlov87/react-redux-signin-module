import React from 'react';
import { reduxForm } from 'redux-form';
import FormField from '../../components/FormField';
import Footer from '../Footer';
import validate from '../../helpers/validate';

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormField
        name="email"
        type="email"
        label="email"
      />
      <FormField
        name="pass"
        type="password"
        label="password"
      />
      <FormField
        name="confirm-pass"
        type="password"
        label="confirm password"
      />
      <Footer />
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
