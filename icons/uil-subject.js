import React from 'react';
import PropTypes from 'prop-types';

const UilSubject = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-subject',
    ...otherProps
  }, React.createElement('path', {
    d: 'M13,16H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2ZM3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,3H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilSubject.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSubject.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSubject;