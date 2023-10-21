import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';

import ShowCourse from '../../ShowCourse/ShowCourse';
import { Itraining } from './Types/TrainingType';

const Training = ({ allCourses }: any) => {
  const [upcoming, setUpcoming] = useState<Itraining[]>([]);
  const [finished, setFinished] = useState<Itraining[]>([]);
  const { t } = useTranslation(['home', 'common']);

  useEffect(() => {
    setUpcoming(
      allCourses?.filter((item: Itraining) => item.status === 'Upcoming')
    );
    setFinished(
      allCourses?.filter((item: Itraining) => item.status === 'Finished')
    );
  }, []);

  return (
    <>
      <div className='training-section py-5'>
        <Container>
          <div className='section-title-wrapper'>
            <h1 className='text-center section-title'>
              <span className='q-color '>Q</span>-{t('training')}
            </h1>
            <h1 className='section-title title-opacity'>
              <span className='q-color '>Q</span>-{t('training')}
            </h1>
          </div>
          {/* tabs for course status  */}

          <div className='mt-3 training-tab-wrapper'>
            <Tabs
              defaultActiveKey={upcoming.length > 0 ? 'upComing' : 'finished'}
              id='uncontrolled-tab-example'
              className='mb-3 justify-content-center training-tab'>
              <Tab eventKey='upComing' title={t('upComing')}>
                {upcoming.length ? (
                  <>
                    <Link href={`/training`}>
                      <a className='mt-5 d-block text-end '>
                        <span
                          style={{ fontSize: '13px' }}
                          className='text-decoration-underline text-secondary fw-semibold me-2'>
                          See all
                        </span>
                        <BsArrowRight />
                      </a>
                    </Link>
                    <Row md={3}>
                      {upcoming.slice(0, 3).map((course) => (
                        <ShowCourse key={course.id} course={course} />
                      ))}
                    </Row>
                  </>
                ) : (
                  <div className='text-center pt-2 '>
                    <p className=' fs-2 fw-bold'>{t('noCourse')}</p>
                  </div>
                )}
              </Tab>
              <Tab eventKey='finished' title={t('finished')}>
                {finished.length ? (
                  <>
                    <Link href='/training'>
                      <a className='mt-5 d-block text-end '>
                        <span
                          style={{ fontSize: '13px' }}
                          className='text-decoration-underline text-secondary fw-semibold me-2'>
                          {t('common:seeAll')}
                        </span>
                        <BsArrowRight />
                      </a>
                    </Link>
                    <Row md={3}>
                      {finished.slice(0, 3).map((course) => (
                        <ShowCourse key={course.id} course={course} />
                      ))}
                    </Row>
                  </>
                ) : (
                  <div className='text-center pt-2 '>
                    <p className=' fs-2 fw-bold'>{t('noCourse')}</p>
                  </div>
                )}
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Training;
