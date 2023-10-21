import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';

const GovtFunds = () => {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <Meta title='govt funds' />
      <Container>
        <div className='text-center my-3'>
          <h4>{t('fundByGoverment')}</h4>
        </div>
        <Row>
          <Col className='text-center' md={6}>
            <div>
              <Image
                width={100}
                height={100}
                src='/assets/funded-logos/ict-m.png'
                alt=''
              />
              <Image
                width={150}
                height={100}
                src='/assets/funded-logos/idea-logo.png'
                alt=''
                objectFit='contain'
              />
            </div>
            <div className='px-3 my-5'>
              <p className='fs-4 fw-bold'>{t('ictIdea')}</p>
            </div>
          </Col>
          <Col className='text-center' md={6}>
            <div>
              <Image
                width={100}
                height={100}
                src='/assets/funded-logos/bangladesh-bank.png'
                alt=''
              />
              <Image
                width={100}
                height={100}
                src='/assets/funded-logos/eastern-bank.png'
                alt=''
              />
            </div>
            <div className='px-3 my-5'>
              <p className='fs-4 fw-bold'>{t('easternBank')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GovtFunds;
