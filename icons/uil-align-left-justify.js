import React from 'react';
import PropTypes from 'prop-types';

const UilAlignLeftJustify = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-align-left-justify',
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM15,19H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Zm6-8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilAlignLeftJustify.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignLeftJustify.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignLeftJustify;