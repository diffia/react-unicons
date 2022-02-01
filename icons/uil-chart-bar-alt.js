import React from 'react';
import PropTypes from 'prop-types';

const UilChartBarAlt = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-chart-bar-alt',
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,20H4V18H7a1,1,0,0,0,0-2H4V14H15a1,1,0,0,0,0-2H4V10h7a1,1,0,0,0,0-2H4V6H19a1,1,0,0,0,0-2H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z'
  }));
};

UilChartBarAlt.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilChartBarAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilChartBarAlt;