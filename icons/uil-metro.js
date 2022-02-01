import React from 'react';
import PropTypes from 'prop-types';

const UilMetro = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-metro',
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.71,14.29a1.00157,1.00157,0,0,0-1.08984-.21.90087.90087,0,0,0-.54.54,1.00008,1.00008,0,1,0,1.83984,0A1.14718,1.14718,0,0,0,8.71,14.29Zm8,0a1.04669,1.04669,0,0,0-1.41992,0,1.14718,1.14718,0,0,0-.21.33008A.98919.98919,0,0,0,15.29,15.71a1.14718,1.14718,0,0,0,.33008.21.94107.94107,0,0,0,.75976,0,1.16044,1.16044,0,0,0,.33008-.21.98919.98919,0,0,0,.21-1.08984A1.14718,1.14718,0,0,0,16.71,14.29Zm2.59943,4.60528a4.97014,4.97014,0,0,0,1.78436-4.8172l-1.5-8A5.00038,5.00038,0,0,0,14.68066,2H9.31934A5.00038,5.00038,0,0,0,4.40625,6.07812l-1.5,8a4.97014,4.97014,0,0,0,1.78436,4.8172L3.293,20.293A.99989.99989,0,1,0,4.707,21.707l1.86914-1.86914A5.00576,5.00576,0,0,0,7.81934,20h8.36132a5.00576,5.00576,0,0,0,1.24317-.16211L19.293,21.707A.99989.99989,0,0,0,20.707,20.293ZM6.37109,6.44727A3.0021,3.0021,0,0,1,9.31934,4h5.36132a3.0021,3.0021,0,0,1,2.94825,2.44727l.34668,1.84893a7.95514,7.95514,0,0,1-11.95118,0ZM18.48828,16.916A2.9899,2.9899,0,0,1,16.18066,18H7.81934a3.00057,3.00057,0,0,1-2.94825-3.55273l.71106-3.79236a9.95447,9.95447,0,0,0,12.8357,0l.71106,3.79236A2.99028,2.99028,0,0,1,18.48828,16.916Z'
  }));
};

UilMetro.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMetro.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMetro;