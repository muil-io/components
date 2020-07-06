/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classNames from 'classnames';

const Image = ({
  center,
  alignLeft,
  alignRight,
  smallCenter,
  smallAlignLeft,
  smallAlignRight,
  style,
  className,
  ...props
}) => (
  <img
    style={style}
    className={classNames(
      {
        'float-center': center,
        'small-float-center': smallCenter ?? center,
        'float-left': alignLeft,
        'small-float-left': smallAlignLeft ?? alignLeft,
        'float-right': alignRight,
        'small-float-right': smallAlignRight ?? alignRight,
      },
      className,
    )}
    {...props}
  />
);

export default Image;
