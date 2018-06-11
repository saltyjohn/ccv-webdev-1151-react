import React from 'react';
import PropTypes from 'prop-types';

const MenuBurger = props => {
  const currentIcon = props.open ? `fa fa-close` : `fa fa-navicon`;
  return (
    <button onClick={props.onClick}>
      <i className={currentIcon} />
    </button>
  );
};

MenuBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuBurger;
