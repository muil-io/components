import { createGlobalStyle, css } from 'styled-components';
import {
  globalBreakpoint,
  headerColor,
  headerFontFamily,
  headerFontWeight,
  bodyLineHeight,
  leadFontSize,
  subheaderFontWeight,
  anchorColor,
  anchorColorHover,
  anchorColorActive,
  anchorColorVisited,
  hrWidth,
  thumbnailRadius,
  thumbnailMarginBottom,
  thumbnailShadowHover,
  globalGutterSmall,
} from './selectors';
import { gridCalcPct, gridCalcPx } from '../utils';

const global = css`
  .wrapper {
    width: 100%;
  }
`;

const normalize = css`
  #outlook a {
    padding: 0;
  }

  body {
    width: 100% !important;
    min-width: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    Margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .ExternalClass {
    width: 100%;

    &,
    p,
    span,
    font,
    td,
    th,
    div {
      line-height: 100%;
    }
  }

  #backgroundTable {
    margin: 0;
    Margin: 0;
    padding: 0;
    width: 100% !important;
    line-height: 100% !important;
  }

  img {
    outline: none;
    text-decoration: none;
    width: auto;
    max-width: 100%;
    clear: both;
    display: block;
  }

  center {
    width: 100%;
    min-width: ${({ theme }) => theme.globalWidth};
  }

  a img {
    border: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    word-wrap: break-word;
    -webkit-hyphens: auto;
    hyphens: auto;
    border-collapse: collapse !important;
  }

  table,
  tr,
  td,
  th {
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    vertical-align: top;
    text-align: left;
  }
`;

const alignment = css`
  table,
  th,
  td,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    &.text-center {
      text-align: center;
    }

    &.text-left {
      text-align: left;
    }

    &.text-right {
      text-align: right;
    }
  }

  span.text-center {
    display: block;
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
    .small-float-center {
      margin: 0 auto !important;
      float: none !important;
      text-align: center !important;
    }

    .small-text-center {
      text-align: center !important;
    }

    .small-text-left {
      text-align: left !important;
    }

    .small-text-right {
      text-align: right !important;
    }
  }

  img.float-left {
    float: left;
    text-align: left;
  }

  img.float-right {
    float: right;
    text-align: right;
  }

  img.float-center,
  img.text-center {
    margin: 0 auto;
    Margin: 0 auto;
    float: none;
    text-align: center;
  }

  table,
  td,
  th {
    &.float-center {
      margin: 0 auto;
      Margin: 0 auto;
      float: none;
      text-align: center;
    }
  }
`;

const visibility = css`
  .hide-for-large {
    display: none;
    mso-hide: all;
    overflow: hidden;
    max-height: 0;
    font-size: 0;
    width: 0;
    line-height: 0;

    @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
      display: block !important;
      width: auto !important;
      overflow: visible !important;
      max-height: none !important;
      font-size: inherit !important;
      line-height: inherit !important;
    }
  }

  table.body table.container .hide-for-large * {
    mso-hide: all;
  }

  table.body table.container .hide-for-large,
  table.body table.container .row.hide-for-large {
    @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
      display: table !important;
      width: 100% !important;
    }
  }

  table.body table.container .callout-inner.hide-for-large {
    @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
      display: table-cell !important;
      width: 100% !important;
    }
  }

  table.body table.container .show-for-large {
    @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
      display: none !important;
      width: 0;
      mso-hide: all;
      overflow: hidden;
    }
  }
`;

