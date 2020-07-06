import React from 'react';
import { StyleProvider, Container, Row, Column, Text, Center, Image, Button, Header4 } from '../src/components';
import Layout from './Layout';

const Alignment = () => (
  <Layout>
    <StyleProvider>
      Text Alignment
      <Container>
        <Row>
          <Column>
            <Text align="left">Left (default)</Text>
          </Column>
          <Column>
            <Text align="center">center</Text>
          </Column>
          <Column>
            <Text align="right">right</Text>
          </Column>
        </Row>
      </Container>
      <Container>
        <Row>
          <Column>
            <Text smallAlign="left">Left on small</Text>
          </Column>
          <Column>
            <Text smallAlign="center">Center on small</Text>
          </Column>
          <Column>
            <Text smallAlign="right">Right on small</Text>
          </Column>
        </Row>
      </Container>
      <br />
      Centering Images
      <Container>
        <Row>
          <Column>
            <Center>
              <Image src="https://placehold.it/200?text=center" alt="image of clever meme that made me chuckle" />
            </Center>
          </Column>
        </Row>
      </Container>
      <br />
      Aligning Images
      <Container>
        <Row>
          <Column>
            <Image alignLeft src="https://placehold.it/200?text=left" alt="" />
            <Image center src="https://placehold.it/200?text=center" alt="" />
            <Image alignRight src="https://placehold.it/200?text=right" alt="" />
          </Column>
        </Row>
      </Container>
      <br />
      Centering Button
      <Container>
        <Row>
          <Column>
            <Center>
              <Button href="#">Centered Button</Button>
            </Center>
          </Column>
        </Row>
      </Container>
      <br />
      Centering Columns
      <Container>
        <Row>
          <Column />
          <Column>Centering a column</Column>
          <Column />
        </Row>
        <Row>
          <Column />
          <Column small="3">Centering a column</Column>
          <Column />
        </Row>
        <Row>
          <Column />
          <Column small="7">Centering a column</Column>
          <Column />
        </Row>
      </Container>
      <br />
      Vertical Alignment
      <Container>
        <Row>
          <Column large="3" valign="top">
            <Image alignRight src="https://placehold.it/50" alt="" />
          </Column>
          <Column large="3" valign="bottom">
            <Header4>Bottom</Header4>
          </Column>
          <Column large="3" valign="middle">
            <Header4 style={{ marginBottom: 0 }} align="right">
              HEADLINE
            </Header4>
            <Text style={{ marginBottom: 0 }} align="right">
              SUBHEADLINE
            </Text>
          </Column>
          <Column large="3" valign="middle">
            <Image center src="https://placehold.it/250" alt="" />
          </Column>
        </Row>
      </Container>
    </StyleProvider>
  </Layout>
);

Alignment.displayName = 'Alignment';

export default Alignment;
