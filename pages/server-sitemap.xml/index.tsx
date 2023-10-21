import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { url } from '../../components/Helpers/Constant';

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
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

  let newData: any;
  for (const item of categoryList) {
    const uri =
      url + `/api/admin/product/get/all/by-category/${item.categoryName}`;

    const resNewData = await fetch(`${uri}?limit=100000&skip=0`);
    const result = await resNewData.json();
    newData = result.data;
  }

  let fields: [] = newData.map((product: any) => ({
    loc: `https://onthe-way.com/product/${product.id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
