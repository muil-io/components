# Muil Components

React components for faster and easier email templates development.
Responsive by design on most-popular email clients, even Outlook. Inspired by [Inky](https://github.com/foundation/inky).

Building HTML emails is hard, especially responsive emails. That's why we created this library. Get away from complex table markup and inconsistent results.

Library includes

- Responsive Grid for Any Layout
- Common UI Components to Build Faster
- Charts Components
- Global theme and custom styles support

Read More [Muil Docs - Components.](https://docs.muil.io/docs/components/intro/)

> You can use this library with [Muil](https://www.muil.io) or React Server Side Rendering

## Installation

`npm install @muil/components`

or

`yarn add @muil/components`

## Components

-  [Grid](https://docs.muil.io/docs/components/grid)
-  [Style](https://docs.muil.io/docs/components/style)
-  [Alignment](https://docs.muil.io/docs/components/alignment)
-  [Typography](https://docs.muil.io/docs/components/typography)
-  [Button](https://docs.muil.io/docs/components/button)
-  [Callout](https://docs.muil.io/docs/components/callout)
-  [Menu](https://docs.muil.io/docs/components/menu)
-  [Spacer](https://docs.muil.io/docs/components/spacer)
-  [Wrapper](https://docs.muil.io/docs/components/wrapper)
-  [Charts](https://docs.muil.io/docs/components/charts)

## Basic Example

```jsx
import { StyleProvider, Button } from "@muil/components";

<StyleProvider>
  <Button href="#">Button</Button>
  <Button href="#" tiny>Tiny Button</Button>
  <Button href="#" small>Small Button</Button>
  <Button href="#">Default Button</Button>
  <Button href="#" large>Large Button</Button>
</StyleProvider>;
```

![Buttons](media/buttons.png)

## More Components

![Bar Chart](media/bar-chart.png)
![Multiple Bar Chart](media/multiple-bar-chart.png)
![Multiple Bar Chart](media/multiple-hor-bar-chart.png)
![Calendar](media/calendar.png)
![Heat map](media/heat-map.png)
