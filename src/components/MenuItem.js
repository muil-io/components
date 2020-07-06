import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { getStyle } from '../utils';

const Wrapper = styled.th`
  padding: ${(props) => getStyle(props, 'menuItemPadding')};
  padding-right: ${(props) => (props.theme.vertical ? 0 : getStyle(props, 'menuItemGutter'))};

  a {
    color: ${(props) => getStyle(props, 'menuItemColor')};
  }
`;

const MenuItem = ({ href, padding, gutter, color, vertical, children, style, className }) => (
  <Wrapper
    className={classNames('menu-item', className)}
    menuItemPadding={padding}
    menuItemGutter={gutter}
    menuItemColor={color}
    vertical={vertical}
    style={style}
  >
    <a href={href}>{children}</a>
  </Wrapper>
);

export default MenuItem;
