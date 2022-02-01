import React from 'react';
import PropTypes from 'prop-types';

const UilAdjust = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-adjust',
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM11,19.93A8,8,0,0,1,11,4.07Zm2,0V4.07a8,8,0,0,1,0,15.86Z'
  }));
};

UilAdjust.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAdjust.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAdjust;