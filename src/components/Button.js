import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import classNames from 'classnames';
import { getStyle, addAttrPrefix } from '../utils';
import { buttonMargin, buttonBackground, buttonBorder, buttonRadius, buttonRounded } from '../style/selectors';

const Wrapper = styled.table`
  &.button {
    width: auto;
    margin: ${(props) => buttonMargin(props)};
    Margin: ${(props) => buttonMargin(props)};

    table {
      td {
        text-align: left;
        color: ${(props) => getStyle(props, 'buttonColor')};
        background: ${(props) => buttonBackground(props)};
        border: ${(props) => buttonBorder(props)};

        a {
          font-size: ${(props) => getStyle(props, 'buttonFontSize', 'default')};
          font-weight: ${(props) => getStyle(props, 'buttonFontWeight')};
          color: ${(props) => getStyle(props, 'buttonColor')};
          text-decoration: none;
          text-align: left;
          display: inline-block;
          padding: ${(props) => getStyle(props, 'buttonPadding', 'default')};
          border: 0 solid ${(props) => buttonBackground(props)};
          border-radius: ${(props) => buttonRadius(props)};
        }
      }
    }

    &.radius table td {
      border-radius: ${(props) => buttonRadius(props)};
      border: none;
    }

    &.rounded table td {
      border-radius: ${(props) => buttonRounded(props)};
      border: none;
    }
  }

  &.button:hover table tr td a,
  &.button:active table tr td a,
  &.button table tr td a:visited,
  &.button.tiny:hover table tr td a,
  &.button.tiny:active table tr td a,
  &.button.tiny table tr td a:visited,
  &.button.small:hover table tr td a,
  &.button.small:active table tr td a,
  &.button.small table tr td a:visited,
  &.button.large:hover table tr td a,
  &.button.large:active table tr td a,
  &.button.large table tr td a:visited {
    color: ${(props) => getStyle(props, 'buttonColor')};
  }

  &.button.tiny {
    table {
      td,
      a {
        padding: ${(props) => getStyle(props, 'buttonPadding', 'tiny')};
      }

      a {
        font-size: ${(props) => getStyle(props, 'buttonFontSize', 'tiny')};
        font-weight: normal;
      }
    }
  }

  &.button.small {
    table {
      td,
      a {
        padding: ${(props) => getStyle(props, 'buttonPadding', 'small')};
        font-size: ${(props) => getStyle(props, 'buttonFontSize', 'small')};
      }
    }
  }

  &.button.large {
    table {
      a {
        padding: ${(props) => getStyle(props, 'buttonPadding', 'large')};
        font-size: ${(props) => getStyle(props, 'buttonFontSize', 'large')};
      }
    }
  }

  &.button.expand,
  &.button.expanded {
    width: 100%;

    table {
      width: 100%;

      a {
        text-align: center;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
    }

    center {
      min-width: 0;
    }
  }

  &.button:hover,
  &.button:visited,
  &.button:active {
    table {
      td {
        background: ${(props) => darken(0.1, buttonBackground(props))};
        color: ${(props) => getStyle(props, 'buttonColor')};
      }
    }
  }

  &.button:hover,
  &.button:visited,
  &.button:active {
    table {
      a {
        border: 0 solid ${(props) => darken(0.1, buttonBackground(props))};
      }
    }
  }

  &.button.secondary {
    table {
      td {
        background: ${({ theme }) => theme.secondaryColor};
        color: ${(props) => getStyle(props, 'buttonColor')};
        border: 0px solid ${({ theme }) => theme.secondaryColor};
      }

      a {
        color: ${(props) => getStyle(props, 'buttonColor')};
        border: 0 solid ${({ theme }) => theme.secondaryColor};
      }
    }
  }

  &.button.secondary:hover {
    table {
      td {
        background: ${({ theme }) => lighten(0.1, theme.secondaryColor)};
        color: ${(props) => getStyle(props, 'buttonColor')};
      }

      a {
        border: 0 solid ${({ theme }) => lighten(0.1, theme.secondaryColor)};
      }
    }
  }

  &.button.secondary:hover {
    table {
      td a {
        color: ${(props) => getStyle(props, 'buttonColor')};
      }
    }
  }

  &.button.secondary:active {
    table {
      td a {
        color: ${(props) => getStyle(props, 'buttonColor')};
      }
    }
  }

  &.button.secondary {
    table {
      td a:visited {
        color: ${(props) => getStyle(props, 'buttonColor')};
      }
    }
  }

  &.button.success {
    table {
      td {
        background: ${({ theme }) => theme.successColor};
        border: 0px solid ${({ theme }) => theme.successColor};
      }

      a {
        border: 0 solid ${({ theme }) => theme.successColor};
      }
    }
  }

  &.button.success:hover {
    table {
      td {
        background: ${({ theme }) => darken(0.1, theme.successColor)};
      }

      a {
        border: 0 solid ${({ theme }) => darken(0.1, theme.successColor)};
      }
    }
  }

  &.button.alert {
    table {
      td {
        background: ${({ theme }) => theme.alertColor};
        border: 0px solid ${({ theme }) => theme.alertColor};
      }

      a {
        border: 0 solid ${({ theme }) => theme.alertColor};
      }
    }
  }

  &.button.alert:hover {
    table {
      td {
        background: ${({ theme }) => darken(0.1, theme.alertColor)};
      }

      a {
        border: 0 solid ${({ theme }) => darken(0.1, theme.alertColor)};
      }
    }
  }

  &.button.warning {
    table {
      td {
        background: ${({ theme }) => theme.warningColor};
        border: 0px solid ${({ theme }) => theme.warningColor};
      }

      a {
        border: 0px solid ${({ theme }) => theme.warningColor};
      }
    }
  }

  &.button.warning:hover {
    table {
      td {
        background: ${({ theme }) => darken(0.1, theme.warningColor)};
      }

      a {
        border: 0px solid ${({ theme }) => darken(0.1, theme.warningColor)};
      }
    }
  }
`;

const Button = ({
  href,
  tiny,
  small,
  large,
  expanded,
  smallExpanded,
  radius,
  rounded,
  secondary,
  success,
  warning,
  alert,
  children,
  style,
  className,
  ...props
}) => {
  const styleProps = addAttrPrefix(props, 'button');
  const { background, border } = props;
  if (background && !border) {
    styleProps.buttonBorder = `2px solid ${background}`;
  }

  return (
    <Wrapper
      className={classNames(
        'button',
        {
          tiny,
          small,
          large,
          expanded,
          'small-expanded': smallExpanded,
          radius,
          rounded,
          secondary,
          success,
          warning,
          alert,
        },
        className,
      )}
      style={style}
      {...styleProps}
    >
      <tr>
        <td>
          <table>
            <tr>
              <td>
                {expanded ? (
                  <center>
                    <a href={href}>{children}</a>
                  </center>
                ) : (
                  <a href={href}>{children}</a>
                )}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </Wrapper>
  );
};

export default Button;
