import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
`;

const Column = ({ children }) => (
  <Wrapper>
    {React.Children.map(children, (child) => (
      <tr>
        <td>{child}</td>
      </tr>
    ))}
  </Wrapper>
);

export default Column;
