import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation(['footer']);
  return (
    <div className='funded-partner'>
      <h4 className='text-center  text-uppercase'>
        {t('collaborativePartners')}
      </h4>
      <div className=''>
        <Row
          md={3}
          xs={3}
          gap={3}
          className='d-flex justify-content-center text-center mt-3 align-self-center row'
        >
          <Col>
            <a
              href='https://www.ibcs-primax.com/'
              rel='noreferrer'
              target='_blank'
            >
              <Image
                loading='lazy'
                className='img-fluid'
                src='/assets/partners/ibcs.png'
                alt=''
                width={154}
                height={80}
              />
            </a>
          </Col>
          <Col>
            <a href='https://m360ict.com/' rel='noreferrer' target='_blank'>
              <Image
                loading='lazy'
                className='img-fluid'
                src='/assets/partners/m360ict.png'
                alt=''
                width={145}
                height={80}
              />
            </a>
          </Col>
          <Col>
            <a
              href='https://www.avistechbd.com/'
              rel='noreferrer'
              target='_blank'
            >
              <Image
                loading='lazy'
                className='img-fluid'
                src='/assets/partners/avis.png'
                alt=''
                width={150}
                height={80}
              />
            </a>
          </Col>
          <Col>
            <a href='https://d360.digital/' rel='noreferrer' target='_blank'>
              <Image
                loading='lazy'
                className='img-fluid'
                src='/assets/partners/dighi.png'
                alt=''
                width={150}
                height={70}
              />
            </a>
          </Col>
          <Col>
            <a
              href='https://www.bantelbd.com/'
              rel='noreferrer'
              target='_blank'
            >
              <Image
                loading='lazy'
                className='img-fluid'
                src='/assets/partners/bancel.png'
                alt=''
                width={150}
                height={70}
              />
            </a>
          </Col>
          <Col>
            <a href='https://mnhtel.com/' rel='noreferrer' target='_blank'>
              <Image
                loading='lazy'
                className='img-fluid'
                src='/assets/partners/mandh.png'
                alt=''
                width={150}
                height={70}
              />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Partners;
