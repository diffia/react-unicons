import React from 'react';
import PropTypes from 'prop-types';

const UilQuestion = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-question',
    ...otherProps
  }, React.createElement('path', {
    d: 'M15.33252,9.5A3.5001,3.5001,0,0,0,8.80127,7.75a1.00016,1.00016,0,0,0,1.73242,1A1.50266,1.50266,0,0,1,11.83252,8a1.5,1.5,0,1,1,0,3h-.00244a.94984.94984,0,0,0-.18927.0387,1.03181,1.03181,0,0,0-.19861.04065.98275.98275,0,0,0-.15552.10485,1.00813,1.00813,0,0,0-.162.10975,1.00464,1.00464,0,0,0-.11706.1737.97789.97789,0,0,0-.09668.14417,1.02252,1.02252,0,0,0-.04285.21191A.94847.94847,0,0,0,10.83252,12v1l.00232.01135.0011.49109a1.00016,1.00016,0,0,0,1,.99756h.00244a1.00006,1.00006,0,0,0,.99756-1.00244l-.00153-.66138A3.49363,3.49363,0,0,0,15.33252,9.5Zm-4.20264,6.79A1,1,0,0,0,11.82959,18a1.036,1.036,0,0,0,.71045-.29,1.01517,1.01517,0,0,0,0-1.41992A1.03425,1.03425,0,0,0,11.12988,16.29Z'
  }));
};

UilQuestion.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilQuestion.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilQuestion;