import React from 'react';
import PropTypes from 'prop-types';

const UilArrowGrowth = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-arrow-growth',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z'
  }));
};

UilArrowGrowth.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowGrowth.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowGrowth;