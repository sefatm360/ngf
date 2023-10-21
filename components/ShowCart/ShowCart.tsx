import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../Helpers/Constant';
import { IshowCartProps } from './Types/ShowCartTypes';

const ShowCart = ({ product, deleteItem, setQueenId }: IshowCartProps) => {
  const { t } = useTranslation(['cart']);

  const {
    product_picture_1,
    price,
    queen_name,
    queen_id,
    product_name,
    quantity,
    product_id,
  } = product;

  useEffect(() => {
    setQueenId(queen_id);
  }, [queen_id, setQueenId]);

  return (
    <div className='cart-card'>
      <Row className='align-items-center'>
        <Col md={1} sm={12} className='text-end pb-2 mb-md-0 text-md-center'>
          <Image
            loading='lazy'
            src='/assets/cross-logo.png'
            width={20}
            height={20}
            alt=''
            className='pointer'
            onClick={() => deleteItem(product_id)}
          />
        </Col>
        <Col md={8}>
          <div className='d-flex flex-column flex-md-row gap-2 text-break'>
            <div>
              <Image
                loading='lazy'
                src={`${url}/get/image/products/${product_picture_1}`}
                alt=''
                width={50}
                height={60}
                className='cart-product-img mt-1'
              />
            </div>
            <div className='d-flex flex-column'>
              <p style={{ fontSize: '0.95rem' }} className=''>
                {product_name}
              </p>
              <div className=' my-1'>
                <strong className=''>{t('Queen')} :</strong>
                <Link href={`/me/${queen_id}`}>
                  <a className=' ps-1 text-main'>{queen_name.split(' ')[0]}</a>
                </Link>
              </div>
              <div className=''>
                <strong>{t('Quantity')} :</strong> {quantity}
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className='pt-2  pt-md-0'>
          <div className='unit'>
            <div className='text-dark '>
              <strong>{t('Unit')} :</strong> &#2547; {price}
            </div>
            <div className='text-dark mt-2'>
              <strong>{t('Total')} :</strong>
              &#2547; {price * quantity}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShowCart;
