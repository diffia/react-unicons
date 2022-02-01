import React from 'react';
import PropTypes from 'prop-types';

const UilGripHorizontalLine = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-grip-horizontal-line',
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,11H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilGripHorizontalLine.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilGripHorizontalLine.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilGripHorizontalLine;