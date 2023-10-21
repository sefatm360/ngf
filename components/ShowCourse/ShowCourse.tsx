import React from 'react';
import { Badge, Col } from 'react-bootstrap';
import { FcCalendar } from 'react-icons/fc';
import { useState } from 'react';
import Image from 'next/image';
import { url } from '../Helpers/Constant';
import { IshowCoursProps } from '../HomeComponent/Training/Types/TrainingType';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const ShowCourse = ({ course }: IshowCoursProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const {
    title,
    details,
    trainer_name,
    thumbnail,
    training_date,
    trainer_dp,
    status,
    institute,
    id,
  } = course;

  return (
    <Col lg={4} md={6} className='mx-auto'>
      <div className='course-card my-3 my-md-3 my-lg-3  '>
        <div>
          <span
            className='text-black text-decoration-none'
            style={{
              width: '100%',
              position: 'relative',
              display: 'block',
              height: '300px',
            }}>
            <Image
              loading='lazy'
              className='course-cover-img img-fluid '
              src={`${url}/get/image/training_thumbnail/${thumbnail}`}
              alt=''
              layout='fill'
            />
          </span>

          <div className='px-3 py-2 d-block'>
            <span className='d-flex  align-items-center justify-content-between pt-2'>
              <div>
                <h4 className='fw-bold'>{title}</h4>
              </div>
              <div>
                <Image
                  loading='lazy'
                  className='gig-card-trainer-img border img-fluid rounded'
                  width={50}
                  height={50}
                  src={`${url}/get/image/training_trainer_files/${trainer_dp}`}
                  alt=''
                />
              </div>
            </span>
            <div>
              <div>
                <p className='course-title py-2'>{title}</p>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex  align-items-center justify-content-between'>
                  <FcCalendar className='text-danger fs-5 me-2' />
                  <p className='text-dark course-date'>
                    {training_date.split('T')[0]}
                  </p>
                </div>
                <div>
                  <h6 className='py-2'>
                    {/* cousrse status color  */}
                    {status === 'Upcoming' && (
                      <span className='mx-3 '>
                        <Badge bg='info'>{status}</Badge>
                      </span>
                    )}
                    {status === 'Finished' && (
                      <span className=' mx-3 ' style={{ color: '#010b80' }}>
                        <Badge bg='success'>{status}</Badge>
                      </span>
                    )}
                  </h6>
                </div>
              </div>
            </div>
            <div className=''>
              {showDetails ? (
                <>
                  <small className='training-description d-block mt-2'>
                    {details.slice(0, 30)}..
                  </small>
                </>
              ) : (
                <>
                  <div>
                    <h5 className='py-3 institute-name'>
                      <span className='fw-bold'>Institute:</span> {institute}
                    </h5>
                  </div>
                  <p className='training-description'>{details}</p>
                </>
              )}
              {status === 'Upcoming' && (
                <Link href={`training/${id}`}>
                  <a className='my-2 d-block'>
                    <small className=' text-secondary'>
                      Become a trainee or trainer
                    </small>
                    <span>
                      <BsArrowRight className='ms-2' />
                    </span>
                  </a>
                </Link>
              )}
            </div>

            <div className='d-flex align-items-center pt-2 pb-2 course-card-read-more gap-2'>
              <h5
                onClick={() => setShowDetails(!showDetails)}
                className='fw-bold pointer read-more-btn'>
                {showDetails ? 'READ MORE' : 'READ LESS'}
              </h5>
              <Image
                loading='lazy'
                width={18}
                height={18}
                src='/assets/read-more.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ShowCourse;
