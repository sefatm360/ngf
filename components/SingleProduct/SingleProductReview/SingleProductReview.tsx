import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactStars from 'react-stars';
import { url } from '../../Helpers/Constant';
import Pages from '../../Pagination/Pagination';
import ShowReviews from '../../ShowReviews/ShowReviews';
import {
  IsingleProductAllRating,
  IsingleProductProps,
} from '../Types/singleProductTypes';

const SingleProductReview = ({ singleProduct }: IsingleProductProps) => {
  const [singleProductAllRating, setSingleProductAllRating] = useState<
    IsingleProductAllRating[]
  >([]);

  const [totalReview, setTotalReview] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const reviewLimit = 5;

  const { t } = useTranslation(['products']);

  useEffect(() => {
    fetch(
      `${url}/api/product/get/ratings/${singleProduct.product_id}?skip=0&limit=${reviewLimit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSingleProductAllRating(data.data);
          setTotalReview(data.total);
        }
      });
  }, [singleProduct.product_id]);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
    fetch(
      `${url}/api/product/get/ratings/${singleProduct.product_id}?skip=${
        (pageNumber - 1) * reviewLimit
      }&limit=${reviewLimit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSingleProductAllRating(data.data);
        }
      });
  };

  return (
    <div className='mt-0 mt-md-5 mt-lg-5'>
      <div className='rating-card  mb-3'>
        <h5 className='rating-review-title'>
          {t('ratingReviewsOf')}
          <span className='fw-bold ms-2'>{singleProduct.product_name}</span>
        </h5>
      </div>

      {singleProduct.rating ? (
        <div className='rating-card pt-2 mb-5'>
          <div>
            <span className='fw-bold fs-3'>{singleProduct.rating}</span>
            <span className='default-rating'>/5</span>

            <div className='mb-2'>
              <ReactStars
                value={Number(singleProduct.rating)}
                edit={false}
                size={20}
                color1={'#3333'}
                color2={'#ffc107'}
              />
            </div>
          </div>
          <div>
            <small className='  p-fontSize '>
              {singleProduct.rating_count} Ratings
            </small>
          </div>
        </div>
      ) : (
        <>
          <p style={{ paddingLeft: '20px' }} className=' mt-4 '>
            {t('noReviewAvailable')}
          </p>
        </>
      )}

      <div className='mt-3'>
        {singleProduct.rating && (
          <>
            {singleProductAllRating.map((review) => (
              <ShowReviews key={review.id} review={review} />
            ))}
          </>
        )}
        {totalReview > 5 && (
          <div className='d-flex justify-content-center'>
            <Pages
              totalItem={totalReview}
              currentPage={currentPage}
              paginate={paginate}
              Limit={reviewLimit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductReview;
