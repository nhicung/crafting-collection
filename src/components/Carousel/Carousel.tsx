import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './carousel.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Image } from '../Images/Images';

interface CarouselProps {
  images: Image[];
}

export default function Carousel({ images }: CarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {images.map((item) => (
          <SwiperSlide key={item.url}>
            <img src={item.url} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <div className='swiper-button-next' />
        <div className='swiper-button-prev' />
        {images.map((item) => (
          <SwiperSlide key={item.url}>
            <img src={item.url} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
