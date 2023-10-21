import { IBanner } from '../../components/HomeComponent/Banner/Types/BannerType';

export interface IhomeProps {
  homeDeals: object[];
  sliderBanner: {
    success: boolean;
    data: IBanner[];
  };
  allCourses: object[];
}
