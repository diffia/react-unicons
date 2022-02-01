import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltMedical = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-comment-alt-medical',
    ...otherProps
  }, React.createElement('path', {
    d: 'M14,9H13V8a1,1,0,0,0-2,0V9H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V11h1a1,1,0,0,0,0-2Zm5-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z'
  }));
};

UilCommentAltMedical.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAltMedical.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAltMedical;