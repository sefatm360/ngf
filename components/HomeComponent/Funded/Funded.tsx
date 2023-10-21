import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Partners from '../Partners/Partners';

const Funded = () => {
  const { t } = useTranslation(['footer']);
  return (
    <div className='footer-middel'>
      <Row
        className='
      '
      >
        <Col md={6}>
          <div className='funded-partner'>
            <h4 className='text-center text-uppercase'>{t('fundBy')}</h4>
            <Row className='d-flex justify-content-center text-center mt-3 align-self-center'>
              <Col className='p-2'>
                <Link href='/govt-funds'>
                  <a>
                    <Image
                      className='img-fluid'
                      width={154}
                      height={150}
                      src='/assets/funded-logos/ict-m.png'
                      alt=''
                    />
                  </a>
                </Link>
              </Col>
              <Col className='p-2'>
                <Link href='/govt-funds'>
                  <a>
                    <Image
                      className='img-fluid'
                      width={154}
                      height={150}
                      src='/assets/funded-logos/bangladesh-bank.png'
                      alt=''
                    />
                  </a>
                </Link>
              </Col>
              <Col className='p-2'>
                <Link href='/govt-funds'>
                  <a>
                    <Image
                      className='img-fluid'
                      width={154}
                      height={150}
                      src='/assets/funded-logos/aibt.png'
                      alt=''
                    />
                  </a>
                </Link>
              </Col>
              <Col className='p-2'>
                <Link href='/govt-funds'>
                  <a>
                    <Image
                      className='img-fluid'
                      width={154}
                      height={150}
                      src='/assets/funded-logos/aisa.png'
                      alt=''
                    />
                  </a>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <Partners />

          {/* </Container> */}
        </Col>
      </Row>
    </div>
  );
};
export default Funded;
