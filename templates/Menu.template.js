import React from 'react';
import { StyleProvider, Container, Menu, MenuItem } from '../src/components';
import Layout from './Layout';

const MenuExample = () => (
  <Layout>
    <StyleProvider>
      Basics
      <Container>
        <Menu>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
        </Menu>
      </Container>
      <br />
      Vertical Menu
      <Container>
        <Menu vertical>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
        </Menu>
      </Container>
      <br />
      Small Vertical Menu
      <Container>
        <Menu smallVertical>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
          <MenuItem href="https://www.muil.io">Item</MenuItem>
        </Menu>
      </Container>
    </StyleProvider>
  </Layout>
);

MenuExample.displayName = 'Menu';

export default MenuExample;