const typography = css`
  body,
  table.body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  td,
  th {
    color: ${({ theme }) => theme.globalFontColor};
    font-family: ${({ theme }) => theme.bodyFontFamily};
    font-weight: ${({ theme }) => theme.globalFontWeight};
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    margin: 0;
    Margin: 0;
    text-align: left;
    line-height: ${({ theme }) => theme.globalLineHeight};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => headerColor(props)};
    word-wrap: normal;
    font-family: ${(props) => headerFontFamily(props)};
    font-weight: ${(props) => headerFontWeight(props)};
    margin-bottom: ${({ theme }) => theme.headerMarginBottom};
    margin-bottom: ${({ theme }) => theme.headerMarginBottom};
  }

  h1 {
    font-size: ${({ theme }) => theme.h1FontSize};
  }

  h2 {
    font-size: ${({ theme }) => theme.h2FontSize};
  }

  h3 {
    font-size: ${({ theme }) => theme.h3FontSize};
  }

  h4 {
    font-size: ${({ theme }) => theme.h4FontSize};
  }

  h5 {
    font-size: ${({ theme }) => theme.h5FontSize};
  }

  h6 {
    font-size: ${({ theme }) => theme.h6FontSize};
  }

  body,
  table.body,
  p,
  td,
  th {
    font-size: ${({ theme }) => theme.globalFontSize};
    line-height: ${(props) => bodyLineHeight(props)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.paragraphMarginBottom};
    margin-bottom: ${({ theme }) => theme.paragraphMarginBottom};

    &.lead {
      font-size: ${(props) => leadFontSize(props)};
      line-height: ${({ theme }) => theme.leadLineHeight};
    }

    &.subheader {
      margin-top: ${({ theme }) => theme.subheaderMarginTop};
      margin-bottom: ${({ theme }) => theme.subheaderMarginBottom};
      margin-top: ${({ theme }) => theme.subheaderMarginTop};
      margin-bottom: ${({ theme }) => theme.subheaderMarginBottom};
      font-weight: ${(props) => subheaderFontWeight(props)};
      line-height: ${({ theme }) => theme.subheaderLineheight};
      color: ${({ theme }) => theme.subheaderColor};
    }
  }

  small .small {
    font-size: ${({ theme }) => theme.smallFontSize};
    color: ${({ theme }) => theme.smallFontColor};
  }

  a {
    color: ${(props) => anchorColor(props)};
    text-decoration: ${({ theme }) => theme.anchorTextDecoration};
    font-family: ${({ theme }) => theme.bodyFontFamily};
    font-weight: ${({ theme }) => theme.globalFontWeight};
    padding: 0;
    text-align: left;
    line-height: ${({ theme }) => theme.globalLineHeight};

    &:hover {
      color: ${(props) => anchorColorHover(props)};
    }

    &:active {
      color: ${(props) => anchorColorActive(props)};
    }

    &:visited {
      color: ${(props) => anchorColorVisited(props)};
    }
  }

  h1 a,
  h1 a:visited,
  h2 a,
  h2 a:visited,
  h3 a,
  h3 a:visited,
  h4 a,
  h4 a:visited,
  h5 a,
  h5 a:visited,
  h6 a,
  h6 a:visited {
    color: ${(props) => anchorColor(props)};
  }

  pre {
    background: ${({ theme }) => theme.lightGray};
    margin: 30px 0;
    Margin: 30px 0;

    code {
      color: ${({ theme }) => theme.mediumGray};

      span.callout {
        color: ${({ theme }) => theme.darkGray};
        font-weight: bold;
      }

      span.callout-strong {
        color: ${({ theme }) => theme.preColor};
        font-weight: bold;
      }
    }
  }

  table.hr,
  table.h-line {
    th {
      padding-bottom: $margin;
      ${({ theme: { hrAlign } }) => `text-align: ${hrAlign}`};
    }

    table {
      display: inline-block;
      margin: 0;
      Margin: 0;
    }

    td {
      width: ${(props) => hrWidth(props)};
      height: 0;
      padding-top: ${({ theme }) => theme.hrMargin};
      clear: both;
      border-top: 0;
      border-right: 0;
      border-bottom: ${({ theme }) => theme.hrBorder};
      border-left: 0;
      font-size: 0;
      line-height: 0;
    }
  }

  .stat {
    font-size: ${({ theme }) => theme.statFontSize};
    line-height: 1;

    p + & {
      margin-top: -16px;
      margin-top: -16px;
    }
  }

  span.preheader {
    display: none !important;
    visibility: hidden;
    mso-hide: all !important;
    font-size: 1px;
    color: ${({ theme }) => theme.bodyBackground};
    line-height: 1px;
    max-height: 0px;
    max-width: 0px;
    opacity: 0;
    overflow: hidden;
  }

  ${({ theme }) =>
    theme.removeIosBlue &&
    `
    @media only screen {
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
    }
  `}
`;

