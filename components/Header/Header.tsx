import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { IoMdLogOut } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import HeaderForPhone from './HeaderForPhone';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { AUTH_USER_SUCCESS } from '../Helpers/Constant';
import { useCartContext } from '../../contexts/CartContextFile/CartContext';
import { destroyCookie } from 'nookies';
import { BsSearch } from 'react-icons/bs';
import MegaDropdown from '../HomeComponent/MegaDropdown/MegaDropdown';
import ToggleSwitch from '../utils/ToggleLocalization';

const Header = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [categoryPress, setCategoryPress] = useState<boolean>(false);
  const [subCategoryPress, setSubCategoryPress] = useState({
    womanFashion: false,
    mensFashion: false,
    health: false,
    foodItem: false,
  });
  const { dispatch: AuthDispatch, user } = useAuthContext();
  const { cart } = useCartContext();
  const { register } = useForm();
  const router = useRouter();
  const [navScroll, setNavScroll] = useState<boolean>(false);
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const { t } = useTranslation(['home', 'products']);
  const { locale, asPath } = router;

  useEffect(() => {
    setCategoryPress(false);
    setSearchClick(false);
  }, [router.pathname]);

  const handleLogout = () => {
    destroyCookie(null, '__ca_otw');
    AuthDispatch?.({
      type: AUTH_USER_SUCCESS,
      payload: { user: {}, token: '' },
    });
    router.push('/login');
  };

  const handleSearch = () => {
    if (searchText) {
      router.push({
        pathname: '/search/result',
        query: { search: searchText },
      });
    }
  };

  const handelChange = (language: any) => {
    router.push(router.route, router.asPath, { locale: language });
  };

  // toggle button for language change in small device. so don't delete this comment secton. it will be update after 10-10-22

  // const [checked, setChecked] = useState(false);
  // const handleChange = (nextChecked: boolean) => {
  //   setChecked(nextChecked);
  // };

  // useEffect(() => {
  //   if (checked) {
  //     router.replace(router.route, router.asPath, { locale: 'en' });
  //   } else {
  //     router.replace(router.route, router.asPath, { locale: 'bn' });
  //   }
  // }, [checked]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={categoryPress ? 'window-click' : 'window-click-none'}
        onClick={() => {
          setCategoryPress(!categoryPress);
        }}
      ></div>

      <div
        className={
          searchClick ? 'mobile-search window-click' : 'window-click-none'
        }
        onClick={() => {
          setSearchClick(!searchClick);
        }}
      ></div>
      <div
        className={`header-area d-none d-md-block d-lg-block ${
          navScroll ? 'header-sticky' : ''
        }`}
      >
        <div className='top-bar-wrapper d-none d-sm-block'>
          <Container>
            <div className='top-bar'>
              <ul>
                <li>
                  <Link href='/'>{t('home')}</Link>
                </li>

                <li>
                  <Link href='/me'>{t('allqueens')}</Link>
                </li>
                {/* <li>
                  <a
                    rel='noreferrer'
                    href='https://queen.onthe-way.com/'
                    target='_blank'
                  >
                    {t('queenApp')}
                  </a>
                </li> */}

                {/* <li>
                  <a
                    rel='noreferrer'
                    href='https://freelancing.onthe-way.com/'
                    target='_blank'
                  >
                    {t('freelancing')}
                  </a>
                </li> */}
                {/* <li>
                  <a
                    rel='noreferrer'
                    href='https://play.google.com/store/apps/details?id=com.on_the_way.queen_connect'
                    target='_blank'
                  >
                    {t('queenConnect')}
                  </a>
                </li> */}
                {/* <li>
                  <Link href='/queens-tale'>{t('queensTale')}</Link>
                </li> */}

                {/* language change  */}
                <li>
                  <div>
                    {locale === 'en' && (
                      <div
                        className='pointer d-flex align-items-center'
                        onClick={() => {
                          handelChange('bn');
                        }}
                      >
                        <Image
                          src='/assets/bd-flag.png'
                          alt=''
                          width={20}
                          height={20}
                          objectFit='cover'
                        />
                        <span className='languageText ms-1'>বাংলা</span>
                      </div>
                    )}
                    {locale === 'bn' && (
                      <div
                        className='pointer d-flex align-items-center'
                        onClick={() => {
                          handelChange('en');
                        }}
                      >
                        <Image
                          src='/assets/usa-flag.png'
                          alt=''
                          width={20}
                          height={20}
                          objectFit='cover'
                        />
                        <span className='languageText ms-1'>English</span>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <HeaderForPhone />

        <Container>
          <div className='navigation-area'>
            <Row className='align-items-center'>
              <Col
                md={4}
                lg={3}
                className='my-md-0 my-2 d-flex justify-content-between align-items-center '
              >
                <div>
                  <Link href='/'>
                    <a className='pointer'>
                      <Image
                        className='img-fluid'
                        src='/assets/ngf-main-logo.png'
                        alt=''
                        width={50}
                        height={50}
                        priority
                      />
                    </a>
                  </Link>
                </div>

                <div className='category-dropdown-area'>
                  <div
                    onClick={() => {
                      setCategoryPress(!categoryPress);
                    }}
                    className='cmn-btn '
                  >
                    <span>
                      {!categoryPress ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          className='ui-f0'
                        >
                          <path
                            fill='currentColor'
                            d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 0a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Zm-4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          className='ui-f0 cross'
                        >
                          <path
                            fill='currentColor'
                            d='m12 10.586 6.293-6.295a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.294a1 1 0 1 1-1.414 1.415L12 13.414 5.707 19.71a1 1 0 0 1-1.414-1.415L10.586 12 4.293 5.705a1 1 0 1 1 1.414-1.414L12 10.586Z'
                          ></path>
                        </svg>
                      )}
                    </span>
                    <span className='ms-1'> {t('products:Category')}</span>
                  </div>
                  {/* dropdown */}
                </div>
              </Col>

              <Col md={5} lg={6}>
                <div className='d-flex align-items-center search-wrapper '>
                  <div className='w-100 d-flex'>
                    {/* <Form.Select
                      className='select-search'
                      aria-label='Default select example'
                      defaultValue=''
                      disabled>
                      <option value='' hidden>
                        {t('products:Category')}
                      </option>
                      <option value='all'>All</option>
                      <option value='food'>Food Items</option>
                      <option value='womans fashion'>Womans Fashion</option>
                      <option value='mens fashion'>Men&apos;s Fashion</option>
                      <option value='healthy & beauty'>Healthy & Beauty</option>
                      <option value='baby products'>Baby Products</option>
                      <option value='home decor'>Home decor</option>
                      <option value='accessories'>Accessories</option>
                      <option value='grocery'>Grocery</option>
                      <option value='toys'>Toys</option>
                    </Form.Select> */}
                    <input
                      className='search-box px-2 '
                      type='text'
                      placeholder={t('search')}
                      {...register('searchText')}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      value={searchText}
                      onKeyPress={(e) => {
                        e.key === 'Enter' && handleSearch();
                      }}
                    />
                  </div>

                  <div
                    title={t('searchTitle')}
                    onClick={handleSearch}
                    className='search-btn pointer'
                  >
                    <FiSearch className='fs-4' />
                  </div>
                </div>
              </Col>
              <Col md={3} lg={3} className=' d-none d-md-block right-link-area'>
                <div className='d-flex justify-content-end align-items-center gap-3'>
                  {user.phone ? (
                    <li>
                      <a
                        className='d-flex align-items-center text-dark pointer'
                        onClick={handleLogout}
                      >
                        <IoMdLogOut className='' title={t('logOut')} />
                      </a>
                    </li>
                  ) : (
                    <li>
                      <Link href='/login'>
                        <a className='d-flex align-items-center text-dark pointer'>
                          <AiOutlineUser className='' title={t('logIn')} />
                        </a>
                      </Link>
                    </li>
                  )}

                  {user.phone && (
                    <Link href='/profile'>
                      <a>
                        <AiOutlineUser
                          className='fs-3 text-dark'
                          title={t('profile')}
                        />
                      </a>
                    </Link>
                  )}
                  {/* don't remove */}
                  {/* <ToggleSwitch
                    handleChange={handleChange}
                    setChecked={setChecked}
                    checked={checked}
                  /> */}
                  <Link href='/cart'>
                    <a className=' position-relative position-relative text-dark default-hover'>
                      {/* <CgShoppingCart
                        className=' text-dark '
                        title={t('addToCart')}
                      /> */}
                      <HiOutlineShoppingBag
                        className='text-dark'
                        title={t('addToCart')}
                      />
                      <span className='cart-length'>{cart.length}</span>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
            {/* mega dropdown start */}
            <MegaDropdown
              categoryPress={categoryPress}
              setSubCategoryPress={setSubCategoryPress}
              subCategoryPress={subCategoryPress}
            />
            {/* mega dropdown end */}
          </div>
        </Container>
      </div>

      {/* header area for phone */}

      <div
        className={`mobile-header-area header-area d-block d-md-none ${
          navScroll ? 'header-sticky' : ''
        }`}
      >
        <div className='header-phone-wrapper'>
          <HeaderForPhone />
        </div>
        <div className='full-header-area'>
          <div className='container'>
            <div className='header-area-content'>
              <div>
                <Link href='/'>
                  <a>
                    <Image
                      src='/assets/ngf-main-logo.png'
                      alt=''
                      width={40}
                      height={40}
                      objectFit='cover'
                      priority
                    />
                  </a>
                </Link>
              </div>

              <div className='d-flex justify-content-center align-items-center'>
                <div className='me-3'>
                  <BsSearch
                    onClick={() => setSearchClick(!searchClick)}
                    className='fs-4 text-main'
                  />
                </div>
                <div className='cart-btn-wrapper'>
                  <Link href='/cart'>
                    <a className=' position-relative position-relative text-dark default-hover fs-4 me-2'>
                      <HiOutlineShoppingBag title={t('addToCart')} />
                      <span className='cart-length'>{cart.length}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/*  */}
            <div
              className={` mt-2 ${
                searchClick ? 'search-wrapper-visible' : 'phone-search-wrapper'
              } `}
            >
              <div className={`d-flex align-items-center  `}>
                <div className='w-100 d-flex'>
                  {/* <Form.Select
                    className='select-search'
                    aria-label='Default select example'
                    defaultValue=''
                    disabled>
                    <option value='' hidden>
                      Category
                    </option>
                    <option value='all'>All</option>
                    <option value='food'>Food Items</option>
                    <option value='womans fashion'>Womans Fashion</option>
                    <option value='mens fashion'>Men&apos;s Fashion</option>
                    <option value='healthy & beauty'>Healthy & Beauty</option>
                    <option value='baby products'>Baby Products</option>
                    <option value='home decor'>Home decor</option>
                    <option value='accessories'>Accessories</option>
                    <option value='grocery'>Grocery</option>
                    <option value='toys'>Toys</option>
                  </Form.Select> */}
                  <input
                    className='search-box px-2 '
                    type='text'
                    placeholder={t('search')}
                    {...register('searchText')}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    value={searchText}
                    onKeyPress={(e) => {
                      e.key === 'Enter' && handleSearch();
                    }}
                  />
                </div>

                <div
                  title={t('searchTitle')}
                  onClick={handleSearch}
                  className='search-btn pointer'
                >
                  <FiSearch className='fs-4' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
