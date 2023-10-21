import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Category from '../../components/Category/Category';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import { useProductContext } from '../../contexts/ProductContextFile/ProductContext';

const DynamicPath = ({ categoryPath }: { categoryPath: string }) => {
  const { fetching } = useProductContext();
  const router = useRouter();
  const { t } = useTranslation(['products', 'home']);

  const dynamicCategory = router.query.dynamicCategory || '';
  let windowPath: string = '';

  if (typeof window !== 'undefined') {
    windowPath = window.location.pathname;
  }

  return (
    <SidebarLayout>
      <div>
        <Category
          fetching={fetching}
          category={dynamicCategory}
          name={t(dynamicCategory)}
        />
      </div>
    </SidebarLayout>
  );
};

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
export default DynamicPath;
