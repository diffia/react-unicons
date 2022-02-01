import React from 'react';
import PropTypes from 'prop-types';

const UilTopArrowToTop = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-top-arrow-to-top',
    ...otherProps
  }, React.createElement('path', {
    d: 'M12.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4a1,1,0,1,0,1.42,1.42L11,9.41V21a1,1,0,0,0,2,0V9.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z'
  }));
};

UilTopArrowToTop.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTopArrowToTop.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTopArrowToTop;