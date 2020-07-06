import React from 'react';
import { StyleProvider, Container, Row, Column } from '../src/components';
import Layout from './Layout';

const Grid = () => (
  <Layout>
    <StyleProvider>
      Container
      <Container radius="6px">All the rows go here</Container>
      <br />
      Row
      <Container>
        <Row>Columns goes here</Row>
      </Container>
      <br />
      Columns
      <Container>
        <Row>
          <Column>This is a column. Columns contain your content.</Column>
        </Row>
      </Container>
      <br />
      Sizing
      <Container>
        <Row>
          <Column large="4" small="12">
            One
          </Column>
          <Column large="4" small="12">
            Two
          </Column>
          <Column large="4" small="12">
            Three
          </Column>
        </Row>
      </Container>
      <br />
      Collapsing
      <Container>
        <Row collapse>
          <Column large="6">
            <img src="https://placehold.it/300x150/777777/&text=These columns touch" alt="" />
          </Column>
          <Column large="6">
            <img src="https://placehold.it/300x150/999999/&text=These columns touch" alt="" />
          </Column>
        </Row>
      </Container>
      <br />
      Offsets
      <Container>
        <Row>
          <Column large="3" largeOffset="3">
            <img src="https://placehold.it/150x150/999999/&text=offset column" alt="" />
          </Column>
          <Column large="3">
            <img src="https://placehold.it/150x150/999999" alt="" />
          </Column>
        </Row>
      </Container>
    </StyleProvider>
  </Layout>
);

Grid.displayName = 'Grid';

export default Grid;
