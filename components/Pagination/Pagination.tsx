import Link from 'next/link';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Pages = ({ totalItem, paginate, currentPage, Limit }: any) => {
  const { t } = useTranslation(['home']);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItem / Limit); i++) {
    pageNumber.push(i);
  }

  const lastPage = pageNumber[pageNumber.length - 1];

  return (
    <div>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <a
              className='page-link pointer'
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
            >
              {t('previous')}
            </a>
          </li>
          {pageNumber.map((page, index) => {
            return (
              <div key={index}>
                {page === currentPage ? (
                  <Pagination.Item
                    active
                    key={page}
                    onClick={() => paginate(page)}
                  >
                    {page}
                  </Pagination.Item>
                ) : page === currentPage + 1 || page === currentPage - 1 ? (
                  <Pagination.Item key={page} onClick={() => paginate(page)}>
                    {page}
                  </Pagination.Item>
                ) : page === 1 ? (
                  <Pagination.Item key={page} onClick={() => paginate(page)}>
                    {page}
                  </Pagination.Item>
                ) : page === lastPage ? (
                  <Pagination.Item key={page} onClick={() => paginate(page)}>
                    {page}
                  </Pagination.Item>
                ) : page === lastPage - 1 ? (
                  <Pagination.Ellipsis />
                ) : (
                  page === 2 && <Pagination.Ellipsis />
                )}
              </div>
            );
          })}

          <li className='page-item'>
            <a
              onClick={() => {
                if (currentPage < lastPage) {
                  paginate(currentPage + 1);
                }
              }}
              className='page-link  pointer'
            >
              {t('next')}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pages;
