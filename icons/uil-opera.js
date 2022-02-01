import React from 'react';
import PropTypes from 'prop-types';

const UilOpera = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-opera',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.9963,2c-5.462,0-9.278,3.95814-9.278,9.899,0,5.28991,3.7112,10.101,9.28549,10.101,5.56676,0,9.27787-4.81857,9.27787-10.101C21.28168,5.95814,17.45831,2,11.9963,2Zm0,18.38381c-3.39693,0-3.77107-5.01309-3.77107-8.7093V11.5997c0-3.99549.59858-8.23042,3.74864-8.23042s3.786,4.3621,3.786,8.3576C15.75987,15.42311,15.39318,20.38381,11.9963,20.38381Z'
  }));
};

UilOpera.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilOpera.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilOpera;