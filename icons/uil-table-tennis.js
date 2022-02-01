import React from 'react';
import PropTypes from 'prop-types';

const UilTableTennis = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-table-tennis',
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.71,16.1l-1.64-1.64a.94.94,0,0,1-.22-1.07A5.78,5.78,0,0,0,19.39,11a.36.36,0,0,0,0-.1,5.74,5.74,0,0,0-1.06-3.34,14.17,14.17,0,0,0-5.17-4.42,7,7,0,0,0-8,1.31l-.67.67a7,7,0,0,0-1.31,8.05l.1.17a3,3,0,0,0-.84,2.06A3,3,0,0,0,7,17.94c.18.14.34.29.52.42A5.55,5.55,0,0,0,8.74,19l.09,0c.18.07.37.13.57.19l.15,0a5.08,5.08,0,0,0,.95.15l.28,0h.12l.22,0c.21,0,.41,0,.62-.06h.17l0,0a5.46,5.46,0,0,0,1.42-.45,1,1,0,0,1,1.07.21l1.46,1.46a3.4,3.4,0,0,0,2.39,1,2.85,2.85,0,0,0,2-.85l.38-.38A3,3,0,0,0,20.71,16.1Zm-15.3.32a1,1,0,1,1,1-1A1,1,0,0,1,5.41,16.42Zm3.1.14-.26-.2a2.94,2.94,0,0,0,.16-.94,3,3,0,0,0-3-3c-.13,0-.25,0-.38,0l-.09-.16a5,5,0,0,1,.93-5.75l.67-.67A5,5,0,0,1,12.28,5a12,12,0,0,1,4.26,3.57Zm10.78,2.37-.37.38c-.42.42-1.07.34-1.61-.2l-1.46-1.45a3,3,0,0,0-3.34-.61,3.39,3.39,0,0,1-1,.31,2.84,2.84,0,0,1-.58.05l-.34,0h-.1l6.87-6.87a3.8,3.8,0,0,1-.34,2h0a3,3,0,0,0,.61,3.34l1.64,1.65A1,1,0,0,1,19.29,18.93Z'
  }));
};

UilTableTennis.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTableTennis.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTableTennis;