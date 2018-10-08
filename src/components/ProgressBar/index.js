import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class ProgressBar extends React.Component {
  static propTypes = {
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
  };

  render() {
    const { max, current } = this.props;
    const percents = Math.floor(100 / max * current);
    return (
      <div className="progress-bar">
        <span className="progress-bar__scale" style={{ width: `${percents}%` }} />
      </div>
    );
  }
};
