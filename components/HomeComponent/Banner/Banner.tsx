import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { url } from '../../Helpers/Constant';
import { IBannerDataType } from './Types/BannerType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// import { DivLoader } from '../../../components/Spinner/Spinner';
const Banner = ({ sliderBanner }: IBannerDataType) => {
  const { data } = sliderBanner;

  return (
    <>
      <div className='banner-section'>
        <div className='container py-5'>
          <div className='banner-section'>
            <Row className='gx-2'>
              <Col sm={12} md={12} lg={9}>
                <div className='slider-banner-wrapper'>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper'
                  >
                    {data?.map((image) => {
                      const { id, img } = image;
                      return (
                        <SwiperSlide className='swiper_slide' key={id}>
                          <Image
                            // className='banner-image'
                            src={`${url}/get/image/content_images/${img}`}
                            alt=''
                            layout='fill'
                            priority
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </Col>

              <Col lg={3}>
                <div className='d-none d-md-none d-lg-block d-xl-block'>
                  <div className='banner-sidebar'>
                    <Row>
                      <Col lg={12}>
                        <div className='inner-card position-relative overflow-hidden'>
                          <Image
                            src='/assets/discount-related/rrf_stop_violence.jpg'
                            alt=''
                            layout='fill'
                          />
                        </div>
                      </Col>
                      <Col style={{ marginTop: '10px' }}>
                        <div className='inner-card position-relative overflow-hidden'>
                          <Image
                            src='/assets/discount-related/rrf_agriculture.jpg'
                            alt=''
                            layout='fill'
                          />
                          {/* <DivLoader /> */}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
