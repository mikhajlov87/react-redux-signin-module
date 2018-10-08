import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

let ToDashboardButton = (props) => {
  const { onClickHandler } = props;
  return (
    <Button outline={true} color="maja" onClick={onClickHandler}>
      Go to Dashboard &#8594;
    </Button>
  );
}

ToDashboardButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default ToDashboardButton;
