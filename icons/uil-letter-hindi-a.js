import React from 'react';
import PropTypes from 'prop-types';

const UilLetterHindiA = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-letter-hindi-a',
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.022,3h-5a1,1,0,0,0,0,2h1.5v6H11.57208a4.95124,4.95124,0,0,0,1.02558-3A5,5,0,0,0,3.26758,5.5.99974.99974,0,1,0,4.999,6.5,3.00021,3.00021,0,1,1,7.59766,11a1,1,0,0,0,0,2A3,3,0,1,1,4.999,17.5a.99974.99974,0,0,0-1.73144,1A5,5,0,0,0,12.59766,16a4.95124,4.95124,0,0,0-1.02558-3H16.522v7a1,1,0,0,0,2,0V5h1.5a1,1,0,0,0,0-2Z'
  }));
};

UilLetterHindiA.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLetterHindiA.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLetterHindiA;