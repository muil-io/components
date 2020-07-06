import React from 'react';
import { StyleProvider, Button } from '../src/components';
import Layout from './Layout';

const Buttons = () => (
  <Layout>
    <StyleProvider>
      Sizing
      <Button href="#">Button</Button>
      <Button href="#" tiny>
        Tiny Button
      </Button>
      <Button href="#" small>
        Small Button
      </Button>
      <Button href="#">Default Button</Button>
      <Button href="#" large>
        Large Button
      </Button>
      <br />
      Expanded
      <Button href="#" expanded>
        Expanded Button
      </Button>
      <Button href="#" smallExpanded>
        Expand small only
      </Button>
      <br />
      Coloring
      <Button href="#" secondary>
        Secondary Button
      </Button>
      <Button href="#" success>
        Success Button
      </Button>
      <Button href="#" warning>
        Warning Button
      </Button>
      <Button href="#" alert>
        Alert Button
      </Button>
      <br />
      Radius And Round
      <Button href="#" radius>
        Radius
      </Button>
      <Button href="#" rounded>
        Round
      </Button>
    </StyleProvider>
  </Layout>
);

Buttons.displayName = 'Buttons';

export default Buttons;
