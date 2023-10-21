import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';
import { Ilocale } from '../../PageTypes/commonType/commonType';

const FAQ = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <div className='faq-section py-5'>
        <Container>
          <Meta title='FAQ | Ontheway' />

          <div className='row'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-12 mb-2'>
                  <Accordion>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>
                        {t('doWeHaveAndroidApp')} ?
                      </Accordion.Header>
                      <Accordion.Body>
                        {t('yesWeHave')}
                        <a
                          className='ps-1  text-decoration-none'
                          href='https://play.google.com/store/apps/details?id=com.m360ict.ontheway_queen'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {t('clickhere')}
                        </a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='col-12 mb-2'>
                  <Accordion>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>
                        {t('needAccountBeforeOrder')}
                      </Accordion.Header>
                      <Accordion.Body>
                        {t('needAccountBeforeOrderAnwser')}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='col-12'>
                  <Accordion>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>{t('howISignUp')}</Accordion.Header>
                      <Accordion.Body>{t('howISignUpAnwser')}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className='col-lg-6 mb-2'>
              {/* <div className='row'>
                <div className='col-12 mb-2'>
                  <Accordion>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>{t('cancelMyOrder')}</Accordion.Header>
                      <Accordion.Body>
                        {t('cancelMyOrderAnwser')}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='col-12 mb-2'>
                  <Accordion>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>{t('orderByPhone')}</Accordion.Header>
                      <Accordion.Body>{t('orderByPhoneAnwser')}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FAQ;

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
