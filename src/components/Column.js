import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import {gridColumnCount} from '../style/theme';
import { columnPaddingBottom } from '../style/selectors';

const Wrapper = styled.th`
  padding-bottom: ${(props) => columnPaddingBottom(props)};
`;

const Column = ({
  small,
  large,
  smallOffset,
  largeOffset,
  first,
  last,
  valign = 'top',
  paddingBottom,
  colCount,
  children,
  style = {},
  className,
}) => (
  <Wrapper
    className={classNames(
      {
        [`small-offset-${smallOffset}`]: smallOffset,
        [`large-offset-${largeOffset}`]: largeOffset,
        [`small-${small || 12}`]: true,
        [`large-${large || small || Math.floor(gridColumnCount / colCount)}`]: true,
      },
      'columns',
      { first, last },
      className,
    )}
    style={{ ...style, verticalAlign: valign }}
    columnPaddingBottom={paddingBottom}
  >
    <table>
      <tr>
        <th>{children}</th>
        <th className="expander" />
      </tr>
    </table>
  </Wrapper>
);

export default Column;
