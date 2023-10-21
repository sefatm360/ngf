import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AUTH_USER_SUCCESS, url } from '../../../components/Helpers/Constant';
import handleOtp from '../../../components/Hooks/handleOtp';
import ShowSpinner from '../../../components/ShowSpinner/ShowSpinner';
import Timer from '../../../components/Timer/Timer';
import Toaster from '../../../components/utils/Toaster';
import { useAuthContext } from '../../../contexts/AuthContextFile/AuthContext';
import { Ilocale } from '../../../PageTypes/commonType/commonType';

const SignUpOtp = () => {
  const [otp, setOtp] = useState('');
  const [passError, setPassError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const [token, setToken] = useState('');
  const [phone, setPhone] = useState('');
  const { dispatch: AuthDispatch, signUp } = useAuthContext();
  const { t } = useTranslation(['login_reg']);
  const Toast = Toaster();

  useEffect(() => {
    const number = router.query.number;
    if (number) {
      setPhone(number as string);
    }
  }, []);

  const sendOtp = () => {
    handleOtp({
      phone: Number(phone),
      handleOtpRoute: router.push,
      setError: setPassError,
      type: 'register',
      route: '/signup/otp',
      setIsLoading: setIsLoading,
    });
  };

  const handleRegister = (token: string) => {
    setIsLoading(true);

    fetch(`${url}/api/customer/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...signUp, token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Toast.fire({
            icon: 'success',
            title: 'SignUp Successfully',
          });
          localStorage.setItem('__u_o', window.btoa(JSON.stringify(data.data)));
          AuthDispatch?.({ type: AUTH_USER_SUCCESS, payload: data.data });
          setPassError('');
          setIsLoading(false);
          router.push('/profile');
        } else {
          setIsLoading(false);
          setPassError(data.message);
        }
      });
  };

  // handle otp submit

  const handleOtpSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const confirmOtp: any = {};
    confirmOtp.otp_creds = {
      phone: Number(phone),
      otp,
      type: 'register',
    };
    fetch(`${url}/api/otp/match`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(confirmOtp),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setToken(data.token);
          setPassError('');
          setIsLoading(false);

          // called register function
          handleRegister(data.token);
        } else {
          setIsLoading(false);
          setPassError(data.message);
        }
      });
  };

  return (
    <>
      <div className='container'>
        <Row>
          <Col md={4} lg={6} className='mx-auto '>
            <div className='my-5 d-flex align-items-center justify-content-center flex-column otp-form'>
              <h3 className='fw-bold my-3 '>{t('Enter Otp')}</h3>
              <form onSubmit={handleOtpSubmit}>
                <input
                  className='my-2  w-100 sign-up-input form-control'
                  placeholder='otp'
                  type='text'
                  required
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div className='text-center'>
                  <small className='text-danger'>{passError}</small>
                </div>
                <div className='text-center my-3'>
                  <Timer sendOtp={sendOtp} />
                </div>
                <div className='text-center'>
                  {isLoading ? (
                    <div className='loading-btn my-2'>
                      <div className=' d-flex align-items-center justify-content-center '>
                        <ShowSpinner />
                        <input
                          className='cmn-btn border-0'
                          type='submit'
                          disabled
                          value='Please wait..'
                        />
                      </div>
                    </div>
                  ) : (
                    <input
                      className='my-2 cmn-btn border-0'
                      type='submit'
                      value={t('Submit')}
                    />
                  )}
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignUpOtp;
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
