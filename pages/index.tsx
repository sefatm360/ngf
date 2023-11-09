import type { GetStaticProps, NextPage } from 'next';
import HomeWrapper from '../components/HomeComponent/HomeWrapper/HomeWrapper';
import { IBannerDataType } from '../components/HomeComponent/Banner/Types/BannerType';
import { url } from '../components/Helpers/Constant';
import { IhomeProps } from '../PageTypes/HomePage/homePageTypes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '../components/Meta/Meta';

const Home: NextPage<IhomeProps> = ({
  sliderBanner,
  homeDeals,
  allCourses,
}) => {
  //
  return (
    <>
      <Meta title='Home | Nowabenki Gonomukhi Foundation (NGF)' />
      <HomeWrapper
        sliderBanner={sliderBanner}
        homeDeals={homeDeals}
        allCourses={allCourses}
      />
    </>
  );
};

export default Home;

//
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const homeDeals: { deal: object; data: object[]; banner: object }[] = [];

  // all courses
  let allCourses: object[] = [];

  // slider banner
  let sliderBanner: IBannerDataType | object = {};

  try {
    // fetch slider banner
    const res = await fetch(`${url}/api/content/get/images/slider`);
    sliderBanner = await res.json();

    // fetch daily deals
    const categoryList: any = [
      {
        id: 1,
        categoryName: 'recentProduct',
        name: 'recentProducts',
        banner: 'recent_products',
        route: '/products/recent-product',
      },
      {
        id: 2,
        categoryName: 'BabyProducts',
        name: 'babyProducts',
        banner: 'baby_products',
        route: '/products/BabyProducts',
      },
      {
        id: 3,
        categoryName: 'Food',
        name: 'food',
        banner: 'food',
        route: `/products/Food`,
      },
      {
        id: 4,
        categoryName: 'HomeDecor',
        name: 'homeDecor',
        banner: 'home_decor',
        route: `/products/HomeDecor`,
      },
    ];

    let uri: string = url + '/api/admin/product/get/approved/all';

    for (const item of categoryList) {
      if (item.categoryName === 'recentProduct') {
        uri = url + '/api/admin/product/get/approved/all';
      } else {
        uri =
          url + `/api/admin/product/get/all/by-category/${item.categoryName}`;
      }
      const resNewData = await fetch(`${uri}?limit=10&skip=0`);

      const newData = await resNewData?.json();

      const dealsRes = await fetch(
        `${url}/api/content/get/images/${item.banner}`
      );
      const dealsBanner = await dealsRes?.json();

      homeDeals?.push({
        deal: item,
        data: newData?.data || null,
        banner: dealsBanner?.data?.img || null,
      });
    }

    // fetch training
    // const resCourse = await fetch(
    //   `${url}/otw-training/api/training/get/all?limit=10&skip=0`
    // );
    // const courseData = await resCourse.json();

    allCourses = [];
  } catch (err) {}

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
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
      homeDeals,
      sliderBanner,
      allCourses,
    },
    revalidate: 3600,
  };
};
