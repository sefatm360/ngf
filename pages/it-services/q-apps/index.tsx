import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ilocale } from '../../../PageTypes/commonType/commonType';

const index = () => {
  return (
    <>
      <div className='single-it-service py-5'>
        <div className='text-center'>
          <Image
            width={300}
            height={200}
            objectFit='contain'
            src='/assets/it-services/q-apps.png'
            alt=''
          />
        </div>
        <div className='text-center mt-5'>
          <h4 className='fw-bold mb-3 single-itservice-title'>
            To Create Any Apps for your business Contact Ontheway Q-Apps Service
          </h4>
          <p className='text-exo mb-1'>Email: onthewayqueen@gmail.com </p>
          <p>Call: +8801894829225</p>
        </div>
      </div>
    </>
  );
};

export default index;

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
