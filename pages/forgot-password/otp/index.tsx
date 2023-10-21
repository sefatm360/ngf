import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ShowSpinner from '../../../components/ShowSpinner/ShowSpinner';
import Timer from '../../../components/Timer/Timer';
import { useState } from 'react';
import { url } from '../../../components/Helpers/Constant';
import { useRouter } from 'next/router';
import handleOtp from '../../../components/Hooks/handleOtp';
import { Ilocale } from '../../../PageTypes/commonType/commonType';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState('');
  const router = useRouter();
  const { t } = useTranslation(['login_reg']);

  useEffect(() => {
    const forgetNumber = sessionStorage.getItem('forgetPhoneNumber');

    if (forgetNumber) {
      setNumber(forgetNumber);
    }
  }, []);

  const sendOtp = () => {
    handleOtp({
      phone: Number(number),
      handleOtpRoute: router.replace,
      route: '/forgot-password/otp',
      setError: setError,
      type: 'forget',
      user: 'customer',
      setIsLoading: setIsLoading,
    });
  };

  const handleOtpSubmit = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    setError('');
    const resetDetails: any = {};
    resetDetails.otp_creds = {
      otp: otp,
      phone: Number(number),
      type: 'forget',
    };

    fetch(`${url}/api/otp/match`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(resetDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setToken(data.token);
          sessionStorage.setItem('ot_tk', data.token);
          setIsLoading(false);
          router.push('/forgot-password/new-password');
        } else {
          setIsLoading(false);
          setError(data.message);
        }
      });
  };

  return (
    <>
      <div className='form-wrapper-signup'>
        <Container>
          <Row>
            <Col md={4} className='mx-auto'>
              <form action='otpsubmit' onSubmit={handleOtpSubmit}>
                <div className='my-5 d-flex align-items-center justify-content-center flex-column sign-up-form'>
                  <h3 className='fw-bold mb-3'>{t('Enter Otp')}</h3>
                  <input
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    placeholder={t('Otp')}
                    className='sign-up-input w-100 form-control'
                    type='text'
                  />
                  <div className='mt-2'>
                    <small className='text-danger'>{error}</small>
                  </div>
                  <div className='text-center'>
                    <Timer sendOtp={sendOtp} />
                  </div>
                  <div className='text-center'>
                    {isLoading ? (
                      <div className='loading-btn my-2'>
                        <div className=' d-flex align-items-center justify-content-center '>
                          <div style={{ position: 'absolute' }}>
                            <ShowSpinner />
                          </div>
                          <input
                            style={{ background: '#ff85ac' }}
                            className='my-4 text-center cmn-dark-btn  w-100'
                            type='submit'
                            disabled
                            value={t('Please wait..')}
                          />
                        </div>
                      </div>
                    ) : (
                      <input
                        className='mt-4 cmn-btn border-0'
                        type='submit'
                        value={t('Submit')}
                      />
                    )}
                  </div>
                  {/* <div className='text-center mt-3'>
                    <Link href='/join'>{t('Join')}</Link>
                  </div> */}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
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
