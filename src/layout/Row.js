import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
`;

const Row = ({ children }) => (
  <Wrapper>
    <tr>
      {React.Children.map(children, (child) => (
        <td>{child}</td>
      ))}
    </tr>
  </Wrapper>
);

export default Row;
