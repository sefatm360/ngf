import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../../../components/Helpers/Constant';
import ShowSpinner from '../../../components/ShowSpinner/ShowSpinner';
import Toaster from '../../../components/utils/Toaster';
import { Ilocale } from '../../../PageTypes/commonType/commonType';

const NewPassword = () => {
  const [token, setToken] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('');
  const router = useRouter();
  const [passwordType, setPasswordType] = useState<string>('password');
  const { t } = useTranslation(['login_reg']);

  const Toast = Toaster();

  useEffect(() => {
    const otpToken = sessionStorage.getItem('ot_tk');
    const forgetNumber = sessionStorage.getItem('forgetPhoneNumber');
    if (otpToken && forgetNumber) {
      setToken(otpToken);
      setNumber(forgetNumber);
    }
  }, []);

  const handleNewPassword = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    setError('');
    const HandleNewPassword = {
      token,
      password: newPassword,
      phone: Number(number),
    };

    if (newPassword === repeatPassword && newPassword.length > 5) {
      fetch(`${url}/api/auth/forget/customer`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(HandleNewPassword),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            Toast.fire({
              icon: 'success',
              title: 'Password Reset Successfully',
            });
            setIsLoading(false);
            router.push('/login');
            localStorage.removeItem('forgetPhoneNumber');
            localStorage.removeItem('ot_tk');
          } else {
            setIsLoading(false);
            setError('Something is Wrong. Please try again');
          }
        });
    } else {
      setIsLoading(false);
      setError(
        'Password does not match and password length must be six or more'
      );
    }
  };
  return (
    <div>
      <div className='form-wrapper-signup'>
        <Container>
          <Row>
            <Col md={4} className='mx-auto'>
              <form action='' onSubmit={handleNewPassword}>
                <div className='my-5 sign-up-form'>
                  <h3 className='fw-bold mb-4 text-center'>
                    {t('enterNewPassword')}
                  </h3>
                  <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder={t('enterNewPassword')}
                    className='sign-up-input w-100'
                    type={passwordType}
                  />
                  <input
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                    placeholder={t('enterRepeatPassword')}
                    className='sign-up-input w-100 mt-3'
                    type={passwordType}
                  />
                  <div className='mt-2'>
                    <input
                      type='checkbox'
                      onClick={() => {
                        passwordType === 'password'
                          ? setPasswordType('text')
                          : setPasswordType('password');
                      }}
                    />
                    <span className='ms-2 '>{t('Show Password')}</span>
                  </div>
                  <div>
                    <small className='text-center text-danger my-2'>
                      {error}
                    </small>
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
                            value='Please wait..'
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
                  {/* <div className='text-center mt-3 d-flex gap-3'>
                    <Link href='/join'>join</Link>
                    <Link href='/forgot-password'>forgot password</Link>
                  </div> */}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewPassword;

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
