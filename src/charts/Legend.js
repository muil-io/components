import React from 'react';
import { CategoryRow, CategorySpace, Bullet } from './Chart';

const Legend = ({ categories }) => (
  <>
    {categories.map(({ label, color }, index) => (
      <React.Fragment key={index}>
        <tr>
          <CategoryRow className="category-row" colSpan="100%">
            <Bullet color={color} />
            <span>{label}</span>
          </CategoryRow>
        </tr>
        <tr>
          <CategorySpace className="category-space" />
        </tr>
      </React.Fragment>
    ))}

    <tr style={{ height: 30 }} />
  </>
);

export default Legend;
