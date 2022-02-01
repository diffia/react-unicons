import React from 'react';
import PropTypes from 'prop-types';

const UilLeftArrowFromLeft = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-left-arrow-from-left',
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,11H5.41l2.3-2.29A1,1,0,1,0,6.29,7.29l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H17a1,1,0,0,0,0-2Zm4-7a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z'
  }));
};

UilLeftArrowFromLeft.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLeftArrowFromLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLeftArrowFromLeft;