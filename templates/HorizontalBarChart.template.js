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

const BarChart = ({ maxWidth, series, categories }) => (
  <Layout>
    <Text>Horizontal Bar Chart</Text>

    <StyledHorizontalBarChart maxWidth={maxWidth} categories={categories} series={series} />
  </Layout>
);

BarChart.displayName = 'Horizontal Bar Chart';

BarChart.dynamicProps = {
  maxWidth: 400,
  categories: [{ color: '#17a2b8' }],
  series: [
    { value: 50, label: '2017' },
    { value: 30, label: '2018' },
    { value: 20, label: '2019' },
    { value: 2, label: '2020' },
  ],
};

export default BarChart;
