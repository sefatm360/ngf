import axios from 'axios';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../../components/Helpers/Constant';
import { Itraining } from '../../components/HomeComponent/Training/Types/TrainingType';
import Meta from '../../components/Meta/Meta';
import ShowCourse from '../../components/ShowCourse/ShowCourse';

const TrainingSection = ({ upcomingCourse, finishedCourse }: any) => {
  const [upcoming, setUpcoming] = useState<Itraining[]>(upcomingCourse);
  const [finished, setFinished] = useState<Itraining[]>(finishedCourse);

  const { t } = useTranslation(['home']);

  useEffect(() => { }, []);

  return (
    <>
      <Meta title='Training | on the way' />
      <div className='training-page-section py-5'>
        <Container>
          <div className=''>
            <div>
              <h1 className='section-title d-flex'>{t('upComing')}</h1>

              {upcoming.length ? (
                <Row md={3}>
                  {upcoming.map((course) => (
                    <ShowCourse key={course.id} course={course} />
                  ))}
                </Row>
              ) : (
                <div className='text-center pt-2 '>
                  <p className=' fs-2 fw-bold'>{t('noCourse')}</p>
                </div>
              )}
            </div>

            <div className='mt-5'>
              <h1 className='section-title d-flex'>{t('finished')}</h1>

              {finished.length ? (
                <Row md={3}>
                  {finished.map((course) => (
                    <ShowCourse key={course.id} course={course} />
                  ))}
                </Row>
              ) : (
                <div className='text-center pt-2 '>
                  <p className=' fs-2 fw-bold'>{t('noCourse')}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TrainingSection;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let upcomingCourse;
  let finishedCourse;

  try {
    // upcoming
    await axios
      .get(
        `${url}/otw-training/api/training/get/all/queen-app/by-status/Upcoming?limit=200&skip=0`
      )
      .then((data) => {
        if (data.data.data) {
          upcomingCourse = data.data.data;
        }
      });

    // finished
    await axios
      .get(
        `${url}/otw-training/api/training/get/all/queen-app/by-status/Finished?limit=200&skip=0`
      )
      .then((data) => {
        finishedCourse = data.data.data;
      });
  } catch (error) {
  }

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
      upcomingCourse,
      finishedCourse,
    },
  };
};
