import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/global';
import defaultTheme from '../style/theme';

const Wrapper = styled.table`
  background: ${({ theme }) => theme.bodyBackground};
  height: 100%;
  width: 100%;
`;

const StyleProvider = ({ theme, children, style, className }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <>
      <GlobalStyle />
      <Wrapper className={className} style={style}>
        <tbody>
          <tr>
            <td className="center" align="center" valign="top">
              {children}
            </td>
          </tr>
        </tbody>
      </Wrapper>
    </>
  </ThemeProvider>
);

export default StyleProvider;
