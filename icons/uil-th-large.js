import React from 'react';
import PropTypes from 'prop-types';

const UilThLarge = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-th-large',
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM11,19H5V13h6Zm0-8H5V5h6Zm8,8H13V13h6Zm0-8H13V5h6Z'
  }));
};

UilThLarge.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilThLarge.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilThLarge;