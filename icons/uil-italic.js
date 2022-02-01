import React from 'react';
import PropTypes from 'prop-types';

const UilItalic = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-italic',
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,6H11a1,1,0,0,0,0,2h1.52l-3.2,8H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H11.48l3.2-8H17a1,1,0,0,0,0-2Z'
  }));
};

UilItalic.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilItalic.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilItalic;