import React from 'react';
import { useTranslation } from 'react-i18next';
import ShowSpinner from '../ShowSpinner/ShowSpinner';
import { SET_GUEST_ORDER_DETAILS } from '../Helpers/Constant';

const ConfirmDetails = ({
  handleOrder,
  dispatch,
  state,
  checkUserByPhone,
  error,
  totalPrice,
  loading,
  user,
}: any) => {
  // const { user } = useAuthContext();
  const { t } = useTranslation(['cart', 'joinAndReg']);

  return (
    <form action='' onSubmit={handleOrder}>
      <div className='row mt-4 mt-md-0 mt-lg-0'>
        <div className='col-lg-6'>
          <div>
            <p className=' input-label'>{t('Your Phone')}</p>
            <input
              defaultValue={user?.phone || state?.phone}
              onChange={(e) => {
                dispatch({
                  type: SET_GUEST_ORDER_DETAILS,
                  payload: {
                    field: 'phone',
                    value: e.target.value,
                  },
                });
              }}
              onBlur={(e) => checkUserByPhone(e.target.value)}
              required
              type='text'
              placeholder={t('Enter Your Number')}
              className=' w-100 text-input'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className=''>
            <p className=' input-label'> {t('Full Name')}</p>
            <input
              defaultValue={user?.name || state?.name}
              required
              onChange={(e) =>
                dispatch({
                  type: SET_GUEST_ORDER_DETAILS,
                  payload: {
                    field: 'name',
                    value: e.target.value,
                  },
                })
              }
              type='text'
              placeholder={t('Enter Your Full Name')}
              className=' w-100 text-input'
            />
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='my-1 my-md-0'>
            <p className='input-label'>{t('Your Email')}</p>
            <input
              onChange={(e) =>
                dispatch({
                  type: SET_GUEST_ORDER_DETAILS,
                  payload: {
                    field: 'email',
                    value: e.target.value,
                  },
                })
              }
              defaultValue={user?.email || state?.email}
              type='email'
              placeholder={t('Enter Your Email')}
              className=' w-100 text-input'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='my-1 my-md-0'>
            <p className='input-label'>{t('Your Address')}</p>
            <input
              defaultValue={user?.address || state?.address}
              onChange={(e) =>
                dispatch({
                  type: SET_GUEST_ORDER_DETAILS,
                  payload: {
                    field: 'address',
                    value: e.target.value,
                  },
                })
              }
              required
              type='text'
              placeholder={t('Enter Your Address')}
              className=' w-100 text-input'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className=''>
            <p className='input-label'>{t('Your City')}</p>
            <input
              defaultValue={user?.city || state?.city}
              onChange={(e) =>
                dispatch({
                  type: SET_GUEST_ORDER_DETAILS,
                  payload: {
                    field: 'city',
                    value: e.target.value,
                  },
                })
              }
              required
              type='text'
              placeholder={t('Enter Your City')}
              className=' w-100 text-input'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='my-1 my-md-0'>
            <p className='input-label'>{t('Post Code')}</p>
            <input
              defaultValue={user?.post_code || state?.post_code}
              onChange={(e) =>
                dispatch({
                  type: SET_GUEST_ORDER_DETAILS,
                  payload: {
                    field: 'post_code',
                    value: e.target.value,
                  },
                })
              }
              required
              type='number'
              placeholder={t('Enter Your Post Code')}
              className=' w-100 text-input'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <h4 className='total-amount font-jost mt-lg-5 pt-2'>
            {t('Total Amount')} :
            <span className='ps-1'>
              &#2547;{totalPrice} + {t('Delivery charge')}
            </span>
          </h4>
        </div>
        <div className='col-lg-6'>
          <div className='mt-5'>
            {loading ? (
              <div className='loading-btn'>
                <div className=' d-flex align-items-center justify-content-center '>
                  <div style={{ position: 'absolute' }}>
                    <ShowSpinner />
                  </div>
                  <input
                    style={{ background: '#ff85ac' }}
                    type='submit'
                    disabled
                    className='cmn-btn border-0'
                    value={t('Please wait..')}
                  />
                </div>
              </div>
            ) : (
              <input
                className='order-btn'
                type='submit'
                value={t('Place Order')}
              />
            )}
          </div>
        </div>
      </div>

      <div className='text-danger text-center'>
        <small>{error}</small>
      </div>
    </form>
  );
};

export default ConfirmDetails;
