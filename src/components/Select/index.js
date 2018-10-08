import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import './style.css';

class Select extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
  };
  static defaultProps = {
    options: [],
    about: {},
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    const { name, options, about } = this.props;
    const { isOpen } = this.state;
    const arrowClassName = cx('select-arrow-active', {
      up: isOpen,
      down: !isOpen,
    });
    return (
      <div className="form-select">
        <Field
          name={name}
          component={({ input }) => {
            const { onChange } = input;
            return (
              <React.Fragment>
                <div className="selected-option" onClick={this.togglePanel}>
                  {about.title && <span className="selected-option-item">{about.title}</span>}
                  <span className={arrowClassName} />
                </div>
                {isOpen && (
                  <ul className="options__container">
                    {options.map((option, idx) => {
                      return (
                        <li key={idx} className="option__item" onClick={() => { onChange(option); this.togglePanel() }}>
                          {option.title}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </React.Fragment>
            );
          }}
        />
      </div>
    );
  }

  togglePanel = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }
}

Select = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
})(Select);

const selector = formValueSelector('wizard');

Select = connect(
  (state) => ({
    about: selector(state, 'about'),
  })
)(Select);

export default Select;
