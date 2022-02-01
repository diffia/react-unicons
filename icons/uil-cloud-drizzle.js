import React from 'react';
import PropTypes from 'prop-types';

const UilCloudDrizzle = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-cloud-drizzle',
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM8,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,8,16Zm4-2a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm6.42-7.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,16,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,16,16ZM12,9a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z'
  }));
};

UilCloudDrizzle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudDrizzle;