export const upperFirst = (string) => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '');

export const getStyle = (props, attr, key) => {
  if (key) {
    return props[attr] && props[attr][key] ? props[attr][key] : props.theme[attr][key];
  }

  return props[attr] || props.theme[attr];
};

export const addAttrPrefix = (obj, prefix) =>
  Object.keys(obj).reduce((prev, current) => ({ ...prev, [`${prefix}${upperFirst(current)}`]: obj[current] }), {});

export const gridCalcPct = (colNumber, totalColumns) =>
  Math.floor((parseInt(colNumber) / parseInt(totalColumns)) * 1000000 * 100) / 1000000;

export const gridCalcPx = (columnNumber, totalColumns, containerWidth, gutter = 0) =>
  (parseInt(containerWidth) / parseInt(totalColumns)) * parseInt(columnNumber) - parseInt(gutter);
