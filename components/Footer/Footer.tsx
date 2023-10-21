import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const { t } = useTranslation(['footer']);

  const handelChange = (language: any) => {
    router.push(router.route, router.asPath, { locale: language });
  };
  return (
    <>
      <div className='footer-section'>
        <Container>
          <div className='py-md-2 py-2 footer-main'>
            <Row className='d-flex'>
              <Col md={6} className='text-md-start text-center'>
                <Row className='d-md-flex'>
                  <Col md={12} lg={6} className=''>
                    <Image
                      className='img-fluid'
                      loading='lazy'
                      height={63}
                      width={63}
                      src='/assets/ngf-main-logo.png'
                      alt=''
                    />
                    <h5 className='fw-bold mt-2 '>
                      Nowabenki Gonomukhi Foundation (NGF)
                    </h5>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <div className='mt-3 mt-md-0'>
                  <Row>
                    <Col md={6} lg={4}>
                      <h5 className='footer-list-title'>{t('aboutUs')}</h5>
                      <ul className='footer-list'>
                        <li>
                          <Link href='/about'>{t('aboutUs')}</Link>
                        </li>
                        <li>
                          <Link href='/contact'>{t('contactUs')}</Link>
                        </li>
                        <li>
                          <Link href='/order-tracking'>
                            {t('orderTracking')}
                          </Link>
                        </li>
                        <li>
                          <Link href='/profile'>{t('myAccount')}</Link>
                        </li>
                        {/* <li>
                          <Link href='/it-services'>{t('ItService')}</Link>
                        </li> */}
                      </ul>
                    </Col>
                    <Col md={6} lg={4}>
                      <h5 className='footer-list-title'>{t('usefulLink')}</h5>
                      <ul className='footer-list'>
                        <li>
                          <Link href='/returns'>{t('returns')}</Link>
                        </li>

                        <li>
                          <Link href='/faqs'>{t('faqs')}</Link>
                        </li>
                        <li>
                          <Link href='/products/recent-product'>
                            {t('backShopping')}
                          </Link>
                        </li>
                        {/* <li>
                          <Link href='/sponsorship'>{t('sponsorship')}</Link>
                        </li> */}
                        {/* <li>
                          <Link href='/memories'>{t('memories')}</Link>
                        </li> */}
                        {/* <li>
                          <Link href='/journal'>{t('journal')}</Link>
                        </li> */}
                        {/* <li>
                          <Link href='/announcement'>{t('announcement')}</Link>
                        </li> */}
                      </ul>
                    </Col>
                    <Col md={6} lg={4}>
                      <h5 className='footer-list-title'>{t('followUs')}</h5>
                      <ul className='footer-list'>
                        <li>
                          <a
                            href='https://www.facebook.com/ngf.org/'
                            target='_blank'
                            rel='noreferrer'
                          >
                            {t('facebook')}
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.youtube.com/channel/UCIcImeEaHh3bvEt-43VgsmQ'
                            rel='noreferrer'
                            target='_blank'
                          >
                            {t('youtube')}
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.linkedin.com/in/nowabenki-gonomukhi-foundation-ngf-998805b9/?originalSubdomain=bd'
                            rel='noreferrer'
                            target='_blank'
                          >
                            {t('linkedin')}
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={4}>
              <div className='address-style'>
                <div className='address-inner'>
                  <h4 className='address-title'>{t('office1')} :</h4>
                  <p className='address'>{t('address1')}</p>
                </div>
                <div className=' d-lg-flex flex-md-column  justify-content-between  footer-box  '>
                  <div>
                    <h6 className='contact-text'>{t('emailText')}</h6>
                    <div className='d-flex flex-column '>
                      <small>lutfor.rahman@ngf-bd.org</small>
                      <small>ngfbd1@yahoo.com</small>
                      <small>ngfbd1@gmail.com</small>
                    </div>
                  </div>
                  <div>
                    <h6 className='contact-text mt-3 mt-md-3 mt-lg-2'>
                      {t('call')}
                    </h6>
                    <div className='d-flex flex-column '>
                      <small className='mt-1'>Cell:</small>
                      <small>+8801 7112 18197</small>
                      <small>+8801 9712 18197</small>
                      <small>+8801 7118 64604</small>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col lg={4}>
              <div className='address-style'>
                <div className='address-inner'>
                  <h4 className='address-title'>{t('office2')} :</h4>

                  <p className='address'>{t('address2')}</p>
                </div>
              </div>
            </Col> */}
            {/* <Col lg={4}>
              <div className='address-style'>
                <div className='address-inner'>
                  <h4 className='address-title'>{t('office3')} :</h4>

                  <p className='address'>{t('address3')}</p>
                </div>
              </div>
            </Col> */}
          </Row>
          {/*Fund sections */}
          {/* <Container> */}
          {/* <Funded /> */}

          {/* </Container> */}
          <div className='d-md-flex justify-content-between align-items-center pb-5 pb-md-0 footer-bar'>
            <div className='text-dark mt-3  d-flex justify-content-between'>
              <div>
                <small>
                  &copy; {new Date().getFullYear()} Nowabenki Gonomukhi
                  Foundation (NGF)
                </small>
                <small> {t('alRights')}</small>
              </div>

              <div className='ms-2'>
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
            </div>
            {/* <div className='mt-3'>
              <div className='d-flex '>
                <a
                  href='https://basis.org.bd/company-profile/22-02-067'
                  className='text-decoration-none'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='d-flex d-md-block flex-column align-items-center mt-2 text-center'>
                    <div className='ps-1 pb-2'>
                      <p className='text-dark member-text'>
                        {t('AffiliateMemberOf')}
                      </p>
                    </div>
                    <div>
                      <Image
                        className='img-fluid'
                        width={150}
                        height={52}
                        src='https://basis.org.bd/public/images/logo.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </a>

                <a
                  href='https://e-cab.net/company-profile/1661/on-the-way'
                  className='text-decoration-none'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='d-flex d-md-block flex-column align-items-center mt-2 text-center'>
                    <div className='ps-1 pb-2'>
                      <p className='text-dark member-text'>{t('member')}</p>
                    </div>
                    <div>
                      <Image
                        loading='lazy'
                        className='img-fluid'
                        width={150}
                        height={52}
                        src='/assets/membership/ecab.png'
                        alt=''
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
