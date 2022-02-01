import React from 'react';
import PropTypes from 'prop-types';

const UilAngleDoubleLeft = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-angle-double-left',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.46,8.29a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.16,12l2.3-2.29A1,1,0,0,0,11.46,8.29ZM14.66,12,17,9.71a1,1,0,0,0-1.42-1.42l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
  }));
};

UilAngleDoubleLeft.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAngleDoubleLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAngleDoubleLeft;