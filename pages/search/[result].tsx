import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PLoadingSpinner from '../../components/Spinner/PLoadingSpinner';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { url } from '../../components/Helpers/Constant';
import Meta from '../../components/Meta/Meta';
import ShowProducts from '../../components/ShowProducts/ShowProducts';
import { IsearchProducts } from '../../PageTypes/search/SearchTypes';
import { useRouter } from 'next/router';
import Pages from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';

const SearchPage = () => {
  const [searchProducts, setSearchProducts] = useState<IsearchProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalSearchProducts, setTotalSearchProducts] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const { t } = useTranslation(['products', 'home']);
  const router = useRouter();
  const { query } = router;
  const queryPage: any = router.query.page;
  const productLimit = 32;

  useEffect(() => {
    setIsLoading(true);
    const urlSearchParams = new URLSearchParams(window?.location.search);
    const querySearch = urlSearchParams.get('search');
    setSearchQuery(querySearch);

    // fetch search products
    if (!queryPage) {
      (async () => {
        const res = await fetch(
          `${url}/api/admin/product/search?limit=32&skip=0&search=${querySearch}`
        );
        const searchData = await res.json();
        if (searchData.success) {
          setSearchProducts(searchData.data);
          setTotalSearchProducts(searchData.total);
        }
        setIsLoading(false);
      })();
    } else {
      if (queryPage) {
        setIsLoading(true);
        fetch(
          `${url}/api/admin/product/search?skip=${
            (queryPage - 1) * productLimit
          }&limit=${productLimit}&search=${router.query.search}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setSearchProducts(data.data);
            }
            setIsLoading(false);
          });
      }
    }
  }, [router.query.search, queryPage]);

  //========= pagination =========//

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsLoading(true);

    router.push(
      `/search/result?search=${router.query.search}&&page=${pageNumber}`
    );

    fetch(
      `${url}/api/admin/product/search?skip=${
        (pageNumber - 1) * productLimit
      }&limit=${productLimit}&search=${router.query.search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSearchProducts(data.data);
        }
        setIsLoading(false);
      });
  };

  return (
    <>
      <Meta title={`${searchQuery} | Nowabenki Gonomukhi Foundation (NGF)`} />
      <div className='category-search-page py-5'>
        <Container>
          <h1 className='my-3 section-title'>
            Search Result for <span className='q-color'>{searchQuery}</span>
          </h1>

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {searchProducts.length ? (
                <Row md={5} xs={2} className='gx-2 gx-md-3 gx-lg-4'>
                  {searchProducts.map((product) => (
                    <ShowProducts key={product.id} product={product} />
                  ))}
                </Row>
              ) : (
                <>
                  <p className='fw-bold fs-3 font-exo text-center my-5'>
                    {t('noproductAtThisCategory')}
                  </p>
                </>
              )}

              {totalSearchProducts > 32 && (
                <div className='d-flex justify-content-center pt-5'>
                  <Pages
                    totalItem={totalSearchProducts}
                    currentPage={currentPage}
                    paginate={paginate}
                    Limit={productLimit}
                  />
                </div>
              )}
            </>
          )}
        </Container>
      </div>
    </>
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

export default SearchPage;
