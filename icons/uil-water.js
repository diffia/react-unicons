import React from 'react';
import PropTypes from 'prop-types';

const UilWater = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-water',
    ...otherProps
  }, React.createElement('path', {
    d: 'M2.72,7.65a2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92,4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45,1,1,0,1,0-.56,1.92Zm18,8.08a4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45,1,1,0,1,0-.56,1.92,2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92Zm0-5a4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45A1,1,0,0,0,2,11.41a1,1,0,0,0,.68,1.24,2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92Z'
  }));
};

UilWater.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWater.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWater;