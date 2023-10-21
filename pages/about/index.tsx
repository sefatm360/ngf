import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import { useRouter } from 'next/router';
import about from '../../public/locales/en/about.json';
import aboutBn from '../../public/locales/bn/about.json';
import Meta from '../../components/Meta/Meta';
const AboutUs = () => {
  const { t } = useTranslation(['about']);
  const router = useRouter();

  return (
    <>
      <Meta title='About | Nowabenki Gonomukhi Foundation (NGF)' />
      <Container className='py-5 mt-4'>
        <div>
          <Row className='flex justify-content-center align-items-center'>
            <Col md={6} className='order-2 order-md-0'>
              <div className='about-section'>
                {/* <h2 className='section-title d-flex'>{t('about')}</h2> */}
                <h2
                  className='section-title  d-flex'
                  dangerouslySetInnerHTML={
                    router.locale === 'en'
                      ? { __html: t(about.about) }
                      : { __html: t(aboutBn.about) }
                  }
                ></h2>
                {/* <p>{t('detailsText')}</p> */}
                <p
                  style={{ textAlign: 'justify' }}
                  className='about-description lh-2'
                  dangerouslySetInnerHTML={
                    router.locale === 'en'
                      ? { __html: t(about.detailsText) }
                      : { __html: t(aboutBn.detailsText) }
                  }
                ></p>
              </div>
            </Col>
            <Col md={6} className='mt-4 mt-md-0 order-1 order-md-0'>
              <div>
                <Image
                  className='img-fluid'
                  width={500}
                  height={400}
                  src='/assets/mission.svg'
                  alt=''
                />
              </div>
            </Col>
          </Row>
        </div>
        {/* <div>
          <Row className='my-5'>
            <Col md={6} className='mt-4 mt-md-0 '>
              <div>
                <Image
                  className='img-fluid'
                  width={500}
                  height={400}
                  src='/assets/aboutUsImage.svg'
                  alt=''
                />
              </div>
            </Col>
            <Col md={6} className='mt-4 mt-md-0'>
              <div className='about-section'>
                <h2 className='section-title d-flex'>{t('ourMission')}</h2>

                <p
                  style={{ textAlign: 'justify' }}
                  className='about-description lh-2'
                  dangerouslySetInnerHTML={
                    router.locale === 'en'
                      ? { __html: t(about.missiontText) }
                      : { __html: t(aboutBn.missiontText) }
                  }
                ></p>
              </div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </>
  );
};

export default AboutUs;

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
