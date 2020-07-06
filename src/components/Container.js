import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { getStyle } from '../utils';

const Wrapper = styled.table`
  background: ${(props) => getStyle(props, 'containerBackground')};

  ${(props) =>
    props.containerRadius &&
    `
      border-radius: ${getStyle(props, 'containerRadius')};
      border-collapse: separate;
  `}
`;

const Container = ({ background, radius, children, style, className }) => (
  <Wrapper
    align="center"
    className={classNames('container', className)}
    containerBackground={background}
    containerRadius={radius}
    style={style}
  >
    <tbody>
      <tr>
        <td>{children}</td>
      </tr>
    </tbody>
  </Wrapper>
);

export default Container;
