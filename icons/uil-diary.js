import React from 'react';
import PropTypes from 'prop-types';

const UilDiary = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-diary',
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,2H5A1,1,0,0,0,4,3V19a1,1,0,0,0,1,1H6v1a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V20h9a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2ZM14,18H6V4h8Zm4-1a1,1,0,0,1-1,1H16V4h1a1,1,0,0,1,1,1Z'
  }));
};

UilDiary.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDiary.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDiary;