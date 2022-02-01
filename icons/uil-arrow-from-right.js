import React from 'react';
import PropTypes from 'prop-types';

const UilArrowFromRight = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-arrow-from-right',
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,4A1,1,0,0,0,2,5V19a1,1,0,0,0,2,0V5A1,1,0,0,0,3,4Zm18.92,7.62a1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L18.59,11H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62Z'
  }));
};

UilArrowFromRight.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowFromRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowFromRight;