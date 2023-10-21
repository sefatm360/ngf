import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import Typewriter from 'typewriter-effect';
const LeftLoginCol = () => {
  return (
    <>
      <div className='left-login-col'>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide
            data-swiper-autoplay='5000'
            style={{ width: '100%', height: '100%' }}
          >
            <Image
              src='/assets/login-slide-icon/login-slide-img.gif'
              alt='logo'
              layout='fill'
            />
          </SwiperSlide>

          {/* <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <Image src='/assets/thinking.jpg' alt='logo' layout='fill' />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default LeftLoginCol;
