import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../Helpers/Constant';
import ShowProducts from '../ShowProducts/ShowProducts';
import {
  IcategoryProductProps,
  IcategoryProducts,
} from '../../PageTypes/products/ProductsTypes';
import { ProductLoader } from '../Spinner/Spinner';
import Pages from '../Pagination/Pagination';
import { useRouter } from 'next/router';

const Category = ({ category, fetching }: IcategoryProductProps) => {
  const [showingProducts, setShowingProducts] = useState<IcategoryProducts[]>(
    []
  );
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState(true);
  const { t } = useTranslation(['products', 'home']);
  const router = useRouter();
  const queryPage = router.query.page;
  const productLimit = 32;

  useEffect(() => {
    setIsFetching(true);
    let uri = `${url}/api/admin/product/get/all/by-category/${category}?limit=32&&skip=0`;
    if (queryPage) {
      setCurrentPage(Number(queryPage));
      fetch(
        `${url}/api/admin/product/get/all/by-category/${category}?limit=${productLimit}&skip=${
          (Number(queryPage) - 1) * productLimit
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setShowingProducts(data.data);
            setTotalProducts(data.total);
            setIsFetching(false);
          }
        });
    } else {
      setCurrentPage(1);

      (async () => {
        const res = await fetch(uri);
        const data = await res.json();

        setShowingProducts(data.data);
        setTotalProducts(data.total);
        setIsFetching(false);
      })();
    }
  }, [category, queryPage]);

  // pangination for category

  const paginate = (pageNumber: number) => {
    setIsFetching(true);
    setCurrentPage(pageNumber);
    router.push(`${category}?page=${pageNumber}`);

    fetch(
      `${url}/api/admin/product/get/all/by-category/${category}?limit=${productLimit}&skip=${
        (pageNumber - 1) * productLimit
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setShowingProducts(data.data);
          setIsFetching(false);
        }
      });
  };

  return (
    <>
      {isFetching ? (
        <div>
          <ProductLoader />
        </div>
      ) : (
        <>
          {showingProducts?.length ? (
            <>
              <Row md={3} lg={4} xs={2} className='gx-2 gx-md-3 gx-lg-4'>
                {showingProducts.map((product) => {
                  return <ShowProducts key={product.id} product={product} />;
                })}
              </Row>

              {/* pagination */}

              {totalProducts > 32 && (
                <div className='d-flex justify-content-center mt-4 mt-md-none'>
                  <Pages
                    totalItem={totalProducts}
                    currentPage={currentPage}
                    paginate={paginate}
                    Limit={productLimit}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <p className='fw-bold fs-3 font-exo text-center my-5'>
                {t('noproductAtThisCategory')}
              </p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Category;
