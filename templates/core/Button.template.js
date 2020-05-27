import React from 'react';
import { Button as BaseButton } from '../../src/core';
import Layout from './Layout';

const Button = () => (
  <Layout>
    <BaseButton to="https://muil.io">Primary</BaseButton>
  </Layout>
);

Button.displayName = 'Button';

export default Button;
