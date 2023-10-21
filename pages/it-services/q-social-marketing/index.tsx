import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
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
            src='/assets/it-services/q-social.png'
            alt=''
          />
        </div>
        <div className='text-center mt-3'>
          <h4 className='fw-bold mb-3 single-itservice-title'>
            Need social marketing or facebook boosting for your business?
            Contact Ontheway Q-Social Marketing Service
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
