import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltCheck = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-comment-alt-check',
    ...otherProps
  }, React.createElement('path', {
    d: 'M6.77,9.15l5.44-5.44a1,1,0,1,0-1.42-1.42L6.06,7,4.21,5.17A1,1,0,0,0,2.79,6.59L5.35,9.15a1,1,0,0,0,1.42,0ZM18.5,6H13a1,1,0,0,0,0,2h5.5a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H8.5a1,1,0,0,1-1-1V12.5a1,1,0,0,0-2,0V16a3,3,0,0,0,3,3h8.36l3,2.73a1,1,0,0,0,.68.27,1.1,1.1,0,0,0,.4-.08,1,1,0,0,0,.6-.92V9A3,3,0,0,0,18.5,6Z'
  }));
};

UilCommentAltCheck.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAltCheck.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAltCheck;