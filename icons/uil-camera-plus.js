import React from 'react';
import PropTypes from 'prop-types';

const UilCameraPlus = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-camera-plus',
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,10.5a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H6a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68H14a1,1,0,0,0,0-2H8.44A3,3,0,0,0,5.6,6.55l-.32,1H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3v-7A1,1,0,0,0,20,10.5Zm-9-1a4,4,0,1,0,4,4A4,4,0,0,0,11,9.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11,15.5Zm11-11H21v-1a1,1,0,0,0-2,0v1H18a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Z'
  }));
};

UilCameraPlus.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCameraPlus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCameraPlus;