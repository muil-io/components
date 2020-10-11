import React from 'react';

const Center = ({ children, style, className }) => (
  <center style={style} className={className}>
    {React.Children.map(children, (child) => React.cloneElement(child, { className: 'float-center', align: 'center' }))}
  </center>
);

export default Center;
