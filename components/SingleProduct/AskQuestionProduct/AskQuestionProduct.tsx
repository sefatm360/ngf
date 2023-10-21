import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Pages from '../../Pagination/Pagination';
import Link from 'next/link';
import { url } from '../../Helpers/Constant';
import { IaskingProductProps, Iquestions } from '../Types/singleProductTypes';
import { useAuthContext } from '../../../contexts/AuthContextFile/AuthContext';
import { useTranslation } from 'react-i18next';

const AskQuestionProduct = ({ productId }: IaskingProductProps) => {
  const { user } = useAuthContext();
  const [allQuestion, setAllQuestion] = useState<Iquestions[]>([]);
  const [question, setQuestion] = useState<string>('');
  // const [message, setMessage] = useState('');
  const [totalQuestion, setTotalQuestion] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { t } = useTranslation(['products', 'login_reg']);

  const questionLimit = 5;
  useEffect(() => {
    fetch(
      `${url}/api/product-qa/get/all/product/${productId}?skip=0&limit=${questionLimit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAllQuestion(data.data);

          setTotalQuestion(data.total);
        }
      });
  }, [productId]);

  // post comment
  const submitQuestion = () => {
    const data = {
      product: productId,
      customer: user.id,
      question: question,
    };

    fetch(`${url}/api/product-qa/ask/question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const date = new Date();
          // setMessage('Question Add Successfuly');
          setAllQuestion([
            {
              id: data.data.id,
              answer: null,
              customer_name: user.name,
              question,
              question_date: date.toLocaleString(),
            },
            ...allQuestion,
          ]);
          setQuestion('');
          // setTimeout(() => {
          //   setMessage('');
          // }, 7000);
        }
      });
  };

  // pangination for question
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    fetch(
      `${url}/api/product-qa/get/all/product/${productId}?skip=${
        (pageNumber - 1) * questionLimit
      }&limit=${questionLimit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAllQuestion(data.data);
        }
      });
  };

  return (
    <div className='mt-3 question-card mb-5'>
      <h5 className='rating-wrapper mb-3 font-jost'>
        {t('questionsAboutThisProduct')}
      </h5>
      {user.id ? (
        <div className='d-flex align-items-center  '>
          <input
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && submitQuestion();
            }}
            className='w-50 w-md-75 w-lg-75 ask-input'
            type='text '
          />

          <div onClick={submitQuestion} className='ask-question-btn pointer'>
            <p>Ask Question</p>
          </div>
        </div>
      ) : (
        <>
          <div>
            <Link className=' text-decoration-none' href='/login'>
              <a className='text-main fw-semibold'>
                {t('login_reg:loginOrRegister')}{' '}
              </a>
            </Link>

            {t('toAskQuestion')}
          </div>
        </>
      )}

      {/* <div className='my-3'>
        <h4 className='text-success text-center'>{message}</h4>
      </div> */}
      <div>
        <div className=''>
          {allQuestion.length ? (
            <div className=''>
              {allQuestion.map((singleQuestion) => {
                const { customer_name, question, answer, id } = singleQuestion;
                return (
                  <div key={id} className='mt-3 pb-3 question-stack'>
                    <div className='d-flex align-items-start mb-3  gap-4'>
                      <h3 className='question'>Q</h3>
                      <div className=''>
                        <p>{question}</p>
                        <small>- {customer_name}</small>
                      </div>
                    </div>
                    <div className='d-flex align-items-start gap-4'>
                      <div>
                        <h3 className='answer'>A</h3>
                      </div>
                      <div>
                        {answer ? (
                          <p>{answer}</p>
                        ) : (
                          <small>{t('noAnswer')}</small>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className='mb-5 mt-3 fw-bold text-title'>{t('noQuestion')}</p>
          )}
        </div>
        {totalQuestion > 5 && (
          <div className='d-flex justify-content-center mt-4 mt-md-none'>
            <Pages
              totalItem={totalQuestion}
              currentPage={currentPage}
              paginate={paginate}
              Limit={questionLimit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQuestionProduct;
