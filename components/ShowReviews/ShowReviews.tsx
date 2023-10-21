import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { url } from '../Helpers/Constant';
import ReactStars from 'react-stars';

const ShowReviews = ({ review }: any) => {
  const [reviewImage, setReviewImage] = useState('');
  const [active, setActive] = useState('');

  const {
    date,
    rater_name,
    comment,
    rating_pic1,
    rating_pic2,
    rating_pic3,
    rating,
  } = review;

  return (
    <>
      <div className='rating-card mb-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <ReactStars
            value={Number(rating)}
            edit={false}
            size={20}
            color1={'#3333'}
            color2={'#ffc107'}
          />

          <p className='p-fontSize'>{date}</p>
        </div>
        <div>
          <small>
            - by <span className=''>{rater_name}</span>
          </small>
        </div>

        <div>
          <p className='py-3 p-fontSize  text-justify'>{comment}</p>
          <div className='d-flex gap-4 align-items-center '>
            <div
              className={
                active === 'rating_pic1' ? 'activeImage pointer' : 'pointer'
              }
              onClick={() => {
                active === 'rating_pic1'
                  ? setActive('')
                  : setActive('rating_pic1');
                active === 'rating_pic1'
                  ? setReviewImage('')
                  : setReviewImage(rating_pic1);
              }}
            >
              {rating_pic1 && (
                <>
                  <Image
                    width={50}
                    height={50}
                    src={`${url}/get/image/rating/${rating_pic1}`}
                    alt=''
                  />
                </>
              )}
            </div>
            <div
              className={
                active === 'rating_pic2' ? 'activeImage pointer' : 'pointer'
              }
              onClick={() => {
                active === 'rating_pic2'
                  ? setReviewImage('')
                  : setReviewImage(rating_pic2);
                active === 'rating_pic2'
                  ? setActive('')
                  : setActive('rating_pic2');
              }}
            >
              {rating_pic2 && (
                <>
                  <Image
                    width={50}
                    height={50}
                    src={`${url}/get/image/rating/${rating_pic2}`}
                    alt=''
                  />
                </>
              )}
            </div>
            <div
              className={
                active === 'rating_pic3' ? 'activeImage pointer' : 'pointer'
              }
              onClick={() => {
                active === 'rating_pic3'
                  ? setReviewImage('')
                  : setReviewImage(rating_pic3);
                active === 'rating_pic3'
                  ? setActive('')
                  : setActive('rating_pic3');
              }}
            >
              {rating_pic3 && (
                <>
                  <Image
                    width={50}
                    height={50}
                    src={`${url}/get/image/rating/${rating_pic3}`}
                    alt=''
                  />
                </>
              )}
            </div>
          </div>

          <div className='mt-4'>
            {reviewImage && (
              <Image
                width={150}
                height={150}
                className=''
                src={`${url}/get/image/rating/${reviewImage}`}
                alt=''
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowReviews;
