import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../../components/Helpers/Constant';
import ShowProducts from '../../components/ShowProducts/ShowProducts';
import { IqueenProduct, IqueenProps } from '../../PageTypes/queen/queenTypes';
import { MdLocationOn } from 'react-icons/md';
import Meta from '../../components/Meta/Meta';
const SingleQueen = ({ data }: IqueenProps) => {
  const [queensProduct, setQueensProduct] = useState<IqueenProduct[]>([]);
  const { t } = useTranslation(['home']);
  const { data: productDetails } = data.data;
  const { city, designation, photo, name } = productDetails || {};

  useEffect(() => {
    setQueensProduct(data.productData.data);
  }, [data.productData.data]);
  return (
    <>
      <Meta title='Queen | Nowabenki Gonomukhi Foundation (NGF)' />

      <div className='single-queen-section'>
        <Container className='py-5'>
          <div className=''>
            <Row>
              <Col md={12} lg={3} className='queen-border'>
                <div className='queen-info'>
                  <Card className='text-center pb-3'>
                    <div>
                      <div className='text-center overflow-hidden w-100 h-100 p-3'>
                        <Image
                          loading='lazy'
                          className='rounded-circle box-shadow single-queen-dp'
                          objectFit='cover'
                          width='130px'
                          height='130px'
                          src={`${url}/get/image/queens/${photo}`}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className=' text-start'>
                      <div className='p-3'>
                        <h5 className=' font-jost mb-1 fw-bold text-center text-title'>
                          {t('queen')} {name.split(' ')[0]} {t('store')}
                        </h5>

                        {designation && (
                          <h5 className='mb-2 text-center font-jost designation-text '>
                            {designation}
                          </h5>
                        )}

                        <div className='text-center d-flex align-items-center justify-content-center text-title font-jost location-text'>
                          <MdLocationOn className='title-color me-1' />
                          {city}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Col>
              <Col className='overflow-hidden'>
                <div className='scrollable-div'>
                  <div className='right-product-side '>
                    <h4 className='fw-bold font-exo mb-4 text-dark'>
                      {t('queenProducts')}
                    </h4>

                    <>
                      {queensProduct.length ? (
                        <Row
                          lg={4}
                          md={2}
                          xs={2}
                          className='gx-2 gx-md-3 gx-lg-4'
                        >
                          {queensProduct.map((product) => (
                            <ShowProducts key={product.id} product={product} />
                          ))}
                        </Row>
                      ) : (
                        <h5>{t('noAvailableProductsThisQueen')}</h5>
                      )}
                    </>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data;
  let productData;
  try {
    const res = await fetch(
      `${url}/api/admin/queen/getqueen/${context.params?.queenId}`
    );
    const resData = await res.json();
    if (resData.success) {
      data = resData;
    } else {
      return {
        notFound: true,
      };
    }

    const resProduct = await fetch(
      `${url}/api/admin/product/get/all/by-queen/${context.params?.queenId}`
    );
    const resProductData = await resProduct.json();
    if (resProductData.success) {
      productData = resProductData;
    } else {
      return { notFound: true };
    }
  } catch (error) {
    return { notFound: true };
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
      data: { data, productData },
    },
  };
};

export default SingleQueen;
