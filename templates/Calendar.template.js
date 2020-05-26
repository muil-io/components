import React from 'react';
import styled from 'styled-components';
import BaseCalendar from '../src/Calendar';
import Layout from './Layout';

const Text = styled.div`
  font-family: Arial;
`;

const StyledCalendar = styled(BaseCalendar)`
  text-align: center;

  .score0 {
    background-color: #fae5cf;
  }

  .score1 {
    background-color: #f8bf92;
  }

  .score2 {
    background-color: #fa9453;
  }

  .score3 {
    background-color: #f75500;
  }
`;

const Calendar = ({ monthsBefore, monthsAfter }) => (
  <Layout>
    <Text>Calendar</Text>

    <StyledCalendar
      monthsBefore={monthsBefore}
      monthsAfter={monthsAfter}
      dayClassName={({ day }) => `score${day % 4}`}
    />
  </Layout>
);

Calendar.displayName = 'Calendar';

Calendar.dynamicProps = {
  monthsBefore: 1,
  monthsAfter: 1,
};

export default Calendar;
