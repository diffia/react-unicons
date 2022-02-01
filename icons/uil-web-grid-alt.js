import React from 'react';
import PropTypes from 'prop-types';

const UilWebGridAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-web-grid-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V10h7Zm9,0H13V10h7ZM20,8H4V4H20Z'
  }));
};

UilWebGridAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWebGridAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWebGridAlt;