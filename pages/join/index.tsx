import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { JOIN_TRY_SUCCESS, url } from '../../components/Helpers/Constant';
import handleOtp from '../../components/Hooks/handleOtp';
import Meta from '../../components/Meta/Meta';
import { useJoinContext } from '../../contexts/JoinContextFile/JoinContext';

const JoinPage = () => {
  const [number, setNumber] = useState<string>('');
  const { dispatch } = useJoinContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { t } = useTranslation(['joinAndReg']);

  const handleJoin = (e: any) => {
    setIsLoading(true);
    setError('');
    e.preventDefault();
    if (number.startsWith('01') && number.length === 11) {
      axios.get(`${url}/api/customer/get/by-phone/${number}`).then((res) => {
        if (res.data.success) {
          if (res.data.data?.guest === 0) {
            dispatch?.({ type: JOIN_TRY_SUCCESS, payload: { phone: number } });
            setIsLoading(false);
            router.push('/login');
          } else if (res.data.data?.guest === 1) {
            dispatch?.({ type: JOIN_TRY_SUCCESS, payload: res.data.data });
            handleOtp({
              phone: Number(number),
              handleOtpRoute: router.replace,
              setError,
              type: 'register',
              route: '/signup/otp',
              setIsLoading,
            });
          } else {
            dispatch?.({ type: JOIN_TRY_SUCCESS, payload: { phone: number } });
            handleOtp({
              phone: Number(number),
              handleOtpRoute: router.replace,
              setError,
              type: 'register',
              route: '/signup/otp',
              setIsLoading,
            });
          }
        } else {
          setIsLoading(false);
        }
      });
    } else {
      setError('Invalid Number');
      setIsLoading(false);
    }
  };

  // localization erroe show
  useEffect(() => {
    if (error) {
      setError(t('Invalid Number'));
    }
  }, [t, error]);
  return (
    <>
      <Meta title='Nowabenki Gonomukhi Foundation (NGF) | join' />
      <div className='form-wrapper-signup d-flex align-items-center'>
        <Container>
          <Row>
            <Col md={4} className='mx-auto'>
              <div className='my-5 text-center sign-up-form'>
                <form action='' onSubmit={handleJoin}>
                  <h4 className='fw-bold mb-3 '>{t('Enter Your Number')}</h4>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    onClick={() => setError('')}
                    required
                    placeholder={t('Enter Your Number')}
                    className='my-1 w-100 px-2 py-2 sign-up-input'
                    type='text'
                  />
                  <div className='my-1 text-center'>
                    <small className='text-danger'>{error}</small>
                  </div>
                  {isLoading ? (
                    <div className='loading-btn my-2'>
                      <div className=' d-flex align-items-center justify-content-center '>
                        {/* <ShowSpinner /> */}
                        <input type='submit' disabled value={t('Joining...')} />
                      </div>
                    </div>
                  ) : (
                    <input
                      className='my-2  next-btn'
                      type='submit'
                      value={t('Join')}
                    />
                  )}
                  <div className='text-center mt-3'>
                    <Link
                      className=' text-decoration-none'
                      href='/forgot-password'
                    >
                      <a>{t('Forgot password')} ?</a>
                    </Link>
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

export default JoinPage;
