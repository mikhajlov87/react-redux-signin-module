import React from 'react';
import { formValueSelector, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Label from '../../components/Label';
import RadioButton from '../../components/RadioButton';
import './style.css';

class GenderField extends React.Component {
  static propTypes = {
    sex: PropTypes.string,
  };
  static defaultProps = {
    sex: '',
  };
  render() {
    const radioButtons = [
      { value: 'male' },
      { value: 'female' },
      { value: 'unspesified' },
    ];
    const { sex } = this.props;
    return (
      <Field
        name="sex"
        component={({ meta: { touched, error } }) => {
          const label = 'gender';
          const isError = !!(touched && error);
          const computedLabel = isError ? `${label} ${error}` : label;
          return (
            <Label center={true} label={computedLabel} error={isError}>
              <div className="date-field__container">
                {radioButtons.map(({ value }) => {
                  const classNames = cx('radio__container radio__container--align-center', { active: (value === sex) });
                  return (
                    <div key={value} className={classNames} style={{ width: `${100 / radioButtons.length}%` }}>
                      {value}
                      <RadioButton name="sex" value={value} />
                    </div>
                  );
                })}
              </div>
            </Label>
          );
        }}
      />
    );
  }
}

const selector = formValueSelector('wizard');

GenderField = connect(
  (state) => ({
    sex: selector(state, 'sex'),
  })
)(GenderField);

export default GenderField;
