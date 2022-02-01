import React from 'react';
import PropTypes from 'prop-types';

const UilMapMarkerEdit = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-map-marker-edit',
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.46,9.63A8.5,8.5,0,1,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05Zm-2.81-8.8a1,1,0,0,0-1.42,0L8.79,9.83a1,1,0,0,0-.29.7V13a1,1,0,0,0,1,1h2.42a1,1,0,0,0,.71-.29l3.58-3.58a1,1,0,0,0,0-1.41ZM11.51,12h-1V11l2.58-2.58,1,1Z'
  }));
};

UilMapMarkerEdit.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMapMarkerEdit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMapMarkerEdit;