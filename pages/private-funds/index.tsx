import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';

const PrivateFunds = () => {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <Meta title='private funds' />
      <Container>
        <div className='text-center my-3'>
          <h4>{t('fundByBangladeshiCompany')}</h4>
        </div>
        <Row className='my-5 align-items-center' md={6} xs={3} gap={3}>
          <Col>
            <Link href='https://www.ibcs-primax.com/'>
              <Image
                loading='lazy'
                width={166}
                height={59}
                src='/assets/partners/ibcs.png'
                alt=''
              />
            </Link>
          </Col>
          <Col>
            <Link href='https://m360ict.com/'>
              <Image
                loading='lazy'
                width={166}
                height={59}
                src='/assets/partners/m360ict.png'
                alt=''
              />
            </Link>
          </Col>
          <Col>
            <a href='https://www.avistechbd.com/'>
              <Image
                loading='lazy'
                width={166}
                height={59}
                src='/assets/partners/avis.png'
                alt=''
              />
            </a>
          </Col>
          <Col>
            <Link href='https://d360.digital/'>
              <Image
                loading='lazy'
                width={166}
                height={59}
                src='/assets/partners/dighi.png'
                alt=''
              />
            </Link>
          </Col>
          <Col>
            <Link
              href='https://www.bantelbd.com/'
              rel='noreferrer'
              target='_blank'
            >
              <Image
                loading='lazy'
                width={166}
                height={59}
                src='/assets/partners/bancel.png'
                alt=''
              />
            </Link>
          </Col>
          <Col>
            <Link href='https://mnhtel.com/'>
              <Image
                loading='lazy'
                width={166}
                height={59}
                src='/assets/partners/mandh.png'
                alt=''
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='text-center my-3'>
          <h4>{t('FundByForeignCompany')}</h4>
        </div>
        <Row className='my-5 justify-content-between'>
          <Col className='text-center' xs={4}>
            <Link href='http://aibt.us/'>
              <Image
                width={356}
                height={51}
                loading='lazy'
                src='/assets/partners/aibt.png'
                alt=''
              />
            </Link>
          </Col>
          <Col className='text-center' xs={4}>
            <Link href='http://joarder.us/'>
              <Image
                width={356}
                height={89}
                loading='lazy'
                src='/assets/partners/joarder-partners.png'
                alt=''
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivateFunds;
