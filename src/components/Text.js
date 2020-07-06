import React from 'react';
import classNames from 'classnames';

export const Text = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <p
    style={style}
    className={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </p>
);

export const Header1 = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <h1
    style={style}
    className={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </h1>
);

export const Header2 = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <h2
    style={style}
    className={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </h2>
);

export const Header3 = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <h3
    style={style}
    cclassName={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </h3>
);

export const Header4 = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <h4
    style={style}
    className={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </h4>
);

export const Header5 = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <h5
    style={style}
    className={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </h5>
);

export const Header6 = ({ align = 'left', smallAlign, children, style, className, ...props }) => (
  <h6
    style={style}
    className={classNames(`text-${align}`, `small-text-${smallAlign ?? align}`, className)}
    {...{ ...props }}
  >
    {children}
  </h6>
);
