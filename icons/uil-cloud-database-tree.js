import React from 'react';
import PropTypes from 'prop-types';

const UilCloudDatabaseTree = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-cloud-database-tree',
    ...otherProps
  }, React.createElement('path', {
    d: 'M22.5,14.5a2,2,0,0,0-2-2h-6a2,2,0,0,0-2,2h-3v-3h2.33A3.66,3.66,0,0,0,13,4.37,5,5,0,0,0,3.57,5.65,3,3,0,0,0,4.5,11.5h3v8a1,1,0,0,0,1,1h4a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-2a2,2,0,0,0-.28-1,2,2,0,0,0,.28-1Zm-18-5a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,5.84-1,1,1,0,0,0,.78.66A1.65,1.65,0,0,1,13.5,7.83,1.67,1.67,0,0,1,11.83,9.5Zm8,9h-3v-2h3a2,2,0,0,0,.28,1A2,2,0,0,0,12.5,18.5Zm2,2v-2h6v2Zm0-4v-2h6v2Z'
  }));
};

UilCloudDatabaseTree.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudDatabaseTree.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudDatabaseTree;