import React from 'react';
import PropTypes from 'prop-types';

const UilExclamation = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-exclamation',
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,14a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0v6A1,1,0,0,0,12,14Zm0,4a1.25,1.25,0,1,0-1.25-1.25A1.25,1.25,0,0,0,12,18Z'
  }));
};

UilExclamation.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilExclamation.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilExclamation;