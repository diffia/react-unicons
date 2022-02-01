import React from 'react';
import PropTypes from 'prop-types';

const UilHindiToChinese = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-hindi-to-chinese',
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.022,2h-2a1,1,0,0,0,0,2V6H7.83771A2.96481,2.96481,0,0,0,8.022,5,3,3,0,0,0,2.42383,3.5a1.00016,1.00016,0,1,0,1.73242,1A1.00171,1.00171,0,0,1,5.022,4a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,0,1,0,2,1.00171,1.00171,0,0,1-.86572-.5,1.00016,1.00016,0,1,0-1.73242,1A3,3,0,0,0,8.022,9a2.96481,2.96481,0,0,0-.18426-1H9.022v3a1,1,0,0,0,2,0V4a1,1,0,0,0,0-2Zm3,5h1a1.0013,1.0013,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.0013,1.0013,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Zm11-1a1,1,0,0,0,0-2h-3v-.5a1,1,0,0,0-2,0V13h-3a1,1,0,0,0,0,2h5.18427a6.72756,6.72756,0,0,1-1.22553,2.52667,6.66828,6.66828,0,0,1-.62915-.98272.99972.99972,0,1,0-1.77929.9121,8.67791,8.67791,0,0,0,.9591,1.468A6.6182,6.6182,0,0,1,13.10645,20.023a1.00008,1.00008,0,0,0,.42675,1.9541,8.63506,8.63506,0,0,0,3.445-1.62164,8.72368,8.72368,0,0,0,3.46857,1.62115,1,1,0,1,0,.43066-1.95312,6.72477,6.72477,0,0,1-2.4461-1.09009A8.73637,8.73637,0,0,0,20.24371,15Z'
  }));
};

UilHindiToChinese.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHindiToChinese.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHindiToChinese;