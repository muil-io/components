import React from 'react';
import styled from 'styled-components';
import { Column as BaseColumn } from '../../src/layout';
import Layout from './Layout';

const Cell = styled.div`
  width: 33%;
`;

const Column = () => (
  <Layout>
    <BaseColumn>
      <Cell>Cell 1</Cell>
      <Cell>Cell 2</Cell>
      <Cell>Cell 3</Cell>
    </BaseColumn>
  </Layout>
);

Column.displayName = 'Column';

export default Column;
