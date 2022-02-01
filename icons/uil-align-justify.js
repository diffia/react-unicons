import React from 'react';
import PropTypes from 'prop-types';

const UilAlignJustify = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-align-justify',
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilAlignJustify.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignJustify.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignJustify;