import dynamic from 'next/dynamic';
import { IhomeProps } from '../../../PageTypes/HomePage/homePageTypes';
import Banner from '../Banner/Banner';
import DailyDeals from '../DailyDeals/DailyDeals';
const DynamicHeader = dynamic(() => import('../PressCoverage/PressCoverage'), {
  ssr: false,
});
const HomeWrapper = ({ sliderBanner, homeDeals, allCourses }: IhomeProps) => {
  return (
    <>
      <Banner sliderBanner={sliderBanner} />
      <DailyDeals homeDeals={homeDeals} />
      {/* <Training allCourses={allCourses} /> */}
      {/* <Suspense fallback={`Loading...`}> */}
      {/* <DynamicHeader /> */}
      {/* </Suspense> */}
    </>
  );
};

export default HomeWrapper;
