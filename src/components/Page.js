import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const pageSize = {
  A0: { height: '118.9cm', width: '84.1cm' },
  A1: { height: '84.1cm', width: '59.4cm' },
  A2: { height: '59.4cm', width: '42cm' },
  A3: { height: '42cm', width: '29.7cm' },
  A4: { height: '29.7cm', width: '21cm' },
  A5: { height: '21cm', width: '14.8cm' },
  A6: { height: '14.8cm', width: '10.5cm' },
  Tabloid: { height: '43.2cm', width: '27.9cm' },
  Letter: { height: '27.94cm', width: '21.59cm' },
  Legal: { height: '35.56cm', width: '21.59cm' },
  Ledger: { height: '43.18cm', width: '27.94cm' },
};

const Global = createGlobalStyle`
	body{
		background: #D1D1D1;
	}
`;

const Wrapper = styled.div`
  width: ${({ size, landscape }) => (landscape ? pageSize[size]?.height : pageSize[size]?.width)};
  height: ${({ size, landscape }) => (landscape ? pageSize[size]?.width : pageSize[size]?.height)};
  background: #fff;
  box-shadow: 0 4px 15px 2px rgba(0, 0, 0, 0.35);
  margin: 20px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  page-break-after: always;

  @media print {
    box-shadow: none;
    width: 100%;
    margin: 0 auto;
  }

  @page {
    size: ${({ size }) => size} ${({ landscape }) => landscape && 'landscape'};
    margin: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Page = ({ size = 'A4', page, renderHeader, renderFooter, landscape = false, children, className }) => (
  <>
    <Global />
    <Wrapper size={size} landscape={landscape} className={className}>
      {renderHeader?.({ page })}
      <Content>{children}</Content>
      {renderFooter?.({ page })}
    </Wrapper>
  </>
);

export default Page;
