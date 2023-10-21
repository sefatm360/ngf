import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiFillDelete } from 'react-icons/ai';
import { url } from '../../../components/Helpers/Constant';
import ProfileSidebarLayout from '../../../components/Layout/ProfileSidebarLayout';
import Meta from '../../../components/Meta/Meta';
import { useAuthContext } from '../../../contexts/AuthContextFile/AuthContext';
import { Ilocale } from '../../../PageTypes/commonType/commonType';
import { IallQuestion } from '../../../PageTypes/ProfilePage/ProfileTypes';

const ProductQuestionAnswer = () => {
  const { user } = useAuthContext();
  const [allQuestion, setAllQuestion] = useState<IallQuestion[]>([]);
  const [skip, setSkip] = useState<number>(5);
  const { t } = useTranslation(['profile']);

  useEffect(() => {
    fetch(`${url}/api/product-qa/get/all/customer/${user.id}?skip=0&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAllQuestion(data.data);
        }
      });
  }, [user.id]);

  // load more question
  const loadMoreQuestion = () => {
    if (user.id) {
      fetch(
        `${url}/api/product-qa/get/all/customer/${user.id}?skip=${skip}&limit=5`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAllQuestion([...allQuestion, ...data.data]);
          }
        });
      setSkip(skip + 5);
    }
  };

  // delete question
  const handelDeletedQuestion = (id: number) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this Question?'
    );
    if (confirm) {
      fetch(`${url}/api/product-qa/delete/question/${id}/customer`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAllQuestion((allQuestion) =>
              allQuestion.filter((question) => question.id !== id)
            );
            window.alert(data.msg);
          }
        });
    }
  };

  return (
    <ProfileSidebarLayout>
      <Meta title='Question answer | ontheway' />
      <div>
        {/* <h5 className=' section-title d-flex'>
          My All Question About Products
        </h5> */}
        <div className='mt-2'>
          {allQuestion.length ? (
            <>
              <Accordion>
                {allQuestion.map((singleQuestion) => {
                  const {
                    answer,
                    id,
                    product,
                    product_name,
                    question,
                    question_date,
                  } = singleQuestion;
                  return (
                    <div key={id} className='mb-2'>
                      <Accordion.Item eventKey={id.toString()}>
                        <Accordion.Header>{product_name}</Accordion.Header>
                        <Accordion.Body>
                          <div className='d-flex justify-content-between'>
                            <div>
                              <div>
                                <Link href={`/product/${product}`}>
                                  <a className='fs-6 fw-bold text-main'>
                                    {product_name}
                                  </a>
                                </Link>
                              </div>
                              <p className='mt-3'>Question: {question}</p>
                              <p className='py-1'>Answer: {answer}</p>
                              <small>Date: {question_date}</small>
                            </div>
                            <div>
                              {/* <button className='deleted-button'>
                                Deleted
                              </button> */}

                              <span>
                                <AiFillDelete
                                  className='fs-5 text-danger pointer'
                                  onClick={() => handelDeletedQuestion(id)}
                                />
                              </span>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                  );
                })}
              </Accordion>

              <div className='text-center mt-3'>
                <button className='cmn-dark-btn' onClick={loadMoreQuestion}>
                  Load more
                </button>
              </div>
            </>
          ) : (
            <>
              <p className='fs-4 fw-bold text-dark font-exo mb-5 text-center'>
                {t('noQuestion')}
              </p>
            </>
          )}
        </div>
      </div>
    </ProfileSidebarLayout>
  );
};

export default ProductQuestionAnswer;
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
