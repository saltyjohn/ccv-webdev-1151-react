import React from 'react';
import PropTypes from 'prop-types';

const MenuBurger = props => {
  console.log(props);
  return (
    <button onClick={props.onClick}>
      <span>__</span>
      <span>__</span>
      <span>__</span>
    </button>
  );
};

MenuBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuBurger;
