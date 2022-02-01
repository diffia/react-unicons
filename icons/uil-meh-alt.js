import React from 'react';
import PropTypes from 'prop-types';

const UilMehAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-meh-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,11h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm6,3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-5H14a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilMehAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMehAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMehAlt;