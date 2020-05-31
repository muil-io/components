import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: inline-block;
  background: #6735e0;
  color: #fff;
  text-decoration: none;
  padding: 12px 32px;
  border-radius: 4px;
`;

const Button = ({ to, target = '_blank', children, className }) => (
  <Wrapper href={to} target={target} className={className}>
    {children}
  </Wrapper>
);

export default Button;
