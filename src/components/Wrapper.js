import React from 'react';
import classNames from 'classnames';

const FullWidthBackground = ({ bgcolor, children, style, className, innerStyle, innerClassName }) => (
  <table className={classNames('wrapper', className)} align="center" bgcolor={bgcolor} style={style}>
    <tr>
      <td lassName={classNames('wrapper-inner', innerClassName)} style={innerStyle}>
        {children}
      </td>
    </tr>
  </table>
);

export default FullWidthBackground;
