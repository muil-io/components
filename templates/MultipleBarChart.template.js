import React from 'react';
import styled from 'styled-components';
import BaseBarChart from '../src/BarChart';
import Layout from './Layout';

const Text = styled.div`
  font-family: Arial;
`;

const StyledBarChart = styled(BaseBarChart)`
  margin: 0 auto;
`;

const MultipleBarChart = ({ height, series, categories }) => (
  <Layout>
    <Text>Multiple Bar Chart</Text>

    <StyledBarChart series={series} categories={categories} height={height} legend />
  </Layout>
);

MultipleBarChart.displayName = 'Multiple Bar Chart';

MultipleBarChart.dynamicProps = {
  height: 300,
  categories: [
    { label: 'One Week', color: '#17a2b8' },
    { label: '2 Weeks', color: '#d5d5d4' },
    { label: 'One Month', color: '#90ED7D' },
  ],
  series: [
    {
      label: 'Rick & Morty',
      data: [53, 31, 25],
    },
    {
      label: 'BoJack Horseman',
      data: [13, 25, 94],
    },
    {
      label: '100 Humans',
      data: [26, 56, 37],
    },
  ],
};

export default MultipleBarChart;
