import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { SET_CART_SUCCESS, url } from '../../../components/Helpers/Constant';
import Link from 'next/link';
import { ProductLoader } from '../../../components/Spinner/Spinner';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import RelatedProducts from '../../../components/Relatedproducts/RelatedProducts';
import Meta from '../../../components/Meta/Meta';
import { useRouter } from 'next/router';
import SingleProductReview from '../../../components/SingleProduct/SingleProductReview/SingleProductReview';
import AskQuestionProduct from '../../../components/SingleProduct/AskQuestionProduct/AskQuestionProduct';
import { useCartContext } from '../../../contexts/CartContextFile/CartContext';
import HandleCart from '../../../components/Helpers/HandleCart';
import {
  IcategoryProduct,
  IproductProps,
  IsingleProduct,
} from '../../../PageTypes/product/productTypes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import ReactImageMagnify from 'react-image-magnify';

// import ReactStars from 'react-stars';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import dynamic from 'next/dynamic';

const ReactStars = dynamic(() => import('react-stars'), {
  ssr: false,
});

const ReactImageMagnify = dynamic(() => import('react-image-magnify'), {
  ssr: false,
});

const SingleProduct = ({ productData }: IproductProps) => {
  const { data } = productData || {};
  const [singleProduct, setSingleProduct] = useState<IsingleProduct>(data);
  const [image, setImage] = useState<string | null>(
    singleProduct.product_picture_1
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [categoryProducts, setCategoryProducts] = useState<IcategoryProduct[]>(
    []
  );
  const [fetching, setFetching] = useState<boolean>(true);
  const { dispatch: cartDispatch } = useCartContext();
  const { t } = useTranslation(['products']);
  const [productId, setProductId] = useState<number>(0);
  const router = useRouter();
  const id = router.query.productId;

  let location;

  if (typeof window !== 'undefined') {
    location = window.location.href;
  }

  useEffect(() => {
    setSingleProduct(data);
    setProductId(data.product_id);
  }, [data]);

  useEffect(() => {
    setImage(singleProduct.product_picture_1);
  }, [singleProduct.product_picture_1]);

  useEffect(() => {
    setFetching(true);
    singleProduct.category &&
      axios
        .get(
          `${url}/api/admin/product/get/all/by-category/${singleProduct.category}?limit=10&skip=0`
        )
        .then((res) => {
          setCategoryProducts(res.data.data);
          setFetching(false);
        });
  }, [singleProduct]);

  const img = `${url}/get/image/products/${image}`;

  const handleAddToCart = ({ id }: any) => {
    const nowCart = HandleCart({
      quantity,
      singleProduct,
    });

    cartDispatch?.({ type: SET_CART_SUCCESS, payload: nowCart });
    localStorage.setItem('cart', JSON.stringify(nowCart));
    router.push('/cart');
  };

  return (
    <>
      <Meta
        title={`${singleProduct.product_name} | Nowabenki Gonomukhi Foundation (NGF)`}
        description={singleProduct?.short_desc}
        keywords={singleProduct.category}
        contentImg={`${url}/get/image/products/${singleProduct?.product_picture_1}`}
        subjectUrl={`https://onthe-way.com/${router.asPath}`}
      />
      <div className='single-product-section'>
        <Container>
          <div className='py-5'>
            <Row>
              <Col md={6}>
                <div className='d-flex flex-column align-items-center pt-3 image-wrapper'>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: `${img}`,
                        sizes:
                          '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                      },
                      largeImage: {
                        src: `${img}`,
                        width: 1200,
                        height: 1800,
                      },
                      enlargedImageContainerDimensions: {
                        width: '100%',
                        height: '100%',
                      },
                    }}
                  />

                  <div className='d-flex align-items-center pt-4 btn-image-wrapper'>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        border: '2px solid black',
                        borderRadius: '6px',
                        overflow: 'hidden',
                      }}
                      onClick={() => setImage(singleProduct.product_picture_1)}
                      className={
                        image === singleProduct?.product_picture_1
                          ? ' pointer ms-2'
                          : 'active-img pointer me-2'
                      }
                    >
                      <Image
                        loading='lazy'
                        layout='fill'
                        objectFit='cover'
                        src={`${url}/get/image/products/${singleProduct?.product_picture_1}`}
                        alt=''
                      />
                    </div>
                    {singleProduct.product_picture_2 && (
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          position: 'relative',
                          border: '2px solid black',
                          borderRadius: '6px',
                          overflow: 'hidden',
                        }}
                        onClick={() =>
                          setImage(singleProduct.product_picture_2)
                        }
                        className={
                          image === singleProduct.product_picture_2
                            ? ' pointer '
                            : 'active-img pointer ms-2 '
                        }
                      >
                        <Image
                          loading='lazy'
                          className=''
                          layout='fill'
                          objectFit='cover'
                          src={`${url}/get/image/products/${singleProduct.product_picture_2}`}
                          alt=''
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='ms-0 ms-md-5 mb-4 mt-5 mt-md-0 mt-lg-0'>
                  <div className='my-3'>
                    <small>
                      {t('queen')}
                      <Link href={`/queen/${singleProduct.queen_id}`}>
                        <span className='mx-1 text-main fw-bold pointer'>
                          {singleProduct.queen_name?.split(' ')[0]}
                          {router.locale === 'en' && <>&apos;</>}
                          {router.locale === 'bn' ? (
                            <span className='ps-1'>{t('er')}</span>
                          ) : (
                            <span>{t('er')}</span>
                          )}
                        </span>
                      </Link>
                      {t('Product')}
                    </small>
                  </div>
                  <div className='border-bottom'>
                    <h3 className='fw-bold text-capitalize mb-2'>
                      {singleProduct.product_name}
                    </h3>

                    {singleProduct.rating && (
                      <h1 className=' fs-5 '>
                        <ReactStars
                          value={Number(singleProduct.rating)}
                          edit={false}
                          size={20}
                          color2={'#ffc107'}
                        />
                      </h1>
                    )}

                    <div className='mt-3'>
                      <span className='fw-bold text-uppercase me-2'>
                        {t('Category')} :
                      </span>
                      <Link href={`/products/${singleProduct.category}`}>
                        <a className=' text-decoration-underline  text-dark font-exo'>
                          {singleProduct.category}
                        </a>
                      </Link>
                    </div>

                    <div className='mt-3'>
                      <span className='fw-bold text-uppercase me-2'>
                        {t('delivery')} :
                      </span>

                      <a className='  text-dark font-exo'>
                        {singleProduct.delivery_day} {t('day')}
                      </a>
                    </div>

                    <div className='my-3'>
                      <p className='text-uppercase fw-bold mb-2'>
                        {t('description')} :
                      </p>
                      {singleProduct.short_desc?.split('||').map((des) => {
                        return <p key={des}> {des} </p>;
                      })}
                    </div>
                    <div className='my-2'>
                      <h3 className='fw-bold'>
                        <span className=''>&#2547; {singleProduct.price}</span>
                      </h3>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-4'>
                    <div className='me-2 align-items-center quantity d-flex '>
                      <button
                        value=':focus-visible only'
                        className='quantity-level'
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      {/* <h4> */}
                      <input
                        type='number'
                        value={quantity}
                        min={1}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className='quantity-input'
                      />
                      {/* </h4> */}
                      <button onClick={() => setQuantity(quantity + 1)}>
                        +
                      </button>
                    </div>
                    <div>
                      {singleProduct.stock_status ? (
                        <>
                          {quantity < 1 ? (
                            <button
                              onClick={() => handleAddToCart({ id })}
                              className='p-2 add-to-cart-button'
                              disabled
                            >
                              {t('addToCart')}
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAddToCart({ id })}
                              className='p-2 add-to-cart-button'
                            >
                              {t('addToCart')}
                            </button>
                          )}
                        </>
                      ) : (
                        <small className='add-to-cart-button bg-info p-2'>
                          {t('outOfStock')}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className='my-5'>
                    <div className='d-flex align-items-center gap-2 mt-3'>
                      <h6 className=''>{t('Social Share')} : </h6>
                      <EmailShareButton url={String(location)}>
                        <EmailIcon size={30} borderRadius={6} />
                      </EmailShareButton>
                      <FacebookShareButton url={String(location)}>
                        <FacebookIcon size={30} borderRadius={6} />
                      </FacebookShareButton>
                      <TwitterShareButton url={String(location)}>
                        <TwitterIcon size={30} borderRadius={6} />
                      </TwitterShareButton>
                      <WhatsappShareButton url={String(location)}>
                        <WhatsappIcon size={30} borderRadius={6} />
                      </WhatsappShareButton>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Rating section  */}
          <div className='mt-5'>
            <SingleProductReview singleProduct={singleProduct} />
          </div>
          {/* faq for single product  */}
          <div className='mt-5'>
            <AskQuestionProduct productId={productId} />
          </div>
        </Container>
        <div className='related-product-section'>
          <div className='container py-5'>
            <h2 className='section-title '>{t('Related Products')}</h2>
            <div className='my-3'>
              {fetching ? (
                <ProductLoader />
              ) : (
                <RelatedProducts categoryProducts={categoryProducts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let productData: object = {};
  try {
    const res = await fetch(
      `${url}/api/admin/product/get/by-id/${context.params?.productId}`
    );
    const resProductData = await res.json();

    if (resProductData.success) {
      productData = resProductData;
    } else {
      return {
        notFound: true,
      };
    }
  } catch (err) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        'about',
        'bundle',
        'cart',
        'common',
        'footer',
        'home',
        'login_reg',
        'memories',
        'products',
        'profile',
      ])),
      productData,
    },
  };
};

export default SingleProduct;
