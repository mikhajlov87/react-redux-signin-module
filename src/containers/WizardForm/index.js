import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { SubmissionError } from 'redux-form';
import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import WizardFormFirstPage from '../WizardFormFirstPage';
import WizardFormSecondPage from '../WizardFormSecondPage';
import WizardFormThirdPage from '../WizardFormThirdPage';
import isValidDate from '../../helpers/isValidDate';
import './style.css';

class WizardForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      max: 3,
    };
  }

  render() {
    const { onSubmit } = this.props;
    const { page, max } = this.state;
    const headerTitle = (max > page) ? 'Signup' : 'Thank you!' ;
    return (
      <React.Fragment>
        <Header title={headerTitle} />
        <ProgressBar max={max} current={page} />
        <div className="form__container">
          {(page === 1) && (
            <WizardFormFirstPage
              onSubmit={this.nextPage}
            />
          )}
          {(page === 2) && (
            <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPageSubmitValidation}
            />
          )}
          {(page === 3) && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </React.Fragment>
    );
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  nextPageSubmitValidation = () => {
    const { day, month, year } = this.props;
    const dateStr = `${day} ${month} ${year}`;
    if (!day) {
      throw new SubmissionError({ date: 'day field is required!' });
    }
    if (!month) {
      throw new SubmissionError({ date: 'month field is required!' });
    }
    if (!year) {
      throw new SubmissionError({ date: 'year field is required!' });
    }
    if (!isValidDate({ date: dateStr, format: 'DD MM YYYY' })) {
      throw new SubmissionError({ date: 'is not valid!' });
    }
    if (calculateAge(new Date(`${year} ${month} ${day}`)) < 18) {
      throw new SubmissionError({ date: 'is to young!' });
    }
    this.nextPage();
  };
}

const selector = formValueSelector('wizard');

WizardForm = connect(
  (state) => ({
    day: selector(state, 'day'),
    month: selector(state, 'month'),
    year: selector(state, 'year'),
  })
)(WizardForm);

function calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const startYear = 1970;
  return Math.abs(ageDate.getUTCFullYear() - startYear);
}

export default WizardForm;
