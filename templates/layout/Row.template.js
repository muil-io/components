import React from 'react';
import styled from 'styled-components';
import { Row as BaseRow } from '../../src/layout';
import Layout from './Layout';

const Cell = styled.div`
  width: 33%;
`;

const Row = () => (
  <Layout>
    <BaseRow>
      <Cell>Cell 1</Cell>
      <Cell>Cell 2</Cell>
      <Cell>Cell 3</Cell>
    </BaseRow>
  </Layout>
);

Row.displayName = 'Row';

export default Row;
