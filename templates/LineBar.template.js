import React from 'react';
import styled from 'styled-components';
import BaseLineBar from '../src/LineBar';
import Layout from './Layout';

const Text = styled.div`
  font-family: Arial;
`;

const StyledLineBar = styled(BaseLineBar)`
  margin: 20px 0;
`;

const LineBar = ({ percents }) => (
  <Layout>
    <Text>Line Bar</Text>

    <StyledLineBar percents={percents} />
  </Layout>
);

LineBar.displayName = 'Line Bar';

LineBar.dynamicProps = {
  percents: [
    { value: 10, color: '#17a2b8' },
    { value: 20, color: '#d5d5d4' },
    { value: 70, color: '#90ED7D' },
  ],
};

export default LineBar;
