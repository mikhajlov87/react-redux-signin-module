import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = (props) => {
  const { title } = props;
  return (
    <header className="app-header">
      <h2 className="app-header__h2">{title}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
