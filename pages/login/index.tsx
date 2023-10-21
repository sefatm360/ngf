import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AUTH_USER_SUCCESS, url } from '../../components/Helpers/Constant';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { useJoinContext } from '../../contexts/JoinContextFile/JoinContext';
import ShowSpinner from '../../components/ShowSpinner/ShowSpinner';
import LeftLoginCol from '../../components/utils/LeftLoginCol';
import { Col, Container, Form, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

const LoginPage = () => {
  const { joinData } = useJoinContext();
  const { dispatch: authDispatch } = useAuthContext();
  const [loginError, setLoginError] = useState<string>('');
  const [showPass, setShowPass] = useState<string>('password');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [number, setNumber] = useState(joinData?.phone);
  const [password, setPassword] = useState<string>('');
  const { t } = useTranslation(['login_reg']);
  const router = useRouter();
  const loginInfo = { phone: Number(number), password };

  useEffect(() => {
    if (loginError) {
      setLoginError('Wrong Number or Password');
    }
  }, [t, loginError]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setLoginError('');

      fetch(`${url}/api/auth/customer/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(loginInfo),
        credentials: 'include',
        mode: 'cors',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            authDispatch?.({
              type: AUTH_USER_SUCCESS,
              payload: { user: data.data, token: data.token },
            });
            setCookie(null, '__ca_otw', data.token);
            setLoginError('');
            router.push('/profile');
            setIsLoading(false);
          } else {
            setIsLoading(false);
            setLoginError(t('Wrong Number or Password'));
          }
        });
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Meta title='Login | Nowabenki Gonomukhi Foundation (NGF)' />
      <div className='form-wrapper-login'>
        <Container>
          <Row>
            <Col>
              <Row className='justify-content-center gx-0 login-column-wrapper bg-light'>
                <Col md={7}>
                  <LeftLoginCol />
                  {/* </div> */}
                </Col>
                <Col md={5}>
                  <div className='text-center sign-up-form'>
                    <form action='' onSubmit={handleLogin}>
                      <h2 className='fw-bolder mb-4 '>{t('Login')}</h2>

                      {/* <input
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    placeholder={t('Enter Your Number')}
                    className='my-2 sign-up-input w-100 p-2'
                    type='text'
                    defaultValue={joinData?.phone}
                  /> */}
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-start d-block'>
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type='text'
                          onChange={(e) => setNumber(e.target.value)}
                          required
                          placeholder={t('enterYourNumber')}
                          className='my-2 sign-up-input w-100 p-2'
                          defaultValue={joinData?.phone}
                        />
                      </Form.Group>
                      {/* <input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder={t('Enter Password')}
                    className='my-2 sign-up-input w-100 p-2'
                    type={showPass}
                  /> */}
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label className='text-start d-block'>
                          Password
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder={t('enterPassword')}
                          className='my-2 sign-up-input w-100 p-2'
                          type={showPass}
                        />
                      </Form.Group>
                      {loginError && (
                        <div className='mb-3 fw-bold text-start'>
                          <small className='text-danger'>{loginError}</small>
                        </div>
                      )}
                      <div className='text-start'>
                        <input
                          type='checkbox'
                          onClick={() => {
                            showPass === 'password'
                              ? setShowPass('text')
                              : setShowPass('password');
                          }}
                        />
                        <span className=' ms-2'>{t('Show Password')}</span>
                      </div>
                      {isLoading ? (
                        <div className='loading-btn my-2'>
                          <div className=' d-flex align-items-center justify-content-center '>
                            <div style={{ position: 'absolute' }}>
                              <ShowSpinner />
                            </div>
                            <input
                              style={{ background: '#ff85ac' }}
                              className='my-4 text-center cmn-dark-btn  w-100'
                              // type='submit'
                              disabled
                              value={t('Login...')}
                            />
                          </div>
                        </div>
                      ) : (
                        <input
                          className='my-4 cmn-dark-btn main-bg w-100'
                          type='submit'
                          value={t('Login')}
                        />
                      )}

                      <div className='text-center mb-2'>
                        <Link href='/forgot-password'>
                          <a className='font-exo'>{t('forgotPassword')} ?</a>
                        </Link>
                      </div>
                      <div className='text-center'>
                        <Link className=' text-decoration-none' href='/signup'>
                          <a className='font-exo text-decoration-underline'>
                            {t('Create an account')}
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
// export async function getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'about',
//         'bundle',
//         'cart',
//         'common',
//         'footer',
//         'home',
//         'login_reg',
//         'memories',
//         'products',
//         'profile',
//       ])),
//     },
//   };
// }

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
}) => {
  console.log(req.cookies.__ca_otw);
  if (req.cookies.__ca_otw !== undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile',
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
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
};
