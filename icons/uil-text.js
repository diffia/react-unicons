import React from 'react';
import PropTypes from 'prop-types';

const UilText = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-text',
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,6H7A1,1,0,0,0,7,8h4v9a1,1,0,0,0,2,0V8h4a1,1,0,0,0,0-2Z'
  }));
};

UilText.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilText.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilText;