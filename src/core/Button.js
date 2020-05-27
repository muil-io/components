import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  background: #6735e0;
  color: #fff;
  text-decoration: none;
  padding: 12px 32px;
  border-radius: 4px;
`;

const Button = ({ to, target = '_blank', children }) => (
  <Wrapper href={to} target={target}>
    {children}
  </Wrapper>
);

export default Button;
