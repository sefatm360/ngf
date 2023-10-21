import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import sponsorhip1Img from '../../public/assets/sponsorship/sponsorship.png';

const Sponsorship = () => {
  const { t } = useTranslation(['footer']);

  return (
    <>
      <Meta title='Sponsorship | Nowabenki Gonomukhi Foundation (NGF)' />

      {/* <div className='container'>
        <div className='sponsorship-section my-5'>
          
          <Row xs={1} md={2} lg={2}>
            <Col>
              <div className='sponsor-img-box'>
                <Image src={sponsorhip1Img} layout='fill' alt='' />
              </div>
            </Col>
          </Row>
        </div>
      </div> */}
    </>
  );
};

export default Sponsorship;
export async function getServerSideProps({ locale }: Ilocale) {
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
