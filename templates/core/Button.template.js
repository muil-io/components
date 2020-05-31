import React from 'react';
import styled from 'styled-components';
import { Button as BaseButton } from '../../src/core';
import Layout from './Layout';

const StyledButton = styled(BaseButton)`
  background: #242424;
`;

const Button = ({ to, target, children }) => (
  <Layout>
    <BaseButton to={to} target={target}>
      {children}
    </BaseButton>

    <br />
    <br />

    <StyledButton to={to} target={target}>
      {children}
    </StyledButton>
  </Layout>
);

Button.displayName = 'Button';

Button.dynamicProps = {
  to: 'https://muil.io',
  children: 'Button Text',
  target: '_blank',
};

export default Button;
