import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <div className='dynamic-training py-5'>
        <Container>
          <div className='row justify-content-between'>
            <div className='col-md-6 text-center order-2 order-lg-0 order-md-0'>
              <h2 className='disable-reg-title section-title align-justify lh-5 mt-5 mb-4'>
                {t('disableRegistration')}
              </h2>

              <Link href='https://play.google.com/store/apps/details?id=com.m360ict.ontheway_queen'>
                <a className='cmn-dark-btn white-hover  border-0 '>
                  {t('downloadApp')}
                </a>
              </Link>
            </div>
            <div className='col-md-6  '>
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  position: 'relative',
                }}>
                <Image
                  src='/assets/app.PNG'
                  objectFit='contain'
                  layout='fill'
                  alt=''
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Index;
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
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
};
