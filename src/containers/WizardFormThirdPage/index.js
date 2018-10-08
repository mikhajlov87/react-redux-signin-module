import React from 'react';
import GreenCircle from '../../components/GreenCircle';
import ToDashboardButton from '../../components/ToDashboardButton';
import './style.css';

const WizardFormThirdPage = (props) => {
  const { onSubmit } = props;
  return (
    <div className="thanks-page">
      <GreenCircle />
      <ToDashboardButton onClickHandler={onSubmit} />
    </div>
  );
};

export default WizardFormThirdPage;
