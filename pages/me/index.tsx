import axios from 'axios';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';
import { url } from '../../components/Helpers/Constant';
import useDebounce from '../../components/Hooks/useDebounce';
import Meta from '../../components/Meta/Meta';
import Pages from '../../components/Pagination/Pagination';
import ShowQueen from '../../components/ShowQueen/ShowQueen';
import Spinner, { QueenLoader } from '../../components/Spinner/Spinner';
import { Iqueens, IqueensProps } from '../../PageTypes/queens/queensTypes';

const Queens = ({ data }: IqueensProps) => {
  const [queens, setQueens] = useState<Iqueens[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalQueen, setTotalQueen] = useState<number>(0);
  const [queenSearchValue, setQueenSearchValue] = useState<string>('');
  const { t } = useTranslation('home');
  const deboundSearchValue = useDebounce(queenSearchValue, 500);
  const router = useRouter();
  const queryPage = router.query.page;
  const queenLimit = 24;

  useEffect(() => {
    setIsloading(true);
    if (data.success) {
      setQueens(data.data);
      setTotalQueen(data.total);
      setIsloading(false);
    }
    setIsloading(false);

    if (queryPage) {
      setIsloading(true);

      setCurrentPage(Number(queryPage));
      fetch(
        `${url}/api/admin/queen/get/approved/with/products?skip=${
          (Number(queryPage) - 1) * queenLimit
        }&limit=${queenLimit}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setQueens(data.data);
            setIsloading(false);
          }
          setIsloading(false);
        });
    } else {
      setCurrentPage(1);
      setIsloading(false);
    }
  }, []);

  //======== queeen search =========//

  useEffect(() => {
    (async () => {
      setIsloading(true);

      if (deboundSearchValue) {
        const { data } = await axios.get(
          `${url}/api/admin/queen/search/for-client/${deboundSearchValue}`
        );

        if (data.success) {
          setQueens(data.data);
          setIsloading(false);
        }
      } else {
        if (queryPage) {
          setIsloading(true);

          setCurrentPage(Number(queryPage));
          fetch(
            `${url}/api/admin/queen/get/approved/with/products?skip=${
              (Number(queryPage) - 1) * queenLimit
            }&limit=${queenLimit}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setQueens(data.data);
              }
              setIsloading(false);
            });
        } else {
          setCurrentPage(1);
          setIsloading(true);

          const { data } = await axios.get(
            `${url}/api/admin/queen/get/approved/with/products?skip=0&limit=${queenLimit}`
          );
          if (data.success) {
            setQueens(data.data);
          }
          setIsloading(false);
        }
      }
    })();
  }, [deboundSearchValue]);

  //========= pagination =========//

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsloading(true);

    router.push(`/queens?page=${pageNumber}`);

    fetch(
      `${url}/api/admin/queen/get/approved/with/products?skip=${
        (pageNumber - 1) * queenLimit
      }&limit=${queenLimit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setQueens(data.data);
        }
        setIsloading(false);
      });
  };

  return (
    <>
      <Meta title='ME | Nowabenki Gonomukhi Foundation (NGF)' />
      <div className='queens-section'>
        <Container className='py-5'>
          <div className=''>
            <div className='section-title-wrapper d-md-flex d-block  justify-content-between align-items-center'>
              <h1 className='section-title'>{t('alQueenStore')}</h1>
              {/* <h1 className='section-title title-opacity'>
                {t('alQueenStore')}
              </h1> */}

              <div className='search-queen '>
                <InputGroup className='mb-3 '>
                  <Form.Control
                    placeholder='Search ME...'
                    aria-label='search queen'
                    aria-describedby='basic-addon2'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setQueenSearchValue(e.target.value)
                    }
                  />
                  <InputGroup.Text
                    className='main-bg text-white pointer border-0'
                    id='basic-addon2'
                  >
                    <BsSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div>
              {queens.length ? (
                <Row md={3} lg={4} xs={1}>
                  {queens.map((queen) => (
                    <ShowQueen key={queen.id} queen={queen} />
                  ))}
                </Row>
              ) : (
                <>
                  <h3 className='text-center text-opacity  fw-bolder text-dark my-5'>
                    No Queens Found
                  </h3>
                </>
              )}
            </div>
          )}

          {!isLoading && (
            <>
              {totalQueen > queenLimit && !queenSearchValue && queens.length ? (
                <div className='d-flex justify-content-center pt-5'>
                  <Pages
                    totalItem={totalQueen}
                    currentPage={currentPage}
                    paginate={paginate}
                    Limit={queenLimit}
                  />
                </div>
              ) : (
                ''
              )}
            </>
          )}
        </Container>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const queenLimit = 24;
  const res = await fetch(
    `${url}/api/admin/queen/get/approved/with/products?skip=0&limit=${queenLimit}`
  );
  const data = await res.json();

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
      data,
    },
  };
};
export default Queens;
