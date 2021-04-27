import React from 'react';
import styled from 'styled-components';
import { StyleProvider, Container, Row, Column } from '../src/components';
import { BarChart, LineBar, Calendar as BaseCalendar } from '../src/charts';

const Calendar = styled(BaseCalendar)`
  .score0 {
    background: #f9600c;
  }
  .score1 {
    background: #fa9453;
  }
  .score2 {
    background: #fae5cf;
  }
`;

const ChartsInContainer = ({ height, legend, categories, series, percents }) => (
  <StyleProvider>
    <Container>
      <Row>
        <Column>
          <BarChart series={series} categories={categories} height={height} legend={legend} />
        </Column>
      </Row>

      <Row>
        <Column>
          <LineBar percents={percents} />
        </Column>

        <Column>
          <LineBar percents={percents} />
        </Column>
      </Row>

      <Row>
        <Column>
          <Calendar monthsBefore={1} monthsAfter={1} dayClassName={({ day }) => `score${day % 3}`} />
        </Column>
      </Row>
    </Container>
  </StyleProvider>
);

ChartsInContainer.displayName = 'Charts In Container';

ChartsInContainer.dynamicProps = {
  height: 300,
  legend: false,
  categories: [{ color: '#17a2b8' }],
  series: [
    {
      label: '2017',
      value: 53,
    },
    {
      label: '2018',
      value: 13,
    },
    {
      label: '2019',
      value: 26,
    },
    {
      label: '2020',
      value: 43,
    },
  ],
  percents: [
    { value: 10, color: '#17a2b8' },
    { value: 20, color: '#d5d5d4' },
    { value: 70, color: '#90ED7D' },
  ],
};

export default ChartsInContainer;
