import React from 'react';
import { HorizontalWrapper, FullWidthCell, Row, ColumnLabel, SpaceRow, LabelRow } from './Chart';
import Legend from './Legend';

const HorizontalBarChart = ({ className, style, maxWidth, series = [], categories, legend = false }) => (
  <HorizontalWrapper className={className} style={style} maxWidth={maxWidth} cellSpacing="0" cellPadding="0">
    {legend && <Legend categories={categories} />}

    {series.map(({ label, value, data }, index) => (
      <React.Fragment key={index}>
        <tr>
          <LabelRow className="label">
            <span>{label}</span>
          </LabelRow>

          <FullWidthCell>
            {(data || [value]).map((dataValue, categoryIndex) => (
              <div>
                <Row value={dataValue} color={categories[categoryIndex].color} className="column bar" />
                <ColumnLabel className="column label">{dataValue}</ColumnLabel>
              </div>
            ))}
          </FullWidthCell>
        </tr>

        <SpaceRow />
      </React.Fragment>
    ))}
  </HorizontalWrapper>
);

export default HorizontalBarChart;
