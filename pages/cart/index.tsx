import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EachQueen from '../../components/EachQueen/EachQueen';
import { SET_CART_SUCCESS } from '../../components/Helpers/Constant';
import Meta from '../../components/Meta/Meta';
import { useCartContext } from '../../contexts/CartContextFile/CartContext';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import { IsingleProduct } from '../../PageTypes/product/productTypes';
import { BsArrowRight } from 'react-icons/bs';

const Cart = () => {
  const { dispatch: cartDispatch, cart } = useCartContext();
  const [t] = useTranslation(['cart']);

  const productItems: IsingleProduct[] = cart.reduce((acc: any, curr: any) => {
    let pushed = false;
    if (acc.length < 1) {
      acc.push([curr]);
    } else {
      const qId = curr.queen_id;
      acc.forEach((items: any) => {
        for (const item of items) {
          if (item.queen_id === qId) {
            items.push(curr);
            pushed = true;
            break;
          }
        }
      });
      if (!pushed) {
        acc.push([curr]);
      }
    }
    return acc;
  }, []);

  const deleteItem = (id: number) => {
    const restItem = cart.filter((item) => item.product_id !== id);

    cartDispatch?.({ type: SET_CART_SUCCESS, payload: restItem });
    localStorage.setItem('cart', JSON.stringify(restItem));
  };

  return (
    <>
      <Meta title='Cart | Nowabenki Gonomukhi Foundation (NGF)' />
      <div className='cart-section py-5'>
        <Container>
          <div>
            <div className='text-center'>
              <h3 className='section-title'>{t('shoppingCart')}</h3>
              <p className='font-exo text-secondary mb-3'>{t('takeALook')}</p>
            </div>

            <div className='mt-5'>
              {cart?.length > 0 ? (
                <>
                  <div>
                    {productItems.map((queen, index) => (
                      <EachQueen
                        queen={queen}
                        key={index}
                        deleteItem={deleteItem}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className='text-center my-4'>
                  <h3 className='mb-3'>{t('noProduct')}</h3>
                  <Link
                    className='next-btn text-decoration-none'
                    href='/products/recent-product'
                  >
                    {t('shoppingNow')}
                  </Link>
                </div>
              )}
            </div>
            <div className='d-flex'>
              {cart?.length > 0 && (
                <Link href='/products/recent-product'>
                  <a className='next-btn d-flex align-items-center font-jost text-dark m-3'>
                    {t('continuneShopping')}

                    <span className='ms-2'>
                      <BsArrowRight />
                    </span>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
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
