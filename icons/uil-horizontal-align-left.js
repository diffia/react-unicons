import React from 'react';
import PropTypes from 'prop-types';

const UilHorizontalAlignLeft = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-horizontal-align-left',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,10H16V7a1,1,0,0,0-1-1H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V18H21a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10ZM4,8H14v2H4Zm16,8H4V12H20Z'
  }));
};

UilHorizontalAlignLeft.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHorizontalAlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHorizontalAlignLeft;