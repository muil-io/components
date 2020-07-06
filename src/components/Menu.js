import React from 'react';
import classNames from 'classnames';

const Menu = ({ vertical, smallVertical, children, style, className }) => (
  <table className={classNames('menu', { vertical, 'small-vertical': smallVertical }, className)} style={style}>
    <tr>
      <td>
        <table>
          <tr>{children}</tr>
        </table>
      </td>
    </tr>
  </table>
);

export default Menu;
