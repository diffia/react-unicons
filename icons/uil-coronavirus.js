import React from 'react';
import PropTypes from 'prop-types';

const UilCoronavirus = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-coronavirus',
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.5,9A1.5,1.5,0,1,0,11,10.5,1.5,1.5,0,0,0,9.5,9ZM9,14a1,1,0,1,0,1,1A1,1,0,0,0,9,14Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,15,8Zm-.5,4A1.5,1.5,0,1,0,16,13.5,1.5,1.5,0,0,0,14.5,12ZM22,11H20.941a8.95168,8.95168,0,0,0-1.916-4.6109l.75336-.75336a.99989.99989,0,0,0-1.41406-1.41406L17.6109,4.975A8.95168,8.95168,0,0,0,13,3.059V2a1,1,0,0,0-2,0V3.059A8.95168,8.95168,0,0,0,6.3891,4.975l-.75336-.75336A.99989.99989,0,0,0,4.22168,5.63574L4.975,6.3891A8.95168,8.95168,0,0,0,3.059,11H2a1,1,0,0,0,0,2H3.059a8.95168,8.95168,0,0,0,1.916,4.6109l-.75336.75336a.99989.99989,0,1,0,1.41406,1.41406L6.3891,19.025A8.95168,8.95168,0,0,0,11,20.941V22a1,1,0,0,0,2,0V20.941a8.95168,8.95168,0,0,0,4.6109-1.916l.75336.75336a.99989.99989,0,0,0,1.41406-1.41406L19.025,17.6109A8.95168,8.95168,0,0,0,20.941,13H22a1,1,0,0,0,0-2Zm-4,2h.92017A7.00413,7.00413,0,0,1,13,18.92017V17a1,1,0,0,0-2,0v1.92017A7.00413,7.00413,0,0,1,5.07983,13H6a1,1,0,0,0,0-2H5.07983A7.00413,7.00413,0,0,1,11,5.07983V7a1,1,0,0,0,2,0V5.07983A7.00413,7.00413,0,0,1,18.92017,11H18a1,1,0,0,0,0,2Z'
  }));
};

UilCoronavirus.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCoronavirus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCoronavirus;