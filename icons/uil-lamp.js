import React from 'react';
import PropTypes from 'prop-types';

const UilLamp = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-lamp',
    ...otherProps
  }, React.createElement('path', {
    d: 'M18,2.78A1,1,0,0,0,17,2H7a1,1,0,0,0-1,.78l-2,9a1,1,0,0,0,.2.85A1,1,0,0,0,5,13H8.94A8.26,8.26,0,0,1,9,14a8.92,8.92,0,0,1-2.57,6.3A1,1,0,0,0,7.14,22h9.72a1,1,0,0,0,.71-1.7A8.92,8.92,0,0,1,15,14a8.26,8.26,0,0,1,.06-1H16v2a1,1,0,0,0,2,0V13h1a1,1,0,0,0,.78-.37,1,1,0,0,0,.2-.85ZM9.22,20A10.9,10.9,0,0,0,11,14c0-.33,0-.67-.05-1h2.1c0,.33-.05.67-.05,1a10.9,10.9,0,0,0,1.78,6Zm-3-9L7.8,4h8.4l1.55,7Z'
  }));
};

UilLamp.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLamp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLamp;