import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ShowSpinner from '../ShowSpinner/ShowSpinner';
import Timer from '../Timer/Timer';

import { useRouter } from 'next/router';
import { SET_CART_SUCCESS, url } from '../Helpers/Constant';
import { useCartContext } from '../../contexts/CartContextFile/CartContext';

const ConfirmOtp = ({ setError, error, handleSendOtp }: any) => {
  const ISSERVER = typeof window === 'undefined';
  let guestOrder: any;
  if (!ISSERVER) {
    guestOrder = JSON.parse(sessionStorage.getItem('order') as string);
  }
  const router = useRouter();
  const { dispatch: cartDispatch } = useCartContext();
  const [otp, setOtp] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation(['login_reg']);

  const handleConfirmOtp = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    guestOrder.otp_creds = {
      phone: guestOrder.guest_info.phone,
      otp: otp,
      type: 'order',
    };
    fetch(`${url}/api/orders/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(guestOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          cartDispatch?.({ type: SET_CART_SUCCESS, payload: [] });
          localStorage.removeItem('cart');
          localStorage.removeItem('order');
          setIsLoading(false);
          router.replace(`/order-confirmed/${data.order_id}`);
        } else {
          setIsLoading(false);
          setError(data.message);
        }
      });
  };
  return (
    <>
      <div className='text-center py-3 py-md-5'>
        <h3 className='mb-3 fw-bold'>{t('Enter Otp')}</h3>
        <form action='' onSubmit={handleConfirmOtp}>
          <input
            onChange={(e) => setOtp(e.target.value)}
            type='text'
            placeholder='O T P'
            required
            className='sign-up-input form-control w-50 mx-auto'
          />
          <br />
          <div className='my-2 text-cenrer text-danger'>
            <small>{error}</small>
          </div>
          <div className='text-center'>
            <Timer sendOtp={handleSendOtp} />
          </div>
          {isLoading ? (
            <div className='loading-btn my-2'>
              <div className=' d-flex align-items-center justify-content-center '>
                <div style={{ position: 'absolute' }}>
                  <ShowSpinner />
                </div>
                <input
                  style={{ background: '#ff85ac' }}
                  type='submit'
                  className='cmn-btn border-0'
                  disabled
                  value={t('Please wait..')}
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
        </form>
      </div>
    </>
  );
};

export default ConfirmOtp;
