import React from 'react';
import PropTypes from 'prop-types';

const UilDiaryAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-diary-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,2H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2ZM8,20H6V4H8Zm10-1a1,1,0,0,1-1,1H10V4h7a1,1,0,0,1,1,1Z'
  }));
};

UilDiaryAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDiaryAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDiaryAlt;