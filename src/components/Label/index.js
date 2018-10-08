import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css';

const Label = (props) => {
  const { center, children, className, label, error, success } = props;
  const upperCaseLabel = label.toUpperCase();
  const classNames = cx('form-label', {
    [className]: className,
    error: error,
    success: success,
  });
  const upperCaseLabelClassNames = cx({ 'form-label--center': center });
  return (
    <label className={classNames}>
      <div className={upperCaseLabelClassNames}>{upperCaseLabel}</div>
      {children}
    </label>
  );
}

Label.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

Label.defaultProps = {
  center: false,
  label: '',
  error: false,
  success: false,
};

export default Label;
