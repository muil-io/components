import React from 'react';
import { Page as BasePage } from '../src/components';

const Page = () => (
  <>
    <BasePage renderHeader={() => <div>Header</div>} renderFooter={() => <div>Footer</div>}>
      1
    </BasePage>
    <BasePage>2</BasePage>
    <BasePage>3</BasePage>
  </>
);

Page.displayName = 'PDF Page';

export default Page;
