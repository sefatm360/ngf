import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import {
  SET_CART_SUCCESS,
  SET_GUEST_BY_PHONE,
  url,
} from '../../components/Helpers/Constant';
import { useCartContext } from '../../contexts/CartContextFile/CartContext';
import Meta from '../../components/Meta/Meta';
import Link from 'next/link';
import reducer from '../../components/Reducers/GuestOrderReducer';
import ConfirmOtp from '../../components/orderConfirm/ConfirmOtp';
import ConfirmDetails from '../../components/orderConfirm/ConfirmDetails';
import lib from '../../components/Helpers/utils';
import { IconfirmProduct } from '../../PageTypes/orderConfirm/orderConfirm';
import handleOtp from '../../components/Hooks/handleOtp';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BsArrowRight } from 'react-icons/bs';

const ConfirmOrderLayout = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const { queen: cartQueenId } = router.query;
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [otpState, setOtpState] = useState<boolean>(false);

  const { dispatch: cartDispatch, cart } = useCartContext();
  const { t } = useTranslation(['cart']);

  const checkUserByPhone = (num: number) => {
    if (num) {
      axios.get(`${url}/api/customer/get/by-phone/${num}`).then((data) => {
        if (data.data.data) {
          dispatch({ type: SET_GUEST_BY_PHONE, payload: data.data.data });
        }
      });
    }
  };

  const initialState: any = {
    name: user?.name,
    phone: user?.phone,
    email: user?.email,
    address: user?.address,
    post_code: user?.post_code,
    city: user?.city,
    id: user?.id,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const orderCart = cart.filter((c) => c.queen_id === Number(cartQueenId));

  const { totalPrice } = orderCart?.reduce(
    (acc, curr) => {
      acc.totalPrice = acc.totalPrice + curr.quantity * curr.price;
      return acc;
    },
    { totalPrice: 0 }
  );
  const guestOrder: any = {};
  const orderPhone = state?.phone || user?.phone;

  const handleOrder = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const nowDate = new Date();
    const order_details = orderCart.reduce((acc: any, curr: any) => {
      const deliveryDate = nowDate.setDate(
        nowDate.getDate() + parseInt(curr.delivery_day)
      );
      const product: IconfirmProduct = {
        product_name: curr.product_name,
        product_category: curr.category,
        product_id: curr.product_id,
        price: curr.price,
        quantity: curr.quantity,
        queen_id: curr.queen_id,
        delivery_date: lib.parseDate(new Date(deliveryDate).toDateString()),
      };
      acc.push(product);
      return acc;
    }, []);

    guestOrder.guest_info = state;
    guestOrder.delivery_address = `${state.address}, ${state.post_code}, ${state.city}`;
    guestOrder.guest = 1;
    guestOrder.order_details = order_details;
    if (user.phone) {
      guestOrder.guest = 0;
      guestOrder.customer_id = user.id;
    }

    if (
      orderPhone.toString().length === 11 ||
      orderPhone.toString().length === 10
    ) {
      if (user.phone) {
        setError('');
        handlePlaceOrder();
      } else {
        setError('');
        handleSendOtp();
        sessionStorage.setItem('order', JSON.stringify(guestOrder));
      }
    } else {
      setLoading(false);
      setError('Enter a valid phone');
    }
  };

  const handleSendOtp = () => {
    handleOtp({
      phone: orderPhone,
      handleOtpRoute: router.replace,
      setError,
      type: 'order',
      route: '/confirm-order/',
      setIsLoading: setLoading,
    });

    setOtpState(true);
  };

  const handlePlaceOrder = () => {
    setError('');

    axios.post(`${url}/api/orders/create`, guestOrder).then((res) => {
      if (res.data.success) {
        const restProducts = cart.filter(
          (c) => c.queen_id !== Number(cartQueenId)
        );
        cartDispatch?.({ type: SET_CART_SUCCESS, payload: restProducts });
        localStorage.setItem('cart', JSON.stringify(restProducts));

        setLoading(false);
        router.push(`/order-confirmed/${res.data.order_id}`);
      }
    });
  };

  return (
    <>
      <Meta title='Order Confirm | Nowabenki Gonomukhi Foundation (NGF)' />
      <Container>
        <div className='py-5'>
          <div className='d-flex flex-column flex-md-row text-center justify-content-between py-md-3 py-3'>
            <div>
              <h2 className='section-title'>{t('Order Confirmation')}</h2>
            </div>
            <div className='text-center mt-2'>
              <Link href='/cart'>
                <a className='text-dark'>
                  {t('Back to Cart')}
                  <span className='ms-2'>
                    <BsArrowRight />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className='confirmation-content p-4'>
            <Row>
              <Col md={5}>
                <div className='my-3 text-break'>
                  <h4 className='font-jost'>{t('Customer Information')}</h4>
                  <div className='mt-4'>
                    <div className='mb-1'>
                      <span className='fw-bold me-2'>{t('Name')}:</span>
                      {user?.name || state?.name}
                    </div>
                    <div className='mb-1'>
                      <span className='fw-bold me-2'>{t('Phone')}:</span>
                      {orderPhone}
                    </div>
                    <div className='mb-1'>
                      <span className='fw-bold me-2'>{t('Email')}:</span>
                      {user?.email || state?.email}
                    </div>
                    <div className='mb-1'>
                      <span className='fw-bold me-2'>{t('Address')}:</span>
                      {user?.address || state?.address}
                      {user?.city || state?.city}
                      {user?.post_code || state?.post_code}
                    </div>
                  </div>
                </div>
                <div>
                  <p className='fw-bold'>***ডেলিভারি চার্জ প্রযোজ্য ।</p>
                  <hr className='my-1' />
                  <p className='fw-bold mt-3'>
                    ডেলিভারি চার্জ ৮০ টাকা (ঢাকার বাইরে ১২০ টাকা)
                  </p>
                </div>
              </Col>
              <Col md={7}>
                <div className='bg-white rounded-3 p-2 '>
                  {otpState ? (
                    <ConfirmOtp
                      handleSendOtp={handleSendOtp}
                      setError={setError}
                      error={error}
                    />
                  ) : (
                    <ConfirmDetails
                      dispatch={dispatch}
                      state={state}
                      checkUserByPhone={checkUserByPhone}
                      error={error}
                      totalPrice={totalPrice}
                      loading={loading}
                      handleOrder={handleOrder}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ConfirmOrderLayout;

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
