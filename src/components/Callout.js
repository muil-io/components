import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { lighten } from 'polished';
import { getStyle, addAttrPrefix } from '../utils';
import {
  calloutMarginBottom,
  calloutBorder,
  calloutBorderPrimary,
  calloutBorderSecondary,
  calloutBorderSuccess,
  calloutBorderWarning,
  calloutBorderAlert,
} from '../style/selectors';

const Wrapper = styled.table`
  margin-bottom: ${(props) => calloutMarginBottom(props)};
  margin-bottom: ${(props) => calloutMarginBottom(props)};

  th.callout-inner {
    width: 100%;
    border: ${(props) => calloutBorder(props)};
    padding: ${(props) => getStyle(props, 'calloutPadding')};
    background: ${(props) => getStyle(props, 'calloutBackground')};

    &.primary {
      background: ${({ theme }) => lighten(theme.calloutBackgroundFade, theme.primaryColor)};
      border: ${(props) => calloutBorderPrimary(props)};
      color: ${({ theme }) => theme.black};
    }

    &.secondary {
      background: ${({ theme }) => lighten(theme.calloutBackgroundFade, theme.secondaryColor)};
      border: ${(props) => calloutBorderSecondary(props)};
      color: ${({ theme }) => theme.black};
    }

    &.success {
      background: ${({ theme }) => lighten(theme.calloutBackgroundFade, theme.successColor)};
      border: ${(props) => calloutBorderSuccess(props)};
      color: ${({ theme }) => theme.black};
    }

    &.warning {
      background: ${({ theme }) => lighten(theme.calloutBackgroundFade, theme.warningColor)};
      border: ${(props) => calloutBorderWarning(props)};
      color: ${({ theme }) => theme.black};
    }

    &.alert {
      background: ${({ theme }) => lighten(theme.calloutBackgroundFade, theme.alertColor)};
      border: ${(props) => calloutBorderAlert(props)};
      color: ${({ theme }) => theme.black};
    }
  }
`;

const Callout = ({ primary, secondary, success, warning, alert, children, style, className, ...props }) => {
  const styleProps = addAttrPrefix(props, 'button');
  return (
    <Wrapper className="callout" {...styleProps} style={style}>
      <tr>
        <th className={classNames('callout-inner', { primary, secondary, success, warning, alert }, className)}>
          {children}
        </th>
        <th className="expander" />
      </tr>
    </Wrapper>
  );
};

export default Callout;
