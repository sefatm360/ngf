import React from 'react';
import { Row } from 'react-bootstrap';
import { IcategoryProductProps } from '../../PageTypes/product/productTypes';
import ShowProducts from '../ShowProducts/ShowProducts';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const RelatedProducts = ({ categoryProducts }: IcategoryProductProps) => {
  return (
    <>
      <div className='container'>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
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
              1200: {
                slidesPerView: 5,
              },
            }}
            // navigation={true}
            modules={[Autoplay]}
            className='mySwiper'
          >
            {categoryProducts.slice(0, 8).map((product: any, index) => (
              <SwiperSlide key={index}>
                <ShowProducts key={product.id} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </div>
    </>
  );
};

export default RelatedProducts;
