import { darken } from 'polished';

// Global
export const globalGutterSmall = (props) =>
  props.globalGutterSmall || props.theme.globalGutterSmall || props.theme.globalGutter;

export const globalBreakpoint = (props) =>
  props.globalBreakpoint ||
  props.theme.globalBreakpoint ||
  `${parseInt(props.theme.globalWidth) + parseInt(props.theme.globalGutter)}px`;

// Grid
export const columnPaddingBottom = (props) =>
  props.columnPaddingBottom || props.theme.columnPaddingBottom || props.theme.globalPadding;

// Block Grid
export const blockGridGutter = (props) =>
  props.blockGridGutter || props.theme.blockGridGutter || props.theme.globalGutter;

// Typography
export const headerColor = (props) => props.headerColor || props.theme.headerColor || props.theme.globalFontColor;
export const bodyLineHeight = (props) =>
  props.bodyLineHeight || props.theme.bodyLineHeight || props.theme.globalLineHeight;
export const headerFontFamily = (props) =>
  props.headerFontFamily || props.theme.headerFontFamily || props.theme.bodyFontFamily;
export const headerFontWeight = (props) =>
  props.headerFontWeight || props.theme.headerFontWeight || props.theme.globalFontWeight;
export const leadFontSize = (props) =>
  props.leadFontSize || props.theme.leadFontSize || `${parseInt(props.theme.globalFontSize) * 1.25}px`;
export const subheaderFontWeight = (props) =>
  props.subheaderFontWeight || props.theme.subheaderFontWeight || props.theme.globalFontWeight;
export const hrWidth = (props) => props.hrWidth || props.theme.hrWidth || props.theme.globalWidth;
export const anchorColor = (props) => props.anchorColor || props.theme.anchorColor || props.theme.primaryColor;
export const anchorColorVisited = (props) =>
  props.anchorColorVisited || props.theme.anchorColorVisited || props.theme.anchorColor;
export const anchorColorHover = (props) =>
  props.anchorColorHover || props.theme.anchorColorHover || darken(0.1, props.theme.primaryColor);
export const anchorColorActive = (props) =>
  props.anchorColorActive || props.theme.anchorColorActive || props.theme.anchorColorHover;

// Button
export const buttonMargin = (props) =>
  props.buttonMargin || props.theme.buttonMargin || `0 0 ${props.theme.globalMargin} 0`;
export const buttonBackground = (props) =>
  props.buttonBackground || props.theme.buttonBackground || props.theme.primaryColor;
export const buttonBorder = (props) =>
  props.buttonBorder || props.theme.buttonBorder || `2px solid ${props.theme.buttonBackground}`;
export const buttonRadius = (props) => props.buttonRadius || props.theme.buttonRadius || props.theme.globalRadius;
export const buttonRounded = (props) => props.buttonRounded || props.theme.buttonRounded || props.theme.globalRounded;

// Callout
export const calloutMarginBottom = (props) =>
  props.calloutMarginBottom || props.theme.calloutMarginBottom || props.theme.globalMargin;
export const calloutBorder = (props) =>
  props.calloutBorder || props.theme.calloutBorder || `1px solid ${darken(0.2, props.theme.calloutBackground)}`;
export const calloutBorderPrimary = (props) =>
  props.calloutBorderPrimary ||
  props.theme.calloutBorderPrimary ||
  `1px solid ${darken(0.2, props.theme.primaryColor)}`;
export const calloutBorderSecondary = (props) =>
  props.calloutBorderSecondary ||
  props.theme.calloutBorderSecondary ||
  `1px solid ${darken(0.2, props.theme.secondaryColor)}`;
export const calloutBorderSuccess = (props) =>
  props.calloutBorderSuccess ||
  props.theme.calloutBorderSuccess ||
  `1px solid ${darken(0.2, props.theme.successColor)}`;
export const calloutBorderWarning = (props) =>
  props.calloutBorderWarning ||
  props.theme.calloutBorderWarning ||
  `1px solid ${darken(0.2, props.theme.warningColor)}`;
export const calloutBorderAlert = (props) =>
  props.calloutBorderAlert || props.theme.calloutBorderAlert || `1px solid ${darken(0.2, props.theme.alertColor)}`;

// Menu
export const menuItemColor = (props) => props.menuItemColor || props.theme.menuItemColor || props.theme.primaryColor;

// Thumbnail
export const thumbnailMarginBottom = (props) =>
  props.thumbnailMarginBottom || props.theme.thumbnailMarginBottom || props.theme.globalMargin;
export const thumbnailShadowHover = (props) =>
  props.thumbnailShadowHover ||
  props.theme.thumbnailShadowHover ||
  `0 0 6px 1px rgba(${props.theme.primaryColor}, 0.5)`;
export const thumbnailRadius = (props) =>
  props.thumbnailRadius || props.theme.thumbnailRadius || props.theme.globalRadius;
