import styled, { css } from 'styled-components';

const commonWrapper = css`
  font-family: Arial;
  padding-top: 20px;
`;

export const VerticalWrapper = styled.table`
  ${commonWrapper};
  height: ${({ height }) => height || 200}px;
`;

export const HorizontalWrapper = styled.table`
  ${commonWrapper};
  width: 95%;
  max-width: ${({ maxWidth }) => maxWidth || 200}px;
`;

/* CATEGORIES */

export const CategoryRow = styled.td`
  font-size: 12px;
`;

export const CategorySpace = styled.td`
  height: 6px;
`;

export const Bullet = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 7px;
  background: ${({ color }) => color};
`;

/* BARS */

export const ColumnsRow = styled.tr`
  height: 100%;
  > td {
    border-bottom: 1px solid #d5d5d4;
  }
`;

export const ColumnBar = styled.div`
  height: ${({ value }) => value}%;
  background: ${({ color }) => color || '#17a2b8'};
  min-width: 18px;
`;

export const ColumnLabel = styled.span`
  font-size: 12px;
  color: #929292;
`;

/* LABELS */

export const LabelsRow = styled.tr`
  > td {
    padding: 6px;
    font-size: 14px;
    vertical-align: top;
  }
`;

export const Label = styled.span`
  display: inline-block;
  max-width: 50px;
`;

/* COMMON */

export const SpaceCell = styled.td`
  width: 5%;
`;

export const Cell = styled.td`
  vertical-align: bottom;
  text-align: center;
`;

export const FullWidthCell = styled.td`
  width: 70%;
  white-space: nowrap;
  > span {
    margin-left: 5px;
  }
`;

export const Row = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  min-height: 25px;
  background: ${({ color }) => color || '#17a2b8'};
  display: inline-block;
  vertical-align: middle;
`;

export const SpaceRow = styled.tr`
  height: 10px;
`;

export const LabelRow = styled.td`
  width: 30%;
  > span {
    display: inline-block;
    margin-right: 10px;
  }
`;
