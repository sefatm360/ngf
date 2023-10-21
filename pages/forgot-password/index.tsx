import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import handleOtp from '../../components/Hooks/handleOtp';
import Meta from '../../components/Meta/Meta';
import ShowSpinner from '../../components/ShowSpinner/ShowSpinner';
import { Ilocale } from '../../PageTypes/commonType/commonType';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { t } = useTranslation(['login_reg']);

  const handleForgotPass = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    setError('');
    sendOtp();
  };

  if (number) {
    sessionStorage.setItem('forgetPhoneNumber', number);
  }

  const sendOtp = () => {
    handleOtp({
      phone: Number(number),
      handleOtpRoute: router.push,
      route: '/forgot-password/otp',
      setError: setError,
      type: 'forget',
      user: 'customer',
      setIsLoading: setIsLoading,
    });
  };

  return (
    <>
      <Meta title='Forgot Password | Nowabenki Gonomukhi Foundation (NGF)' />
      <div className='form-wrapper-signup'>
        <Container>
          <Row>
            <Col md={4} className='mx-auto'>
              <form action='' onSubmit={handleForgotPass}>
                <div className='my-5 d-flex align-items-center justify-content-center flex-column sign-up-form'>
                  <h4 className='fw-bold mb-5'>{t('Forgot password')}</h4>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    placeholder={t('Enter Your Number')}
                    className='sign-up-input form-control w-100'
                    type='number'
                  />
                  <div className='mt-2'>
                    <small className='text-danger'>{error}</small>
                  </div>
                  <div className='text-center'>
                    {isLoading ? (
                      <div className='loading-btn my-2'>
                        <div className=' d-flex align-items-center justify-content-center '>
                          <div style={{ position: 'absolute' }}>
                            <ShowSpinner />
                          </div>
                          <input
                            type='submit'
                            disabled
                            style={{ background: '#ff85ac' }}
                            className='my-4 text-center cmn-dark-btn  w-100'
                            value={t('Please wait..')}
                          />
                        </div>
                      </div>
                    ) : (
                      <input
                        className='my-2 cmn-btn border-0'
                        type='submit'
                        value={t('Next')}
                      />
                    )}
                  </div>

                  {/* go back */}

                  <div className='go-back mt-3'>
                    <Link href='/login'>
                      <a className='text-decoration-underline '>Go Back</a>
                    </Link>
                  </div>
                </div>
              </form>
            </Col>

            <Row />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
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
