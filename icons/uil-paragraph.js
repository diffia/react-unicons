import React from 'react';
import PropTypes from 'prop-types';

const UilParagraph = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-paragraph',
    ...otherProps
  }, React.createElement('path', {
    d: 'M13,13.5H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilParagraph.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilParagraph.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilParagraph;