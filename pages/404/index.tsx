import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ilocale } from '../../PageTypes/commonType/commonType';

const NotFound = () => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <div className='not-found-section'>
        <div className='container'>
          <div className='text-center py-5'>
            <Image
              src='/assets/404/404-1.jpg'
              height={300}
              width={300}
              alt=''
            />

            <h1 className='fw-bold mt-5 text-dark'>
              <span className='text-main me-3'>404 !!!</span>

              {t('notFound')}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

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
