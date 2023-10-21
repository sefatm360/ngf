import { t } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../Helpers/Constant';
import { BsArrowRight } from 'react-icons/bs';

const ShowQueen = ({ queen }: any) => {
  const { name, photo, id, total_product } = queen;

  const { t } = useTranslation('home');
  return (
    <Col className='my-3'>
      <Card className='queen-card d-flex flex-column justify-content-between'>
        <div className='w-100 h-100'>
          <div className='card-inner '>
            <div className='queen-card-details  '>
              <div className='queen-details-wrapper'>
                <div className='queen-image-wrapper'>
                  <Image
                    className='queen-image'
                    width='80px'
                    height='80px'
                    src={`${url}/get/image/queens/${photo}`}
                    alt=''
                  />
                </div>
                <div className='queen-info py-4'>
                  <h6 className='text-white'>
                    {t('queen')} {name.split(' ')[0]} {t('store')}
                  </h6>
                  <p className='total-products font-exo  py-1'>
                    {total_product} Products
                  </p>
                </div>

                <div>
                  <Link href={`/me/${id}`}>
                    <a className='cmn-btn text-decoration-none'>
                      {t('qStore')} <BsArrowRight />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ShowQueen;
