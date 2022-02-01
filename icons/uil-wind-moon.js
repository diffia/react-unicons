import React from 'react';
import PropTypes from 'prop-types';

const UilWindMoon = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-wind-moon',
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,19H7a1,1,0,0,0,0,2h5a1.01348,1.01348,0,0,1,1,1,1,1,0,0,0,2,0A3.00328,3.00328,0,0,0,12,19ZM14,9a1,1,0,1,0-1-1A1,1,0,0,0,14,9Zm4,0h2a3.00328,3.00328,0,0,0,3-3,1,1,0,0,0-2,0,1.01348,1.01348,0,0,1-1,1H18a1,1,0,0,0,0,2Zm2,6H17.83868a8.04287,8.04287,0,0,0,1.14667-2.9502,1.00038,1.00038,0,0,0-1.30566-1.11718,5.96932,5.96932,0,0,1-1.91992.31738A6.06179,6.06179,0,0,1,9.7002,5.2002a7.15542,7.15542,0,0,1,.09765-1.04883A.99925.99925,0,0,0,8.49023,3.05273,8.03194,8.03194,0,0,0,4.26587,15H3a1,1,0,0,0,0,2H8a1,1,0,0,0,0-2H6.83051a6.028,6.028,0,0,1,.8814-9.36035A8.06544,8.06544,0,0,0,15.75977,13.25a7.87832,7.87832,0,0,0,.78906-.03906A6.02734,6.02734,0,0,1,15.27728,15H12a1,1,0,0,0,0,2h8a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM2.62012,19.08008a1.14718,1.14718,0,0,0-.33008.21A1.02776,1.02776,0,0,0,2,20a.98979.98979,0,0,0,1.37988.91992A1.16044,1.16044,0,0,0,3.71,20.71.99349.99349,0,0,0,4,20a1.05232,1.05232,0,0,0-.29-.71A1.00157,1.00157,0,0,0,2.62012,19.08008Z'
  }));
};

UilWindMoon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWindMoon.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWindMoon;