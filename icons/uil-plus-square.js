import React from 'react';
import PropTypes from 'prop-types';

const UilPlusSquare = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-plus-square',
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,13h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z'
  }));
};

UilPlusSquare.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPlusSquare.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPlusSquare;