import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
const ConfirmationOrder = () => {
  const { t } = useTranslation(['cart']);
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='my-5 text-center'>
              <Image
                height={90}
                width={90}
                src='/assets/success-icon.png'
                alt=''
              />
              <h1 className='font-jost fw-bold mt-4'>{t('Order Confirmed')}</h1>
              <h5 className='my-2 font-jost'>
                {t('Thank You For Your Order')}
              </h5>
              <h5 className='font-jost mt-5'>
                {t('Your Order Id')}{' '}
                <strong className='text-main'>NGF-O{id}</strong>
              </h5>
              <h6 className='mt-2 mb-4 font-jost'>
                {t(
                  'We will Call you as soon as possible for order confirmation'
                )}
              </h6>
              <Link className=' text-decoration-none' href='/'>
                <a className='text-dark font-jost'>
                  <span className=''> {t('Back to Home')}</span>
                  <BsArrowRight className='ms-2' />
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConfirmationOrder;
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
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
};
