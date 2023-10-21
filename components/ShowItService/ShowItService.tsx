import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';

const ShowItService = ({ service }: any) => {
  const { name, img, url, link } = service;
  const { t } = useTranslation(['common']);
  return (
    <Col>
      {link ? (
        <Link href={link}>
          <a>
            <div className='d-flex flex-column align-items-center justify-content-between p-5 my-2 it-service-box'>
              <div className='p-2'>
                <Image
                  loading='lazy'
                  width={150}
                  height={150}
                  src={`/${img}`}
                  objectFit='contain'
                  alt=''
                />
              </div>
              <div className='p-2'>
                <h4 className='fw-bold font-jost'>{name}</h4>
              </div>
              <div className='p-2 text-dark'>
                {t('learnMore')}
                <span className='ms-2'>
                  <BsArrowRight />
                </span>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <Link href={`/it-services${url}`}>
          <a>
            <div className='d-flex flex-column align-items-center justify-content-between p-5 my-2 it-service-box'>
              <div className='p-2'>
                <Image
                  loading='lazy'
                  width={150}
                  height={150}
                  src={`/${img}`}
                  objectFit='contain'
                  alt=''
                />
              </div>
              <div className='p-2'>
                <h4 className='fw-bold font-jost'>{name}</h4>
              </div>
              <div className='p-2 text-dark'>
                {t('learnMore')}
                <span className='ms-2'>
                  <BsArrowRight />
                </span>
              </div>
            </div>
          </a>
        </Link>
      )}
    </Col>
  );
};

export default ShowItService;
