import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useCartContext } from '../../contexts/CartContextFile/CartContext';
import ShowCart from '../ShowCart/ShowCart';

const EachQueen = ({ queen, deleteItem }: any) => {
  const [queenId, setQueenId] = useState<number | null>(null);
  const { t } = useTranslation(['cart']);

  // const { quantity } = useCartContext();
  const { totalAmount, totalPrice } = queen?.reduce(
    (acc: any, curr: any) => {
      acc.totalAmount = acc.totalAmount + curr.quantity;
      acc.totalPrice = acc.totalPrice + curr.quantity * curr.price;
      return acc;
    },
    { totalAmount: 0, totalPrice: 0 }
  );

  return (
    <>
      <div className='each-cart'>
        <Row>
          <Col md={9}>
            {queen.map((product: any) => (
              <ShowCart
                product={product}
                key={product.product_id}
                deleteItem={deleteItem}
                setQueenId={setQueenId}
              />
            ))}
          </Col>
          <Col md={3}>
            <div className=' my-2 mt-md-0  checkout-card '>
              <div className='d-flex justify-content-between  '>
                <div className='pe-5'>
                  <small>{t('Total Items')}:</small>
                </div>
                <div>
                  <small>{totalAmount}</small>
                </div>
              </div>
              <hr />
              <div className='d-flex justify-content-between mb-4 text-dark fw-bold'>
                <p>{t('Total')}:</p>
                <p> &#2547;{totalPrice}</p>
              </div>
              <div className='text-center'>
                <Link href={`/confirm-order?queen=${queenId}`}>
                  <a className='checkout-btn  px-2 py-2 d-block'>
                    {t('Proceed to checkout')}
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EachQueen;
