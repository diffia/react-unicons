import React from 'react';
import PropTypes from 'prop-types';

const UilLineAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-line-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z'
  }));
};

UilLineAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLineAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLineAlt;