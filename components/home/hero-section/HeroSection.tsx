import React from 'react';
import { Carousel } from 'antd';
import Image from "next/image";

const images = [
  {
    url: '/banner-1.jpg',
    alt: 'Banner 1'
  },
  {
    url: '/banner-2.jpg',
    alt: 'Banner 2'
  },
  {
    url: '/banner-3.jpg',
    alt: 'Banner 3'
  },
  {
    url: '/banner-4.jpg',
    alt: 'Banner 4'
  },
  {
    url: '/banner-5.jpg',
    alt: 'Banner 5'
  },
]

export const HeroSection = () => {
  return (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.url}
            alt={image.alt}
            width={1920}
            height={1080}
            className="w-full h-auto max-w-full"
            priority
          />
        </div>
      ))}
    </Carousel>
  );
} 