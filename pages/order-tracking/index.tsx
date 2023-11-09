import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { url } from '../../components/Helpers/Constant';
import Image from 'next/image';
import Link from 'next/link';
import Meta from '../../components/Meta/Meta';
import { IorderTracking } from '../../PageTypes/orderTracking/orderTracking';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import { SiMinutemailer } from 'react-icons/si';
const OrderTracking = () => {
  const [order, setOrder] = useState<IorderTracking | null>(null);
  const [id, setId] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [idError, setIdError] = useState<string>('');
  const { register } = useForm();
  const { t } = useTranslation(['common']);

  const handelTracking = async (e: any) => {
    setLoading(true);
    if (id === '') {
      setLoading(false);
      setIdError('Please Enter your order id');
      setTimeout(() => {
        setIdError('');
      }, 5000);
    }

    if (phoneNumber.length === 11 || id) {
      const res = await fetch(
        `${url}/api/orders/get/${id}/track/status?phone=${phoneNumber}`
      );
      const data = await res.json();

      if (data.success) {
        setOrder(data.data);
        setMessage('');
        setStatus(data.data.status);
        setLoading(false);
      } else {
        setError('Wrong Order Id/Number, Please Enter Right information');
        setTimeout(() => {
          setError('');
        }, 8000);
      }
    } else {
      return [
        setMessage('Please Enter vaild Number'),
        setTimeout(() => {
          setMessage('');
          setIdError('');
          setError('');
        }, 5000),
      ];
    }
  };

  return (
    <>
      <div className='order-tracking-section py-5'>
        <Container>
          <Meta title='Order-tracking | Nowabenki Gonomukhi Foundation (NGF)' />
          {/* text tracking  */}
          <div>
            <h1 className='section-title'>{t('orderTracking')}</h1>
          </div>
          <div>
            <Row>
              <Col md={6} className='d-flex align-items-center '>
                <div>
                  <Image
                    width={550}
                    height={427}
                    src='/assets/order-tracking.png'
                    alt=''
                  />
                </div>
              </Col>
              <Col
                md={6}
                className='d-flex align-items-center justify-content-start'
              >
                <div className='mb-4 '>
                  <div>
                    <p className='my-4 return-text'>{t('trackingText')}</p>
                    <div>
                      <h6 className=' input-label'>{t('phoneNumber')} </h6>
                      <input
                        className=' ps-2 w-75 text-input '
                        type='number'
                        placeholder={t('enterPhoneNumber')}
                        {...register('phone-number')}
                        onChange={(e) => {
                          e.target.value && setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>

                    <small className=' text-danger d-block mb-2'>
                      {message}
                    </small>

                    <div>
                      <div>
                        <h6 className='input-label'>{t('orderId')}</h6>

                        <div className='input-group w-75'>
                          <span className='input-group-text' id='basic-addon1'>
                            NGF-O
                          </span>
                          <input
                            className='form-control'
                            aria-label='Username'
                            aria-describedby='basic-addon1'
                            type='number'
                            placeholder={t('enterOrderId')}
                            {...register('order-id')}
                            onChange={(e) => {
                              e.target.value && setId(e.target.value);
                            }}
                            onKeyPress={(e) => {
                              e.key === 'Enter' && handelTracking(e);
                            }}
                          />
                        </div>
                        <small className='my-3  text-danger d-block'>
                          {idError}
                        </small>
                        {loading ? (
                          <button
                            className='border-0  mt-2'
                            onClick={handelTracking}
                          >
                            {t('track')}
                          </button>
                        ) : (
                          <button
                            className='border-0 cmn-btn mt-2'
                            onClick={handelTracking}
                          >
                            {t('track')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* show order  */}
                  <div className='my-5 '>
                    <>
                      {loading ? (
                        <h5 className='text-danger fw-bold'>{error}</h5>
                      ) : (
                        <>
                          <div className=''>
                            {status === 'Pending' && (
                              <div className='text-center tracking-details'>
                                <div>
                                  {t('order')}
                                  <span className='fw-bold font-jost px-1'>
                                    NGF-O ( {order?.order_id} )
                                  </span>
                                  {t('status')}
                                  <span className='ps-2 text-primary fs-4 pending font-jost'>
                                    {order?.status}
                                  </span>
                                </div>
                                <div className='mt-3'>
                                  <p className='mb-3'>
                                    {t('forMoreInformation')}
                                    (+8809638336677 , +8801894829225)
                                  </p>
                                  <Link href='/contact'>
                                    <a className='text-dark'>
                                      {t('sendMessage')}
                                      <span className='ms-2 fs-5'>
                                        <SiMinutemailer />
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                            {status === 'Approved' && (
                              <div className='text-center tracking-details'>
                                <div>
                                  {t('order')}
                                  <span className='fs-5 px-1'>
                                    NGF-O ( {order?.order_id})
                                  </span>
                                  {t('status')}
                                  <span className='ps-2 text-primary fs-4 approved'>
                                    {order?.status}
                                  </span>
                                </div>
                                <div className='mt-3'>
                                  <p>
                                    {t('forMoreInformation')}
                                    (+8809638336677 , +8801894829225)
                                  </p>
                                  <Link
                                    className=' text-decoration-none'
                                    href='/contact'
                                  >
                                    <a className=' '>
                                      {t('sendMessage')}
                                      <span className='ms-2 fs-5'>
                                        <SiMinutemailer />
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                            {status === 'Rejected' && (
                              <div className='text-center tracking-details'>
                                <div>
                                  {t('order')}
                                  <span className='fs-5 px-1'>
                                    NGF-O ( {order?.order_id} )
                                  </span>
                                  {t('status')}
                                  <span className='ps-2 text-primary fs-4 rejected'>
                                    {order?.status}
                                  </span>
                                </div>
                                <div className='mt-3'>
                                  <p>
                                    {t('forMoreInformation')}
                                    (+8809638336677 , +8801894829225)
                                  </p>
                                  <Link
                                    className=' text-decoration-none'
                                    href='/contact'
                                  >
                                    <a className=''>
                                      {t('sendMessage')}
                                      <span className='ms-2 fs-5'>
                                        <SiMinutemailer />
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                            {status === 'Shifted' && (
                              <div className='text-center tracking-details'>
                                <div>
                                  {t('order')}
                                  <span className='fs-5 px-1'>
                                    NGF-O ( {order?.order_id} )
                                  </span>
                                  {t('status')}
                                  <span className='ps-2 text-primary fs-4'>
                                    {order?.status}
                                  </span>
                                </div>
                                <div className='mt-3'>
                                  <p>
                                    {t('forMoreInformation')}
                                    (+8809638336677 , +8801894829225)
                                  </p>
                                  <Link href='/contact'>
                                    <a className=' '>
                                      {t('sendMessage')}
                                      <span className='ms-2 fs-5'>
                                        <SiMinutemailer />
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                            {status === 'Delivered' && (
                              <div className='text-center tracking-details'>
                                <div>
                                  {t('order')}
                                  <span className='fs-5 px-1'>
                                    NGF-O ( {order?.order_id})
                                  </span>
                                  {t('status')}
                                  <span className='ps-2 text-primary fs-4'>
                                    {order?.status}
                                  </span>
                                </div>
                                <div className='mt-3'>
                                  <p>
                                    {t('forMoreInformation')}
                                    (+8809638336677 , +8801894829225)
                                  </p>
                                  <Link href='/contact'>
                                    <a className=' delivered'>
                                      {t('sendMessage')}
                                      <span>
                                        <SiMinutemailer />
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </>
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

export default OrderTracking;

export async function getStaticProps({ locale }: Ilocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
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
    },
  };
}
