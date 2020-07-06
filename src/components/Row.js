import React from 'react';
import classNames from 'classnames';

const Row = ({ collapse, children, style, className }) => (
  <table style={style} className={classNames('row', { collapse }, className)}>
    <tbody>
      <tr>
        {React.Children.map(children, (child, index) => {
          return React.isValidElement(child)
            ? React.cloneElement(child, {
                first: index === 0,
                last: Array.isArray(children) ? index === children.length - 1 : true,
                colCount: Array.isArray(children) ? children.length : 1,
              })
            : child;
        })}
      </tr>
    </tbody>
  </table>
);

export default Row;
