import React from 'react';
import PropTypes from 'prop-types';

const UilScroll = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-scroll',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.29,9.71a1,1,0,0,0,1.42,0l5-5a1,1,0,1,0-1.42-1.42L12,7.59,7.71,3.29A1,1,0,0,0,6.29,4.71Zm1.42,4.58a1,1,0,0,0-1.42,0l-5,5a1,1,0,0,0,1.42,1.42L12,16.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
  }));
};

UilScroll.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilScroll.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilScroll;