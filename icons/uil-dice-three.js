import React from 'react';
import PropTypes from 'prop-types';

const UilDiceThree = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,11a1,1,0,1,0,1,1A1,1,0,0,0,12,11ZM8,7A1,1,0,1,0,9,8,1,1,0,0,0,8,7Zm9-5H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3Zm-4-2a1,1,0,1,0,1,1A1,1,0,0,0,16,15Z'
  }));
};

UilDiceThree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDiceThree.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDiceThree;