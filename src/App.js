import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import WizardForm from './containers/WizardForm';
import showFormResults from './helpers/showFormResults';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <WizardForm onSubmit={this.formSubmitHandler} />
      </div>
    );
  }

  formSubmitHandler = () => {
    const { day, month, year, email, password, sex, about } = this.props;
    const result = {
      user_data: {
        email,
        password,
        gender: sex,
        date_of_birth: new Date(`${year} ${month} ${day}`).getTime(),
        how_hear_about_us: about || null,
      },
    };
    showFormResults(result);
  }
}

const selector = formValueSelector('wizard');

App = connect(
  (state) => ({
    day: selector(state, 'day'),
    month: selector(state, 'month'),
    year: selector(state, 'year'),
    email: selector(state, 'email'),
    password: selector(state, 'pass'),
    sex: selector(state, 'sex'),
    about: selector(state, 'about'),
  })
)(App);

export default App;
