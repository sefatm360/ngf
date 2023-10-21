import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import Meta from '../../components/Meta/Meta';

const Memories = () => {
  const { t } = useTranslation(['memories']);
  return (
    <>
      <Meta title='Memories | Nowabenki Gonomukhi Foundation (NGF)' />

      {/* <div className='container'>
        <div className='memories-section my-5'>
          <h1 className='section-title  mb-5'>{t('memories')}</h1>

          <Row xs={1} md={2} lg={2}>
            <Col>
              <div className='memories-box-wrapper'>
                <div className='memories-img-box'>
                  <Image
                    src='/assets/memories/memories1.webp'
                    layout='fill'
                    alt='ontheway memories'
                  />
                </div>

                <p className='font-jost mt-2 description'>
                  {t('areospaceResarch')}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div> */}
    </>
  );
};

export default Memories;
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
