import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';
import { Ilocale } from '../../PageTypes/commonType/commonType';

const Journal = () => {
  const { t } = useTranslation(['footer']);

  return (
    <>
      <Meta title='Journal | Nowabenki Gonomukhi Foundation (NGF)' />

      <div className='container'></div>
    </>
  );
};

export default Journal;

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
