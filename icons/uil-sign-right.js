import React from 'react';
import PropTypes from 'prop-types';

const UilSignRight = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-sign-right',
    ...otherProps
  }, React.createElement('path', {
    d: 'M7,6v5a1,1,0,0,0,1,1h3v8H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V12h5a1,1,0,0,0,.78-.37l2-2.5a1,1,0,0,0,0-1.25l-2-2.5A1,1,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H8A1,1,0,0,0,7,6ZM9,7h8.52l1.2,1.5L17.52,10H9Z'
  }));
};

UilSignRight.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSignRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSignRight;