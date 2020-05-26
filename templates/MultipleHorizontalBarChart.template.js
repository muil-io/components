import React from 'react';
import styled from 'styled-components';
import BaseHorizontalBarChart from '../src/HorizontalBarChart';
import Layout from './Layout';

const Text = styled.div`
  font-family: Arial;
`;

const StyledHorizontalBarChart = styled(BaseHorizontalBarChart)`
  margin: 0 auto;
`;

const BarChart = ({ color, maxWidth, categories, series }) => (
  <Layout>
    <Text>Horizontal Bar Chart</Text>

    <StyledHorizontalBarChart color={color} maxWidth={maxWidth} legend categories={categories} series={series} />
  </Layout>
);

BarChart.displayName = 'Multiple Horizontal Bar Chart';

BarChart.dynamicProps = {
  color: '#17a2b8',
  maxWidth: 400,
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

export default BarChart;
