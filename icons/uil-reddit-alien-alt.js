import React from 'react';
import PropTypes from 'prop-types';

const UilRedditAlienAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-reddit-alien-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M14.41016,16.86719A3.375,3.375,0,0,1,12.042,17.5a3.36829,3.36829,0,0,1-2.36523-.63184,1.00059,1.00059,0,0,0-1.416,1.41407A5.11054,5.11054,0,0,0,12.042,19.5a5.12,5.12,0,0,0,3.78223-1.2168,1.00058,1.00058,0,1,0-1.41406-1.416ZM9.2005,15.00165a1,1,0,1,0-1.0003-.9997A1.00079,1.00079,0,0,0,9.2005,15.00165Zm6-2a1,1,0,1,0,.9997,1.0003A1.00138,1.00138,0,0,0,15.2005,13.00165ZM23,11.78027a3.77157,3.77157,0,0,0-6.794-2.26471,16.50461,16.50461,0,0,0-3.05005-.47851l.85578-5.705,2.08752.70984a2.99694,2.99694,0,0,0,5.99353-.06433V3.95508a3.02886,3.02886,0,0,0-3-2.95508,2.97689,2.97689,0,0,0-2.33209,1.155L13.52246,1.05371a.999.999,0,0,0-1.31152.79785L11.13446,9.027A16.66426,16.66426,0,0,0,7.794,9.51556a3.76753,3.76753,0,0,0-6.22492,4.23487A4.86206,4.86206,0,0,0,1,16c0,3.9248,4.832,7,11,7s11-3.0752,11-7a4.86217,4.86217,0,0,0-.56866-2.2489A3.78344,3.78344,0,0,0,23,11.78027ZM19.09277,3a1,1,0,1,1-1,1A1.01672,1.01672,0,0,1,19.09277,3ZM4.78027,10a1.75976,1.75976,0,0,1,.88172.24951A9.97889,9.97889,0,0,0,3.0141,11.9234c-.004-.04785-.0141-.095-.0141-.14313A1.78255,1.78255,0,0,1,4.78027,10ZM12,21c-4.87891,0-9-2.29-9-5s4.12109-5,9-5,9,2.29,9,5S16.87891,21,12,21Zm8.9859-9.07654A9.97805,9.97805,0,0,0,18.338,10.24951,1.75993,1.75993,0,0,1,19.21973,10,1.78255,1.78255,0,0,1,21,11.78027C21,11.82837,20.98993,11.87561,20.9859,11.92346Z'
  }));
};

UilRedditAlienAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilRedditAlienAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilRedditAlienAlt;