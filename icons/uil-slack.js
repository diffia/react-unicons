import React from 'react';
import PropTypes from 'prop-types';

const UilSlack = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-slack',
    ...otherProps
  }, React.createElement('path', {
    d: 'M2,14.67a2,2,0,1,0,4,0v-2H4A2,2,0,0,0,2,14.67Zm12.64-3.34a2,2,0,0,0,2-2V4a2,2,0,1,0-4,0V9.33A2,2,0,0,0,14.66,11.33Zm7.32-2a2,2,0,1,0-4,0v2h2A2,2,0,0,0,22,9.33ZM9.34,12.67a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V14.67A2,2,0,0,0,9.34,12.67ZM14.66,18h-2v2a2,2,0,1,0,2-2ZM20,12.67H14.66a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4ZM9.34,7.33H4a2,2,0,1,0,0,4H9.34a2,2,0,0,0,0-4ZM9.34,2a2,2,0,0,0,0,4h2V4A2,2,0,0,0,9.34,2Z'
  }));
};

UilSlack.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSlack.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSlack;