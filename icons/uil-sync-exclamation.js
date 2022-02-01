import React from 'react';
import PropTypes from 'prop-types';

const UilSyncExclamation = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-sync-exclamation',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.29,15.71A1,1,0,0,0,13,15a1.05,1.05,0,0,0-.29-.71,1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21A1.05,1.05,0,0,0,11,15,1,1,0,0,0,11.29,15.71Zm8.62-.2H15.38a1,1,0,0,0,0,2h2.4A8,8,0,0,1,4,12a1,1,0,0,0-2,0,10,10,0,0,0,16.88,7.23V21a1,1,0,0,0,2,0V16.5A1,1,0,0,0,19.91,15.51ZM12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,0,1,20,12a1,1,0,0,0,2,0A10,10,0,0,0,12,2Zm0,11a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0v3A1,1,0,0,0,12,13Z'
  }));
};

UilSyncExclamation.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSyncExclamation.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSyncExclamation;