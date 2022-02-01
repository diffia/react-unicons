import React from 'react';
import PropTypes from 'prop-types';

const UilSorting = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-sorting',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.29,10.21a1,1,0,0,0,1.42,0l3-3a1,1,0,1,0-1.42-1.42L12,8.09,9.71,5.79A1,1,0,0,0,8.29,7.21Zm1.42,4.58a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42L12,16.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
  }));
};

UilSorting.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSorting.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSorting;