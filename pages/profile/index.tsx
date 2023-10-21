import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileSidebarLayout from '../../components/Layout/ProfileSidebarLayout';
import Meta from '../../components/Meta/Meta';
import { Ilocale } from '../../PageTypes/commonType/commonType';
// import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation(['profile']);

  return (
    <ProfileSidebarLayout>
      <Meta title='Profile | Nowabenki Gonomukhi Foundation (NGF)' />
      <div className='dashboard-section'>
        <h3 className='text-center mt-3 font-exo fw-bold'>
          {t('welcomeDashboard')}
        </h3>

        <div className='text-center mt-4'>
          <Image
            src='/assets/profile-dashboard.jpg'
            width={300}
            height={300}
            alt=''
          />
        </div>
      </div>
    </ProfileSidebarLayout>
  );
};

export default ProfilePage;
// active - sideber classname
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
