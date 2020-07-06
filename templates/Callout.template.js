import React from 'react';
import { StyleProvider, Row, Column, Text, Callout } from '../src/components';
import Layout from './Layout';

const CalloutExample = () => (
  <Layout>
    <StyleProvider>
      <br />
      Basics
      <Row>
        <Column small="6">
          <Text>Not in a callout :(</Text>
        </Column>
        <Column small="6">
          <Callout secondary>
            <Text>I am in a callout!</Text>
          </Callout>
        </Column>
      </Row>
      <Callout primary>
        <Row>
          <Column small="12">
            <Text>This whole row is in a callout!</Text>
          </Column>
        </Row>
      </Callout>
      <br />
      Coloring
      <Callout>
        <Text>
          Successfully avoided Kraken. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </Text>
      </Callout>
      <Callout primary>
        <Text>
          Successfully avoided Kraken. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </Text>
      </Callout>
      <Callout success>
        <Text>
          Successfully avoided Kraken. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </Text>
      </Callout>
      <Callout warning>
        <Text>
          There may be Krakens around. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </Text>
      </Callout>
      <Callout alert>
        <Text>
          Incoming Kraken! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
      </Callout>
    </StyleProvider>
  </Layout>
);

CalloutExample.displayName = 'Callout';

export default CalloutExample;