const thumbnail = css`
  .thumbnail {
    border: ${({ theme }) => theme.thumbnailBorder};
    box-shadow: ${({ theme }) => theme.thumbnailShadow};
    display: inline-block;
    line-height: 0;
    max-width: 100%;
    transition: ${({ theme }) => theme.thumbnailTransition};
    border-radius: ${(props) => thumbnailRadius(props)};
    margin-bottom: ${(props) => thumbnailMarginBottom(props)};

    &:hover,
    &:focus {
      box-shadow: ${(props) => thumbnailShadowHover(props)};
    }
  }
`;

const outlookFirst = css`
  body.outlook p {
    display: inline !important;
  }
`;

const mediaQuery = css`
  @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
    table.body img {
      width: auto;
      height: auto;
    }

    table.body center {
      min-width: 0 !important;
    }

    table.body .container {
      width: ${({ theme }) => theme.globalWidthSmall} !important;
    }

    table.body .columns,
    table.body .column {
      height: auto !important;
      box-sizing: border-box;
      padding-left: ${(props) => globalGutterSmall(props)} !important;
      padding-right: ${(props) => globalGutterSmall(props)} !important;

      .column,
      .columns {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }

    .collapse {
      table.body & .columns,
      table.body & .column {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }

    table.body table.columns td.expander,
    table.body table.columns th.expander {
      display: none !important;
    }

    table.body .right-text-pad,
    table.body .text-pad-right {
      padding-left: ${({ theme }) => theme.textPadding} !important;
    }

    table.body .left-text-pad,
    table.body .text-pad-left {
      padding-right: ${({ theme }) => theme.textPadding} !important;
    }

    table.menu {
      width: 100% !important;

      td,
      th {
        width: auto !important;
        display: inline-block !important;
      }

      &.vertical,
      &.small-vertical {
        td,
        th {
          display: block !important;
        }
      }
    }

    table.menu[align='center'] {
      width: auto !important;
    }

    table.button.small-expand,
    table.button.small-expanded {
      width: 100% !important;

      table {
        width: 100%;

        a {
          text-align: center !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      }

      center {
        min-width: 0;
      }
    }
  }
`;

