import React from 'react';
import {
  StyleProvider,
  Container,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Text,
} from '../src/components';
import Layout from './Layout';

const Typography = () => (
  <Layout>
    <StyleProvider>
      <Container>
        <Header1>Header1</Header1>
        <Header2>Header2</Header2>
        <Header3>Header3</Header3>
        <Header4>Header4</Header4>
        <Header5>Header5</Header5>
        <Header6>Header1</Header6>
        <Text>Text</Text>
      </Container>
    </StyleProvider>
  </Layout>
);

Typography.displayName = 'Typography';

export default Typography;
