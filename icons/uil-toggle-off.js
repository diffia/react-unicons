import React from 'react';
import PropTypes from 'prop-types';

const UilToggleOff = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-toggle-off',
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,8.5A3.5,3.5,0,1,0,11.5,12,3.5,3.5,0,0,0,8,8.5Zm0,5A1.5,1.5,0,1,1,9.5,12,1.5,1.5,0,0,1,8,13.5ZM16,5H8A7,7,0,0,0,8,19h8A7,7,0,0,0,16,5Zm0,12H8A5,5,0,0,1,8,7h8a5,5,0,0,1,0,10Z'
  }));
};

UilToggleOff.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilToggleOff.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilToggleOff;