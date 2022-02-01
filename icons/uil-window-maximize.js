import React from 'react';
import PropTypes from 'prop-types';

const UilWindowMaximize = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-window-maximize',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V10H20ZM20,8H4V4H20Z'
  }));
};

UilWindowMaximize.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWindowMaximize.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWindowMaximize;