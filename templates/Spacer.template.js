import React from 'react';
import { StyleProvider, Container, Spacer, Text } from '../src/components';
import Layout from './Layout';

const SpacerExample = () => (
  <Layout>
    <StyleProvider>
      <Container>
        <Text>Stuff on top</Text>
        <Spacer size="100" />
        <Text>Stuff on bottom</Text>

        <Text>Stuff above...</Text>
        <Spacer sizeSmall={40} sizeLarge={100} />
        <Text>...stuff below.</Text>
      </Container>
    </StyleProvider>
  </Layout>
);

SpacerExample.displayName = 'Spacer';

export default SpacerExample;
