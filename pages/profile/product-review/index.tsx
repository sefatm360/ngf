import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';
import { AiFillDelete } from 'react-icons/ai';
// import { DynamicStar } from 'react-dynamic-star';
import { url } from '../../../components/Helpers/Constant';
import ProfileSidebarLayout from '../../../components/Layout/ProfileSidebarLayout';
import Meta from '../../../components/Meta/Meta';
import { useAuthContext } from '../../../contexts/AuthContextFile/AuthContext';
import { Ilocale } from '../../../PageTypes/commonType/commonType';
import { ImyReview } from '../../../PageTypes/ProfilePage/ProfileTypes';

const ProductReview = () => {
  const { user } = useAuthContext();
  const [myReview, setMyReview] = useState<ImyReview[]>([]);
  const { t } = useTranslation(['profile']);

  useEffect(() => {
    if (user.id) {
      fetch(`${url}/api/product/get/ratings/customer/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMyReview(data.data);
          }
        });
    }
  }, [user.id]);

  const handelReviewDelete = (id: number) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this Question?'
    );

    if (confirm) {
      fetch(`${url}/api/product/delete/rating/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMyReview((myReview) =>
              myReview.filter((review) => review.id !== id)
            );
            window.alert(data.msg);
          }
        });
    }
  };

  return (
    <ProfileSidebarLayout>
      <Meta title='Product review | ontheway' />
      <div className='mt-3 review'>
        {myReview.length ? (
          <div>
            <Accordion>
              {myReview.map((review) => {
                const {
                  date,
                  comment,
                  id,
                  product,
                  product_id,
                  rating,
                  rating_pic1,
                  rating_pic2,
                  rating_pic3,
                } = review;

                return (
                  <div key={id}>
                    <Accordion.Item eventKey={id.toString()} className='mb-2'>
                      <Accordion.Header>{product}</Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex justify-content-between '>
                          <div>
                            <Link
                              href={`/product/${product_id}`}
                              title='Click Here'>
                              <a className='fs-6 fw-bold text-main'>
                                {product}
                              </a>
                            </Link>
                            <div className='mt-3'>
                              {/* <DynamicStar
                                width={20}
                                height={25}
                                rating={rating}
                              /> */}
                            </div>
                            <div>
                              <p>Review : {comment}</p>
                              <p>Date: {date}</p>
                            </div>
                          </div>
                          <div>
                            <span>
                              <AiFillDelete
                                className='fs-5 text-danger pointer'
                                onClick={() => handelReviewDelete(id)}
                              />
                            </span>
                          </div>
                        </div>

                        {/* image show  */}
                        <div className='d-flex  align-items-center gap-2'>
                          <div>
                            {rating_pic1 && (
                              <Image
                                width={60}
                                height={60}
                                src={`${url}/get/image/rating/${rating_pic1}`}
                                alt=''
                              />
                            )}
                          </div>
                          <div>
                            {rating_pic2 && (
                              <Image
                                width={60}
                                height={60}
                                src={`${url}/get/image/rating/${rating_pic2}`}
                                alt=''
                              />
                            )}
                          </div>
                          <div>
                            {rating_pic3 && (
                              <Image
                                width={60}
                                height={60}
                                src={`${url}/get/image/rating/${rating_pic3}`}
                                alt=''
                              />
                            )}
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                );
              })}
            </Accordion>
          </div>
        ) : (
          <div className='text-center mt-5'>
            <p className='fs-4 font-exo fw-bold text-dark'>{t('noReview')}</p>
          </div>
        )}
      </div>
    </ProfileSidebarLayout>
  );
};

export default ProductReview;
export async function getServerSideProps({ locale }: Ilocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
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
}
