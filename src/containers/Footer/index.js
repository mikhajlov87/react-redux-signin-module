import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import './style.css';

class Footer extends React.Component {
  render() {
    const { shouldRenderPrevBtn } = this.props;
    return (
      <footer className="app__footer">
        {shouldRenderPrevBtn && (
          <Button type="button" className="previous" onClick={this.onClickHandler}>
            Back
          </Button>
        )}
        <Button type="submit" className="align-right" color="primary">
          Next &#8594;
        </Button>
    </footer>
    );
  }

  onClickHandler = () => {
    const { onClick } = this.props;
    if (typeof onClick === 'function') {
      onClick();
    }
  }
}

Footer.propTypes = {
  onClick: PropTypes.func,
  shouldRenderPrevBtn: PropTypes.bool,
};

export default Footer;
