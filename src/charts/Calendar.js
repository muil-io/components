import React from 'react';
import styled from 'styled-components';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Table = styled.table`
  border-spacing: 5px;
  display: inline-block;
  margin: 5px;
`;

const DateTitle = styled.th`
  font-size: 13px;
  padding: 10px 0;
`;

const Day = styled.td`
  font-size: 13px;
  color: #868686;
`;

const Cell = styled.td`
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 11px;
  color: #868686;
  ${({ empty }) => !empty && `background: #e4e4e4;`}
`;

const daysInMonth = (iMonth, iYear) => 32 - new Date(iYear, iMonth, 32).getDate();

const createMonth = (year, month) => {
  const calendar = [];
  const firstDay = new Date(year, month).getDay();

  let date = 1;
  [...Array(6)].forEach((x, i) => {
    const row = [];

    [...Array(7)].forEach((y, j) => {
      if (i === 0 && j < firstDay) {
        row.push({});
      } else if (date <= daysInMonth(month, year)) {
        row.push({ day: date, date: new Date(year, month, date) });
        // eslint-disable-next-line no-plusplus
        date++;
      }
    });

    calendar.push(row);
  });

  return calendar;
};

const subtractMonths = (date, months) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() - months);
  return d;
};

const formatTitle = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${MONTHS[month]} ${year}`;
};

const Calendar = ({ className, style, monthsBefore = 0, monthsAfter = 0, showNumbers = false, dayClassName }) => {
  const calendars = [...Array(monthsBefore + monthsAfter + 1)].map((_, index) => {
    const date = subtractMonths(new Date(), monthsBefore - index);
    return { month: date, calendar: createMonth(date.getFullYear(), date.getMonth()) };
  });

  return (
    <div className={className} style={style}>
      {calendars.map(({ month, calendar }, calendarIndex) => (
        <Table key={calendarIndex}>
          <thead>
            <tr>
              <DateTitle colSpan="7">{formatTitle(month)}</DateTitle>
            </tr>
          </thead>
          <thead>
            <tr>
              <Day>S</Day>
              <Day>M</Day>
              <Day>T</Day>
              <Day>W</Day>
              <Day>T</Day>
              <Day>F</Day>
              <Day>S</Day>
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map(({ day, date }, dayIndex) => (
                  <Cell key={dayIndex} empty={!day} className={dayClassName?.({ day, date })}>
                    {showNumbers ? day : ''}
                  </Cell>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default Calendar;
