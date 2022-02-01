import React from 'react';
import PropTypes from 'prop-types';

const UilDocumentLayoutLeft = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-document-layout-left',
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,12H9a1,1,0,0,0,1-1V5A1,1,0,0,0,9,4H3A1,1,0,0,0,2,5v6A1,1,0,0,0,3,12ZM4,6H8v4H4Zm9,2h8a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Zm0,10H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z'
  }));
};

UilDocumentLayoutLeft.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDocumentLayoutLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDocumentLayoutLeft;