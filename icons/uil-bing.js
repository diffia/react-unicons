import React from 'react';
import PropTypes from 'prop-types';

const UilBing = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-bing',
    ...otherProps
  }, React.createElement('path', {
    d: 'M10.1,8.6l1.7,4.3l2.8,1.3L9,17.5V3.4L5,2v17.8L9,22l10-5.8v-4.5L10.1,8.6z'
  }));
};

UilBing.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBing.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBing;