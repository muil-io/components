import React from 'react';
import { Carousel as BaseCarousel, CarouselImage } from '../../src/core';
import Layout from './Layout';

const Carousel = () => (
  <Layout>
    <BaseCarousel>
      <CarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
      <CarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
      <CarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
    </BaseCarousel>
  </Layout>
);

Carousel.displayName = 'Carousel';

export default Carousel;
