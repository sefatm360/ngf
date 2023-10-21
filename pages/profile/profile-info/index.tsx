import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ProfileSidebarLayout from '../../../components/Layout/ProfileSidebarLayout';
import Meta from '../../../components/Meta/Meta';
import EditProfileInfo from '../../../components/profile/EditProfileInfo';
import { useAuthContext } from '../../../contexts/AuthContextFile/AuthContext';
import { Ilocale } from '../../../PageTypes/commonType/commonType';

const ProfileInfo = () => {
  const { user } = useAuthContext();
  const { email, name, phone, city, address, post_code, divison } = user;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation(['profile']);

  return (
    <ProfileSidebarLayout>
      <Meta title='Profile info | ontheway' />
      <div className='profile-info-section'>
        <div className='container'>
          <div className='row profileInfoDiv py-5 px-2 px-md-5 px-lg-5'>
            <div className='col-lg-4 mb-3'>
              <h6 className='mb-3 profile-info-title'>{t('fullName')}</h6>
              <small className='pt-2  user-details'>{name}</small>
            </div>

            <div className='col-lg-4 mb-3'>
              <h6 className='mb-3 profile-info-title'>{t('email')}</h6>
              <small className='pt-2 user-details'>{email}</small>
            </div>

            <div className='col-lg-4  mb-3'>
              <h6 className='mb-3 profile-info-title'>{t('Phone')}</h6>
              <small className='pt-2  user-details'>{phone}</small>
            </div>
            <div className='col-lg-4 '>
              <h6 className='mb-3 profile-info-title'>{t('city')}</h6>
              <small className='pt-2  user-details'>{city}</small>
            </div>
            <div className='col-lg-4 '>
              <h6 className='mb-3 profile-info-title'>{t('address')}</h6>
              <small className='pt-2  user-details'>{address}</small>
            </div>
            <div className='col-lg-4 '>
              <h6 className='mb-3 profile-info-title'>{t('postCode')}</h6>
              <small className='pt-2  user-details'>{post_code}</small>
            </div>
            <div className='mt-5 '>
              <button
                className='text-white cmn-btn border-0'
                onClick={handleShow}>
                {t('editProfile')}
              </button>
            </div>
          </div>
        </div>

        <EditProfileInfo show={show} handleClose={handleClose} />
      </div>
    </ProfileSidebarLayout>
  );
};

export default ProfileInfo;
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
