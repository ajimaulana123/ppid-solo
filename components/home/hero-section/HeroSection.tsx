import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

interface BannerImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

const images: BannerImage[] = [
  {
    url: '/banner-1.webp',
    alt: 'Banner 1',
    width: 1200,
    height: 630
  },
  {
    url: '/banner-2.webp',
    alt: 'Banner 2',
    width: 1200,
    height: 630
  },
  {
    url: '/banner-3.webp',
    alt: 'Banner 3',
    width: 1200,
    height: 630
  },
  {
    url: '/banner-4.webp',
    alt: 'Banner 4',
    width: 1200,
    height: 630
  },
  {
    url: '/banner-5.webp',
    alt: 'Banner 5',
    width: 1200,
    height: 630
  },
];

export const HeroSection = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            quality={80}
            priority={index === 0}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};