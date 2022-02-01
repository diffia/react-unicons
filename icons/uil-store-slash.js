import React from 'react';
import PropTypes from 'prop-types';

const UilStoreSlash = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-store-slash',
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.7002,4h9.62255l1.66163,4.15436A1.995,1.995,0,0,1,16,8a1,1,0,0,0-2,0,1.82572,1.82572,0,0,1-.13428.7085.99968.99968,0,0,0,.543,1.30566.94684.94684,0,0,0,.17438.03485A3.988,3.988,0,0,0,18,12v1.2998a1,1,0,0,0,2,0V11.44354A3.98539,3.98539,0,0,0,21.99609,8.0387c.00037-.00934.00263-.018.00275-.02741L22,8a.949.949,0,0,0-.03455-.171.95216.95216,0,0,0-.03674-.20062l-2-5A1.00073,1.00073,0,0,0,19,2H8.7002a1,1,0,1,0,0,2ZM22.707,21.293l-2.9331-2.93311a.94279.94279,0,0,0-.15363-.15362L9.67,8.256a.97257.97257,0,0,0-.20629-.2063L5.18219,3.76813a.9629.9629,0,0,0-.12793-.12793L2.707,1.293A.99989.99989,0,0,0,1.293,2.707L3.25653,4.67059,2.07867,7.61066l-.00012.0003-.00677.017a.953.953,0,0,0-.03473.18854A.94823.94823,0,0,0,2,8l.00116.01154.0025.02441A3.98555,3.98555,0,0,0,4,11.44354V21a1,1,0,0,0,1,1H19a.99324.99324,0,0,0,.93042-.65552L21.293,22.707A.99989.99989,0,0,0,22.707,21.293ZM4.01556,8.15375l.7782-1.94593L7.67,9.08405A1.97241,1.97241,0,0,1,6,10,1.99575,1.99575,0,0,1,4.01556,8.15375ZM9,15v5H6V12a3.96371,3.96371,0,0,0,3.10217-1.48376L12.58594,14H10A1,1,0,0,0,9,15Zm4,5H11V16h2Zm5,0H15V16.41406l3,3Z'
  }));
};

UilStoreSlash.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilStoreSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilStoreSlash;