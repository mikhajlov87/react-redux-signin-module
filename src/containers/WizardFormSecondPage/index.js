import React from 'react';
import { reduxForm } from 'redux-form';
import DateField from '../DateField';
import GenderField from '../GenderField';
import AboutUsField from '../AboutUsField';
import Footer from '../Footer';
import validate from '../../helpers/validate';

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <DateField />
      <GenderField />
      <AboutUsField />
      <Footer
        shouldRenderPrevBtn={true}
        onClick={previousPage}
      />
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
