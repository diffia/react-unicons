import React from 'react';
import PropTypes from 'prop-types';

const UilWindowSection = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-window-section',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8,20H4V10H8Zm6,0H10V10h4Zm6,0H16V10h4ZM20,8H4V4H20Z'
  }));
};

UilWindowSection.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWindowSection.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWindowSection;