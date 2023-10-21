import React, { useState } from 'react';
import { AiFillHome, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { AUTH_USER_SUCCESS } from '../Helpers/Constant';
import { MdOutlineDashboard } from 'react-icons/md';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

const HeaderForPhone = () => {
  const { dispatch: AuthDispatch, user } = useAuthContext();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const { t } = useTranslation(['home']);
  const router = useRouter();

  const handleLogout = () => {
    destroyCookie(null, 'ca_otw');
    router.push('/login');
    AuthDispatch?.({
      type: AUTH_USER_SUCCESS,
      payload: { user: {}, token: '' },
    });
    setShowMenu(false);
    setShowUserMenu(false);
  };

  return (
    <>
      <div
        className={showMenu || showUserMenu ? 'o-back' : 'd-none'}
        onClick={() => {
          setShowMenu(false);
          setShowUserMenu(false);
        }}
      ></div>

      <div className='position-fixed w-100 d-sm-none header-phone-wrapper'>
        <ul
          className={`${
            showUserMenu ? 'menu-items show' : 'hide-menu-items'
          } ps-0 mb-0`}
          onClick={() => setShowMenu(false)}
        >
          {user.phone && (
            <li>
              <span
                onClick={() => {
                  setShowMenu(false);
                  setShowUserMenu(false);
                }}
              >
                <Link href='/profile'>
                  <a>
                    <AiOutlineUser className='fs-3 ' />
                    {t('account')}
                  </a>
                </Link>
              </span>
            </li>
          )}
          {!user.phone ? (
            <li>
              <span
                onClick={() => {
                  setShowMenu(false);
                  setShowUserMenu(false);
                }}
              >
                <Link href='/login'>
                  <a>
                    <IoMdLogIn className='fs-5' />
                    {t('Login')}
                  </a>
                </Link>
              </span>
            </li>
          ) : (
            <li>
              <span onClick={handleLogout}>
                <a>
                  <IoMdLogOut className='fs-5' /> {t('logOut')}
                </a>
              </span>
            </li>
          )}

          {!user.phone && (
            <li>
              <span
                onClick={() => {
                  setShowMenu(false);
                  setShowUserMenu(false);
                }}
              >
                {' '}
                <Link href='/signup'>
                  <a>
                    <IoMdLogIn className='fs-5' />
                    {t('Register')}
                  </a>
                </Link>
              </span>
            </li>
          )}
        </ul>
        <ul
          className={`${
            showMenu ? 'menu-items show ' : 'hide-menu-items'
          } ps-0 mb-0`}
          // onClick={() => setShowMenu(false)}
        >
          <li>
            <span
              onClick={() => {
                setShowMenu(false);
                setShowUserMenu(false);
              }}
            >
              {' '}
              <Link href='/me'>{t('allqueens')}</Link>
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setShowMenu(false);
                setShowUserMenu(false);
              }}
            >
              {' '}
              <a
                rel='noreferrer'
                href='https://queen.onthe-way.com/'
                target='_blank'
              >
                {t('queenApp')}
              </a>
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setShowMenu(false);
                setShowUserMenu(false);
              }}
            >
              <a
                rel='noreferrer'
                href='https://freelancing.onthe-way.com/'
                target='_blank'
              >
                {t('freelancing')}
              </a>
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setShowMenu(false);
                setShowUserMenu(false);
              }}
            >
              <a
                rel='noreferrer'
                href='https://play.google.com/store/apps/details?id=com.on_the_way.queen_connect'
                target='_blank'
              >
                {t('queenConnect')}
              </a>
            </span>
          </li>

          <li>
            <span
              onClick={() => {
                setShowMenu(false);
                setShowUserMenu(false);
              }}
            >
              <Link href='/queens-tale'>{t('queensTale')}</Link>
            </span>
          </li>
        </ul>

        <div className='d-flex justify-content-between align-items-center pb-1 pt-3 px-3 nav-for-phone'>
          <Link href='/'>
            <a className='mobile-menu-container'>
              <AiFillHome
                className=' text-white'
                onClick={() => {
                  setShowMenu(false);
                  setShowUserMenu(false);
                }}
              />
              <p className='mobile-menu-title'> {t('home')}</p>
            </a>
          </Link>
          <div className='mobile-menu-container'>
            <FaUserAlt
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowMenu(false);
              }}
              className={`${showUserMenu && 'text-dark'}`}
            />
            <p className='mobile-menu-title'> {t('user')}</p>
          </div>
          <Link href='/products/Food'>
            <a className='mobile-menu-container'>
              <MdOutlineDashboard />

              <p className='mobile-menu-title'> {t('categories')}</p>
            </a>
          </Link>

          {/* <Link href='/cart'>
            <a className='mobile-menu-container'>
              <div
                onClick={() => {
                  setShowMenu(false);
                  setShowUserMenu(false);
                }}
                className='text-decoration-none position-relative '
              >
                <CgShoppingCart className='' />
                <span className='cart-length bg-dark'>{cart.length}</span>
              </div>
              <p className='mobile-menu-title'>Cart</p>
            </a>
          </Link> */}
          <div className='mobile-menu-container'>
            <AiOutlineMenu
              onClick={() => {
                setShowMenu(!showMenu);
                setShowUserMenu(false);
              }}
              className={` pointer ${showMenu && 'text-dark'} `}
            />
            <p className='mobile-menu-title'> {t('menu')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderForPhone;
