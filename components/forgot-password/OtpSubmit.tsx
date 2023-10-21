import Link from 'next/link';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ShowSpinner from '../ShowSpinner/ShowSpinner';
import Timer from '../Timer/Timer';

const OtpSubmit = ({
  handleOtpSubmit,
  error,
  isLoading,
  setOtp,
  sendOtp,
}: any) => {
  const { t } = useTranslation(['joinAndReg']);

  return (
    <Col md={4} className='mx-auto'>
      <form action='otpsubmit' onSubmit={handleOtpSubmit}>
        <div className='my-5 d-flex align-items-center justify-content-center flex-column sign-up-form'>
          <h3 className='fw-bold mb-3'>{t('Enter Otp')}</h3>
          <input
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder={t('Otp')}
            className='sign-up-input w-100'
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
                  <ShowSpinner />
                  <input type='submit' disabled value={t('Please wait..')} />
                </div>
              </div>
            ) : (
              <input
                className='my-2 next-btn'
                type='submit'
                value={t('Submit')}
              />
            )}
          </div>
        </div>
      </form>
    </Col>
  );
};

export default OtpSubmit;
