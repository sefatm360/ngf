import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';

// new Splide('.splide').mount({ AutoScroll });

const PressCoverage = () => {
  const [perPage, setPerPage] = useState<number>(2);
  const { t } = useTranslation(['home']);

  return (
    <div className='press-coverage-section'>
      <Container>
        <div className='py-5'>
          <div className='section-title-wrapper'>
            <h1 className='section-title'>{t('pressandcoverage')}</h1>
            <h1 className='section-title title-opacity'>
              {t('pressandcoverage')}
            </h1>
          </div>
          <div>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              navigation={true}
              autoplay={true}
              modules={[Autoplay, EffectCoverflow, Navigation]}
              className='mySwiper'>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://www.somoynews.tv/news/2022-07-13/%E0%A6%86%E0%A6%AE%E0%A7%87%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%8B%E0%A6%97-%E0%A6%AA%E0%A7%87%E0%A6%B2-%E0%A6%85%E0%A6%A8-%E0%A6%A6%E0%A7%8D%E0%A6%AF-%E0%A6%93%E0%A7%9F%E0%A7%87'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/1.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://shomoyerkhabor24.com/2022/07/13/%e0%a6%86%e0%a6%ae%e0%a7%87%e0%a6%b0%e0%a6%bf%e0%a6%95%e0%a6%be-%e0%a6%a5%e0%a7%87%e0%a6%95%e0%a7%87-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a6%bf%e0%a7%9f%e0%a7%8b%e0%a6%97-%e0%a6%aa%e0%a7%87%e0%a6%b2/'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/2.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://thetimesofbd.news/%e0%a6%86%e0%a6%ae%e0%a7%87%e0%a6%b0%e0%a6%bf%e0%a6%95%e0%a6%be-%e0%a6%a5%e0%a7%87%e0%a6%95%e0%a7%87-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a6%bf%e0%a6%af%e0%a6%bc%e0%a7%8b%e0%a6%97-%e0%a6%aa%e0%a7%87/'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/3.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://www.channelionline.com/on-the-way-startup/'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/4.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://www.kalerkantho.com/online/miscellaneous/2022/07/13/1163410?fbclid=IwAR03tgnCiPSdjQT0EzFQclD9lzlxl92tzbnFPBHFm2gX2yHodtOEtB72Aw0'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/5.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://dailyvorerpata.com/details.php?id=81970'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/6.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://www.risingbd.com/economics/445274'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/7.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://www.manob-barta.com/2022/07/%e0%a6%86%e0%a6%ae%e0%a7%87%e0%a6%b0%e0%a6%bf%e0%a6%95%e0%a6%be-%e0%a6%a5%e0%a7%87%e0%a6%95%e0%a7%87-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a6%bf%e0%a7%9f%e0%a7%8b%e0%a6%97-%e0%a6%aa%e0%a7%87%e0%a6%b2/'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/8.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: '298px',
                  }}
                  href='https://www.swadeshpratidin.com/details.php?id=76353'
                  target='_blank'
                  rel='noreferrer'>
                  <Image src='/assets/news/9.jpg' alt='' layout='fill' />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PressCoverage;