const grid = css`
  table {
    &.body {
      background: ${({ theme }) => theme.bodyBackground};
      height: 100%;
      width: 100%;
    }

    &.container {
      width: ${({ theme }) => theme.globalWidth};
      margin: 0 auto;
      Margin: 0 auto;
      text-align: inherit;
    }

    &.row {
      padding: 0;
      width: 100%;
      position: relative;
    }

    &.spacer {
      width: 100%;
      td {
        mso-line-height-rule: exactly;
      }
    }
  }

  table.container table.row {
    display: table;
  }

  td.columns,
  td.column,
  th.columns,
  th.column {
    margin: 0 auto;
    Margin: 0 auto;
    padding-left: ${({ theme }) => theme.globalGutter};

    .column.first,
    .columns.first {
      padding-left: 0 !important;
    }

    .column.last,
    .columns.last {
      padding-right: 0 !important;
    }

    .column,
    .columns {
      center {
        min-width: none !important;
      }
    }
  }

  td.columns.last,
  td.column.last,
  th.columns.last,
  th.column.last {
    padding-right: ${({ theme }) => theme.globalGutter};
  }

  td.columns,
  td.column,
  th.columns,
  th.column {
    table {
      width: 100%;

      &.button {
        width: auto;

        &.expand,
        &.expanded {
          width: 100%;
        }
      }
    }
  }

  ${({ theme }) => {
    let styles = '';
    const { gridColumnCount, globalGutter, globalWidth } = theme;
    for (let i = 1; i <= gridColumnCount; i++) {
      styles += `
        td.large-${i}, th.large-${i} {
          width: ${gridCalcPct(i, gridColumnCount, globalWidth)}%;
          padding-left: ${parseInt(globalGutter) / 2}px;
          padding-right: ${parseInt(globalGutter) / 2}px;
        }

        td.large-${i}.first, th.large-${i}.first {
          padding-left: ${globalGutter};
        }

        td.large-${i}.last, th.large-${i}.last {
          padding-right: ${globalGutter};
        }

        .collapse {
          > tbody > tr > td.large-${i}, > tbody > tr > th.large-${i} {
            padding-right: 0;
            padding-left: 0;
            width: ${gridCalcPx(i, gridColumnCount, globalWidth) + parseInt(globalGutter)}px;
          }

          td.large-${i}.first, th.large-${i}.first, td.large-${i}.last, th.large-${i}.last {
            width: ${gridCalcPx(i, gridColumnCount, globalWidth) + parseInt(globalGutter) * 1.5}px;
          }
        }

        td.large-${i} center,
        th.large-${i} center {
          min-width: ${gridCalcPx(i, gridColumnCount, globalWidth) - parseInt(globalGutter) * 2}px;
        }

        .body
          .columns
          td.large-${i},
          .body
          .column
          td.large-${i},
          .body
          .columns
          th.large-${i},
          .body
          .column
          th.large-${i} {
          width: ${gridCalcPct(i, gridColumnCount)}%;
        }

        td.large-offset-${i},
          td.large-offset-${i}.first,
          td.large-offset-${i}.last,
          th.large-offset-${i},
          th.large-offset-${i}.first,
          th.large-offset-${i}.last {
          padding-left: ${gridCalcPx(i, gridColumnCount, globalWidth) + parseInt(globalGutter) * 2}px;
        }
      `;
    }
    return styles;
  }}

  td.expander,
  th.expander {
    visibility: hidden;
    width: 0;
    padding: 0 !important;
  }

  ${(props) => console.log(`@media only screen and (max-width: ${globalBreakpoint(props)}`)}

  @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
    ${({ theme }) => {
      let styles = '';
      const { gridColumnCount } = theme;
      for (let i = 1; i <= gridColumnCount; i++) {
        styles += `
          td.small-${i}, th.small-${i} {
            display: inline-block !important;
            width: ${gridCalcPct(i, gridColumnCount)}% !important;
          }
        `;
      }
      return styles;
    }}

    .columns
      td.small-${({ theme }) => theme.gridColumnCount},
      .column
      td.small-${({ theme }) => theme.gridColumnCount},
      .columns
      th.small-${({ theme }) => theme.gridColumnCount},
      .column
      th.small-${({ theme }) => theme.gridColumnCount} {
      display: block !important;
      width: 100% !important;
    }

    ${({ theme }) => {
      let styles = '';
      const { gridColumnCount } = theme;
      for (let i = 1; i < gridColumnCount; i++) {
        styles += `
          table.body td.small-offset-${i}, table.body th.small-offset-${i} {
            margin-left: ${gridCalcPct(i, gridColumnCount)}% !important;
            margin-left: ${gridCalcPct(i, gridColumnCount)}% !important;
          }
        `;
      }
      return styles;
    }}
  }
`;

const menu = css`
  &.menu {
    width: ${({ theme }) => theme.globalWidth};
  }

  &.menu.vertical {
    td.menu-item,
    th.menu-item {
      padding-right: 0;
      display: block;

      a {
        width: 100%;
      }
    }
  }

  &.menu.text-center a {
    text-align: center;
  }

  &.menu[align='center'] {
    width: auto;
  }

  &.menu:not(.float-center) {
    .menu-item:first-child {
      padding-left: 0 !important;
    }
    .menu-item:last-child {
      padding-right: 0 !important;
    }
  }

  &.menu.vertical .menu-item {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  @media only screen and (max-width: ${(props) => globalBreakpoint(props)}) {
    &.menu.small-vertical .menu-item {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  @media only screen {
    html {
      min-height: 100%;
      background: ${({ theme }) => theme.bodyBackground};
    }
  }

  ${global}
  ${normalize}
  ${grid}
  ${alignment}
  ${visibility}
  ${typography}
  ${thumbnail}
  ${menu}
  ${outlookFirst}
  ${mediaQuery}
`;

export default GlobalStyle;
