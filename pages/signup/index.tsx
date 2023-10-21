import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { useRouter } from 'next/router';
import {
  AUTH_USER_SUCCESS,
  SET_SIGNUP_DATA,
  url,
} from '../../components/Helpers/Constant';
import ShowSpinner from '../../components/ShowSpinner/ShowSpinner';
import handleOtp from '../../components/Hooks/handleOtp';
import Meta from '../../components/Meta/Meta';
import axios from 'axios';
import Link from 'next/link';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LeftLoginCol from '../../components/utils/LeftLoginCol';
import Toaster from '../../components/utils/Toaster';
import { districts, Division } from '../../components/district/DistrictInfo';

const SignupPage = () => {
  const { dispatch: AuthDispatch, signUp } = useAuthContext();
  const [repeatPass, setRepeatPass] = useState('');
  const [passError, setPassError] = useState('');
  const [showPass, setShowPass] = useState('password');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [number, setNumber] = useState(signUp.phone);
  const [alreadyRegistered, setAlreadyRegisterd] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const Toast = Toaster();
  const router = useRouter();
  const [divisonVal, setDivisionVal] = useState('Dhaka');
  const [cityVal, setCityVal] = useState('');

  const { t } = useTranslation(['login_reg']);
  const { password, phone, division } = signUp;

  useEffect(() => {
    setNumber(phone);
  }, [phone]);

  useEffect(() => {
    const filterDivision: any[] = [];
    const defaultCity = districts?.map((district: any) => {
      if (district.division_name === divisonVal) {
        return district.name;
      }
    });

    defaultCity.map((dc) => {
      if (typeof dc !== 'undefined') {
        filterDivision.push(dc);
      }
    });
    if (filterDivision) {
      setCityVal(filterDivision[0]);
      AuthDispatch?.({
        type: SET_SIGNUP_DATA,
        payload: {
          field: 'city',
          value: filterDivision[0],
        },
      });
    }
  }, [divisonVal, AuthDispatch]);

  const handleHaveLoggedIn = (e: any) => {
    e.preventDefault();

    if (password === repeatPass && password.length > 5) {
      setPassError('');
      setAlreadyRegisterd(false);
    } else {
      setPassError('Password must be same and length will be six or more');
      setAlreadyRegisterd(false);
      return;
    }
    if (number?.startsWith('01') && number.length === 11) {
      setPhoneError(false);
      setAlreadyRegisterd(false);
    } else {
      setPhoneError(true);
      setAlreadyRegisterd(false);
    }

    // check user
    // if (!passError || !phoneError) {
    //   axios.get(`${url}/api/customer/get/by-phone/${number}`).then((res) => {
    //     if (res.data.success) {
    //       if (res.data.data?.guest === 0) {
    //         setAlreadyRegisterd(true);
    //       } else if (res.data.data?.guest === 1) {
    //         handleOtp({
    //           phone: Number(number),
    //           handleOtpRoute: router.push,
    //           setError,
    //           type: 'register',
    //           route: `/signup/otp?number=${number}`,
    //           setIsLoading,
    //         });
    //         setAlreadyRegisterd(false);
    //       } else {
    //         handleOtp({
    //           phone: Number(number),
    //           handleOtpRoute: router.push,
    //           setError,
    //           type: 'register',
    //           route: `/signup/otp?number=${number}`,
    //           setIsLoading,
    //         });
    //       }
    //     } else {
    //       setIsLoading(false);
    //       setAlreadyRegisterd(false);
    //     }
    //   });
    // }

    handleRegister();
  };

  const handleRegister = () => {
    setIsLoading(true);

    fetch(`${url}/api/customer/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...signUp }),
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

  return (
    <>
      <Meta title='Sign Up | Nowabenki Gonomukhi Foundation (NGF)' />

      <div className='form-wrapper-login'>
        <Container>
          <Row className='justify-content-center gx-0 login-column-wrapper bg-light'>
            <Col md={7}>
              <LeftLoginCol />
            </Col>
            <Col md={5}>
              <div className='text-center sign-up-form'>
                <form action='' onSubmit={handleHaveLoggedIn}>
                  <div className=''>
                    <h3 className='fw-bold mb-4'>{t('Sign up')}</h3>
                    {error && (
                      <div className='text-center mb-3'>
                        <small className='text-danger'>{error}</small>
                      </div>
                    )}
                    {alreadyRegistered && (
                      <div className='pb-3'>
                        <small className='text-danger '>
                          You are already registered! Please
                          <Link href='/login'>
                            <a className='ms-1 text-decoration-underline fw-bold'>
                              Login
                            </a>
                          </Link>
                        </small>
                      </div>
                    )}

                    <div className='row'>
                      <div className='col-md-6'>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                          <Form.Label className='text-start d-block'>
                            Full Name
                          </Form.Label>
                          <Form.Control
                            onChange={(e) =>
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'name',
                                  value: e.target.value,
                                },
                              })
                            }
                            required
                            placeholder={t('enterFullname')}
                            className=' w-100 sign-up-input'
                            type='text'
                            defaultValue={signUp?.name}
                          />
                        </Form.Group>
                      </div>
                      <div className='col-md-6'>
                        <Form.Group className='mb-3' controlId='formBasicPhone'>
                          <Form.Label className='text-start d-block'>
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            onChange={(e) =>
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'phone',
                                  value: e.target.value,
                                },
                              })
                            }
                            required
                            className=' w-100 sign-up-input'
                            type='number'
                            placeholder={t('enterNumber')}
                            defaultValue={signUp?.phone}
                          />
                        </Form.Group>
                        {phoneError && (
                          <small className='text-danger'>
                            Invalid number! Phone number should be 11 digit
                          </small>
                        )}
                      </div>
                      <div className='col-md-6'>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label className='text-start d-block'>
                            Email
                          </Form.Label>
                          <Form.Control
                            onChange={(e) =>
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'email',
                                  value: e.target.value,
                                },
                              })
                            }
                            className='  w-100 sign-up-input'
                            type='email'
                            placeholder={t('enterEmail')}
                            defaultValue={signUp?.email}
                          />
                        </Form.Group>
                      </div>

                      <div className='col-md-6'>
                        {' '}
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPostCode'
                        >
                          <Form.Label className='text-start d-block'>
                            Post Code
                          </Form.Label>
                          <Form.Control
                            onChange={(e) =>
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'post_code',
                                  value: e.target.value,
                                },
                              })
                            }
                            required
                            className=' sign-up-input'
                            type='number'
                            placeholder={t('enterPostCode')}
                            defaultValue={signUp?.post_code}
                          />
                        </Form.Group>
                      </div>

                      <div className='col-md-6'>
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicDivision'
                        >
                          <Form.Label className='text-start d-block'>
                            Division
                          </Form.Label>
                          <Form.Select
                            required
                            onChange={(e) => {
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'division',
                                  value: e.target.value,
                                },
                              });
                              setDivisionVal(e.target.value);
                            }}
                            value={divisonVal}
                            aria-label='Default select example'
                          >
                            {Division.map((eachDivision, index) => {
                              return (
                                <option value={eachDivision} key={index}>
                                  {eachDivision}
                                </option>
                              );
                            })}
                          </Form.Select>
                        </Form.Group>
                      </div>
                      <div className='col-md-6'>
                        <Form.Group className='mb-3' controlId='formBasicCity'>
                          <Form.Label className='text-start d-block'>
                            City
                          </Form.Label>
                          <Form.Select
                            required
                            onChange={(e) => {
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'city',
                                  value: e.target.value,
                                },
                              });
                              setCityVal(e.target.value);
                            }}
                            value={cityVal}
                            aria-label='Default select example'
                          >
                            {districts?.map((district: any, index) => {
                              if (district.division_name === divisonVal) {
                                // for (const key in district) {
                                //   if (district[key] === '1') {
                                //     setCityVal(district.name);
                                //   }
                                // }

                                return (
                                  <option key={index} value={district.name}>
                                    {district.name}
                                  </option>
                                );
                              }
                            })}
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className='col-md-6'>
                        {' '}
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicAddress'
                        >
                          <Form.Label className='text-start d-block'>
                            Address
                          </Form.Label>
                          <Form.Control
                            onChange={(e) =>
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'address',
                                  value: e.target.value,
                                },
                              })
                            }
                            required
                            className=' w-100 sign-up-input'
                            type='text'
                            placeholder={t('enterAddress')}
                            defaultValue={signUp?.address}
                          />
                        </Form.Group>
                      </div>

                      <div className='col-md-6'>
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPassword'
                        >
                          <Form.Label className='text-start d-block'>
                            Password
                          </Form.Label>
                          <Form.Control
                            onChange={(e) =>
                              AuthDispatch?.({
                                type: SET_SIGNUP_DATA,
                                payload: {
                                  field: 'password',
                                  value: e.target.value,
                                },
                              })
                            }
                            required
                            placeholder={t('enterNewPassword')}
                            className='w-100 sign-up-input'
                            type={showPass}
                          />
                        </Form.Group>
                      </div>
                      <div className='col-md-6'>
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicRepeatPassword'
                        >
                          <Form.Label className='text-start d-block'>
                            Repeat Passsword
                          </Form.Label>
                          <Form.Control
                            onChange={(e) => setRepeatPass(e.target.value)}
                            required
                            placeholder={t('enterRepeatPassword')}
                            className='w-100 sign-up-input'
                            type={showPass}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <small className='text-danger text-start d-block'>
                      {passError}
                    </small>

                    <div className='mt-2 mb-3 text-start'>
                      <input
                        type='checkbox'
                        onClick={() => {
                          showPass === 'password'
                            ? setShowPass('text')
                            : setShowPass('password');
                        }}
                      />
                      <span className='ms-2'>{t('Show Password')}</span>
                    </div>
                    {isLoading ? (
                      <div className='loading-btn my-2'>
                        <div className=' d-flex align-items-center justify-content-center '>
                          <ShowSpinner />
                          <input
                            type='submit'
                            disabled
                            value={t('Please wait..')}
                          />
                        </div>
                      </div>
                    ) : (
                      <input
                        className='my-2 cmn-btn border-0 w-100'
                        type='submit'
                        value={t('Sign up')}
                      />
                    )}

                    <div className='mt-2'>
                      <Link href='/login'>
                        <a className='text-decoration-underline'>
                          {t('alreadyRegistered')}
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignupPage;
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
