import React from 'react';
import PropTypes from 'prop-types';

const UilRightToLeftTextDirection = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-right-to-left-text-direction',
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.5,17H5.91l1.3-1.29a1,1,0,0,0-1.42-1.42l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.91,19H20.5a1,1,0,0,0,0-2Zm-9-7v4a1,1,0,0,0,2,0V4h2V14a1,1,0,0,0,2,0V4h1a1,1,0,0,0,0-2h-7a4,4,0,0,0,0,8Zm0-6V8a2,2,0,0,1,0-4Z'
  }));
};

UilRightToLeftTextDirection.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilRightToLeftTextDirection.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilRightToLeftTextDirection;