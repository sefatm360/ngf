import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect } from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';
import { Ilocale } from '../../PageTypes/commonType/commonType';
const Returns = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Meta title='FAQ | Returns' />
      <div className='returns-section py-5'>
        <Container>
          <div>
            <h2 className='section-title'>{t('returnsPolicy')}</h2>
          </div>
          <div>
            <Row>
              <Col className=' mb-5 '>
                <Accordion>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header> {t('returnsPolicy')}</Accordion.Header>
                    <Accordion.Body className='return-text'>
                      {t('returnsPolicyText')}
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* <Accordion.Item eventKey='1' className='mt-3'>
                    <Accordion.Header>{t('faultyitem')}</Accordion.Header>
                    <Accordion.Body className='return-text'>
                      {t('faultyitemText')}
                    </Accordion.Body>
                  </Accordion.Item> */}
                </Accordion>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Returns;
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
