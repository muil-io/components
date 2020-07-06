import React from 'react';
import { StyleProvider, Container, Wrapper, Row, Column, Image, Text } from '../src/components';
import Layout from './Layout';

const WrapperExample = () => (
  <Layout>
    <StyleProvider>
      Basics
      <Wrapper>content</Wrapper>
      <br />
      Full Width Header Or Footer
      <Container>
        <Wrapper class="header" bgcolor="#8a8a8a" style={{ background: '#8a8a8a' }}>
          <Container>
            <Row class="collapse">
              <Column small="6" valign="middle">
                <Image src="https://placehold.it/200x50/663399" />
              </Column>
              <Column small="6" valign="middle">
                <Text class="text-right">BASIC</Text>
              </Column>
            </Row>
          </Container>
        </Wrapper>
      </Container>
    </StyleProvider>
  </Layout>
);

WrapperExample.displayName = 'Wrapper';

export default WrapperExample;
