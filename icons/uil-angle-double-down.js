import React from 'react';
import PropTypes from 'prop-types';

const UilAngleDoubleDown = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-angle-double-down',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.29,11.46a1,1,0,0,0,1.42,0l3-3A1,1,0,1,0,14.29,7L12,9.34,9.71,7A1,1,0,1,0,8.29,8.46Zm3,1.08L12,14.84l-2.29-2.3A1,1,0,0,0,8.29,14l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z'
  }));
};

UilAngleDoubleDown.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAngleDoubleDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAngleDoubleDown;