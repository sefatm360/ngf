import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  BsFillQuestionOctagonFill,
  BsFillQuestionSquareFill,
} from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import {
  MdOutlineDashboard,
  MdOutlineFavoriteBorder,
  MdReviews,
} from 'react-icons/md';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { url } from '../Helpers/Constant';

const ProfileSidebar = () => {
  const { user } = useAuthContext();
  const { pathname } = useRouter();
  const { name, photo } = user;

  const { t } = useTranslation(['profile']);
  return (
    <div>
      <Row>
        <Col>
          <div className='myProfile py-4'>
            <div className=' d-flex flex-column align-items-center'>
              <div>
                {photo ? (
                  <Image
                    loading='lazy'
                    width={90}
                    height={90}
                    className='rounded-circle'
                    src={`${url}/get/image/customers/${photo}`}
                    alt=''
                  />
                ) : (
                  <FaUserCircle />
                )}
              </div>

              <div className='mt-3'>
                <p className='font-jost'>{name}</p>
              </div>
            </div>
          </div>

          <div className='profileSidebar mt-3'>
            <ul>
              <li>
                <Link href='/profile'>
                  <a
                    className={`profile-sidebar-link ${
                      pathname === '/profile' ? 'active' : ''
                    }`}
                  >
                    <span>
                      <MdOutlineDashboard />
                    </span>
                    <span className='link-title'>{t('dashboard')}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/profile/profile-info'>
                  <a
                    className={`profile-sidebar-link ${
                      pathname === '/profile/profile-info' ? 'active' : ''
                    }`}
                  >
                    <span>
                      <CgProfile />
                    </span>
                    <span className='link-title'>
                      {t('profileInformation')}
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/profile/my-order'>
                  <a
                    className={`profile-sidebar-link ${
                      pathname === '/profile/my-order' ? 'active' : ''
                    }`}
                  >
                    <span>
                      <MdOutlineFavoriteBorder />
                    </span>
                    <span className='link-title'>{t('myOrder')}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/profile/product-review'>
                  <a
                    className={`profile-sidebar-link ${
                      pathname === '/profile/product-review' ? 'active' : ''
                    }`}
                  >
                    <span>
                      <MdReviews />
                    </span>
                    <span className='link-title'>{t('productReview')}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/profile/question-answer'>
                  <a
                    className={`profile-sidebar-link ${
                      pathname === '/profile/question-answer' ? 'active' : ''
                    }`}
                  >
                    <span>
                      <BsFillQuestionSquareFill />
                    </span>
                    <span className='link-title'>{t('productQuestion')}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSidebar;
