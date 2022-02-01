import React from 'react';
import PropTypes from 'prop-types';

const UilBaseballBall = (props) => {
  const { size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: 'iconscout_react_unicons iconscout_react_unicons_uil-baseball-ball',
    ...otherProps
  }, React.createElement('path', {
    d: 'M13.92188,6.44043a1.00009,1.00009,0,0,0-1.70313,1.04883q.26514.4292.56543.84375a.99994.99994,0,0,0,1.61914-1.17383Q14.147,6.80616,13.92188,6.44043Zm-2.7295,9.22168A1,1,0,1,0,9.583,16.84961c.16992.22949.32715.4668.47558.709a1.0004,1.0004,0,1,0,1.70508-1.04687C11.58594,16.22266,11.39551,15.93848,11.19238,15.66211Zm-3.707-3.42871a.99989.99989,0,0,0-1.04492,1.70508q.36329.22264.71289.47851A1.00029,1.00029,0,1,0,8.33105,12.7998Q7.91651,12.498,7.48535,12.2334Zm10.06055-2.167q-.36475-.22413-.71582-.4795a1.0003,1.0003,0,0,0-1.17774,1.61719q.41456.30176.84668.56738a1.0004,1.0004,0,1,0,1.04688-1.70507ZM18.99219,5.001a9.90088,9.90088,0,1,0,0,14.001A9.91268,9.91268,0,0,0,18.99219,5.001ZM17.71875,17.72852a8.02918,8.02918,0,0,1-4.51563,2.27374.97071.97071,0,0,0-1.74633.07324,8.0616,8.0616,0,0,1-7.535-7.53155.97507.97507,0,0,0,.07282-1.74714,8.0395,8.0395,0,0,1,6.78479-6.79174.99669.99669,0,0,0,.85632.49786,1.02809,1.02809,0,0,0,.22949-.02637.98194.98194,0,0,0,.65912-.54583,8.05437,8.05437,0,0,1,7.53772,7.53869.97244.97244,0,0,0-.07385,1.74085A8.046,8.046,0,0,1,17.71875,17.72852Z'
  }));
};

UilBaseballBall.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBaseballBall.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBaseballBall;