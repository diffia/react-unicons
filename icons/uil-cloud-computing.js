import React from 'react';
import PropTypes from 'prop-types';

const UilCloudComputing = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-cloud-computing',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,20H18a1,1,0,0,1-1-1V16a5,5,0,0,0,1.42-9.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16H7v3a1,1,0,0,1-1,1H3a1,1,0,0,0,0,2H6a3,3,0,0,0,3-3V16h2v5a1,1,0,0,0,2,0V16h2v3a3,3,0,0,0,3,3h3a1,1,0,0,0,0-2ZM6,14a2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a3,3,0,0,1-3,3Z'
  }));
};

UilCloudComputing.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudComputing.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudComputing;