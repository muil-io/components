import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background: #efefef;
  font-family: Arial;
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
