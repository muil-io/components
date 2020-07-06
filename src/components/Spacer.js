import React from 'react';
import classNames from 'classnames';

const Spacer = ({ size, sizeSmall, sizeLarge, style, className }) => (
  <>
    {size && (
      <table className={classNames('spacer', className)} style={style}>
        <tbody>
          <tr>
            <td height={`${size}px`} style={{ fontSize: `${size}px`, lineHeight: `${size}px` }}>
              &#xA0;
            </td>
          </tr>
        </tbody>
      </table>
    )}

    {!size && sizeSmall && (
      <table className={classNames('spacer', 'hide-for-large', className)} style={style}>
        <tbody>
          <tr>
            <td height={`${sizeSmall}px`} style={{ fontSize: `${sizeSmall}px`, lineHeight: `${sizeSmall}px` }}>
              &#xA0;
            </td>
          </tr>
        </tbody>
      </table>
    )}

    {!size && sizeLarge && (
      <table className={classNames('spacer', 'show-for-large', className)} style={style}>
        <tbody>
          <tr>
            <td height={`${sizeLarge}px`} style={{ fontSize: `${sizeLarge}px`, lineHeight: `${sizeLarge}px` }}>
              &#xA0;
            </td>
          </tr>
        </tbody>
      </table>
    )}
  </>
);

export default Spacer;
