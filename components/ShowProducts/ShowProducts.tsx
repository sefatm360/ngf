import React, { Suspense, useState } from 'react';
import { Badge, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { url } from '../Helpers/Constant';
// import ReactStars from 'react-stars';
import dynamic from 'next/dynamic';

const ReactStars = dynamic(() => import('react-stars'), {
  ssr: false,
});

const ShowProducts = ({ product }: any) => {
  const { t } = useTranslation(['products']);
  const { product_name, price, product_picture_1, id, stock_status, rating } =
    product;

  const [loaded, setLoaded] = useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      <Col className='mb-3'>
        <Link href={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <a className='show-product-card d-flex flex-column justify-content-between overflow-hidden'>
            <div className='product-image-wrapper'>
              <Image
                src={`${url}/get/image/products/${product_picture_1}`}
                className={loaded ? 'd-block product-img ' : 'd-none'}
                onLoad={imageLoaded}
                alt={product_name}
                layout='fill'
                loading='lazy'
              />
            </div>
            <div className='py-2 py-md-3 px-2 '>
              <div className=' d-flex justify-content-between'>
                <h6 className='product-price '>&#2547; {price}</h6>

                {!stock_status && (
                  <small className='text-danger fw-bold rounded  '>
                    <Badge bg='warning'>{t('outOfStock')}</Badge>
                  </small>
                )}
              </div>
              <div className='mt-2'>
                <div className='row'>
                  <div className='col-11 text-truncate product-name'>
                    {/* <p className='text-start product-name mt-2'> */}
                    {product_name}
                    {/* </p> */}
                  </div>
                </div>
              </div>
              <div>
                {rating ? (
                  <span className=' product-ratings '>
                    <ReactStars
                      value={Number(rating)}
                      edit={false}
                      size={16}
                      color1={'#3333'}
                      color2={'#ffc107'}
                    />
                  </span>
                ) : (
                  <span className=' product-ratings'>
                    <ReactStars
                      value={5}
                      edit={false}
                      size={16}
                      color1={'#3333'}
                      color2={'#3333'}
                    />
                  </span>
                )}
              </div>
            </div>
          </a>
        </Link>
      </Col>
    </>
  );
};

export default ShowProducts;
