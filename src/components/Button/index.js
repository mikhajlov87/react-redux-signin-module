import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css';

const Button = (props) => {
  const { className, type, children, onClick, color, outline } = props;
  const classNames = cx('btn', {
    [className]: className,
    'btn-primary': color === 'primary',
    [`btn-${color}-outline`]: color && outline,
  });
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      children={children}
    />
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
