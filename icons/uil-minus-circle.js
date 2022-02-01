import React from 'react';
import PropTypes from 'prop-types';

const UilMinusCircle = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-minus-circle',
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z'
  }));
};

UilMinusCircle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMinusCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMinusCircle;