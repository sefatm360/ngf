import Image from 'next/image';
import React from 'react';
import { Col } from 'react-bootstrap';
import ShowSpinner from '../ShowSpinner/ShowSpinner';
import Timer from '../Timer/Timer';

const SignUpOtp = ({
  handleOtpSubmit,
  setOtp,
  passError,
  isLoading,
  sendOtp,
}: any) => {
  return (
    <Col md={4} className='mx-auto '>
      <div className='my-5 d-flex align-items-center justify-content-center flex-column sign-up-form'>
        <div>
          <Image
            loading='lazy'
            width={100}
            height={100}
            src='/assets/sign-up-icons/another-logo.png'
            alt=''
          />
        </div>
        <h3 className='fw-bold my-3'>Enter otp</h3>
        <form onSubmit={handleOtpSubmit}>
          <input
            className='my-2  w-100 sign-up-input'
            placeholder='otp'
            type='text'
            required
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className='text-center'>
            <small className='text-danger'>{passError}</small>
          </div>
          <div className='text-center'>
            <Timer sendOtp={sendOtp} />
          </div>
          <div className='text-center'>
            {isLoading ? (
              <div className='loading-btn my-2'>
                <div className=' d-flex align-items-center justify-content-center '>
                  <ShowSpinner />
                  <input type='submit' disabled value='Please wait..' />
                </div>
              </div>
            ) : (
              <input className='my-2 next-btn' type='submit' value='Submit' />
            )}
          </div>
        </form>
      </div>
    </Col>
  );
};

export default SignUpOtp;
