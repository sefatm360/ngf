import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import Meta from '../../components/Meta/Meta';

const Announcement = () => {
  const { t } = useTranslation(['bundle']);
  return (
    <>
      <Meta title='Sponsorship | Nowabenki Gonomukhi Foundation (NGF)' />

      {/* <div className='container'>
        <div className='announcement-section py-5'>
          <h1 className='section-title mb-5'>{t('announcement')}</h1>

          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className='announcement-img-box'>
                <Image src={announcement1Img} layout='fill' alt='' />
              </div>
            </Col>
          </Row>
        </div>
      </div> */}
    </>
  );
};

export default Announcement;
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
