import React from 'react';
import PropTypes from 'prop-types';

const UilCornerUpRightAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-corner-up-right-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.92,10.12a1,1,0,0,0-.21-.33l-3-3a1,1,0,1,0-1.42,1.42l1.3,1.29H7a3,3,0,0,0-3,3v4a1,1,0,0,0,2,0v-4a1,1,0,0,1,1-1h9.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,19.92,10.12Z'
  }));
};

UilCornerUpRightAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCornerUpRightAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCornerUpRightAlt;