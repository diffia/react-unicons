import React from 'react';
import PropTypes from 'prop-types';

const UilCloudSunTear = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-cloud-sun-tear',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.05,14.33a1,1,0,0,0-1.11,0C9.84,14.41,7.5,16,7.5,18.5a3,3,0,0,0,6,0C13.5,16,11.16,14.4,11.05,14.33ZM10.5,19.5a1,1,0,0,1-1-1,3,3,0,0,1,1-2,3,3,0,0,1,1,2A1,1,0,0,1,10.5,19.5ZM21,7.5h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,4.3V3.5a1,1,0,0,0-2,0v.8a4.1,4.1,0,0,0-1.26.52l-.57-.56a1,1,0,0,0-1.41,1.41l.56.57c-.09.15-.16.32-.24.48A5.85,5.85,0,0,0,10.5,6.5a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,15a1.5,1.5,0,0,1,1.5-1.5,1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,16.11a1,1,0,0,0,1.1,1.68,4.3,4.3,0,0,0,1.65-5.18l.13.13a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.56-.56A4.25,4.25,0,0,0,20.2,9.5H21a1,1,0,0,0,0-2Zm-3.34,2.65h0a2.45,2.45,0,0,1-.6.41A4.17,4.17,0,0,0,16,10a6.12,6.12,0,0,0-2.09-2.49,2.25,2.25,0,0,1,.46-.69h0a2.42,2.42,0,0,1,3.29,0h0a2.37,2.37,0,0,1,0,3.3Z'
  }));
};

UilCloudSunTear.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudSunTear.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudSunTear;