import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import { url } from '../../Helpers/Constant';
import DailyDealsBanner from './DailyDealsBanner';
import { IproductCategories } from './Types/DealsType';
import home from '../../../public/locales/en/home.json';
import homeBn from '../../../public/locales/bn/home.json';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

const DailyDeals = ({ homeDeals }: any) => {
  const { t } = useTranslation(['home']);
  const router = useRouter();

  return (
    <>
      <div className='daily-deals-section dls'>
        {/* <div className='circledot-1'></div>
        <span className='circledot-2'></span>
        <span className='circledot-3'></span> */}
        <Container>
          <div className='section-title-wrapper'>
            {/* <h1
              className='section-title '
              dangerouslySetInnerHTML={
                router.locale === 'en'
                  ? { __html: t(home.dealyDeals) }
                  : { __html: t(homeBn.dealyDeals) }
              }
            ></h1>
            <h1
              className='section-title title-opacity'
              dangerouslySetInnerHTML={
                router.locale === 'en'
                  ? { __html: t(home.dealyDeals) }
                  : { __html: t(homeBn.dealyDeals) }
              }
            ></h1> */}

            <h1 className='section-title'>{t(home.dealyDeals)}</h1>
            <h1 className='section-title title-opacity'>
              {t(home.dealyDeals)}
            </h1>
          </div>

          <div className='deals-options'>
            {homeDeals.map((singleHomeDeal: any, index: any) => (
              <DailyDealsBanner category={singleHomeDeal} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default DailyDeals;
