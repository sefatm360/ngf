import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { url } from '../Helpers/Constant';
import Image from 'next/image';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};
const PostProductReviewModal = ({ productId, show, handleClose }: any) => {
  const { user } = useAuthContext();
  const { register, handleSubmit, reset } = useForm();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [ratingPic, setRatingPic] = useState<{
    ratingPic1: string | Blob;
    ratingPic2: string | Blob;
    ratingPic3: string | Blob;
  }>({
    ratingPic1: '',
    ratingPic2: '',
    ratingPic3: '',
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const stars = Array(5).fill(0);

  const onSubmit = (data: any) => {
    setLoading(true);
    data.rater = user.id;
    data.rating = hoverValue;
    data.product = productId;

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append('rating_pic1', ratingPic.ratingPic1);
    formData.append('rating_pic2', ratingPic.ratingPic2);
    formData.append('rating_pic3', ratingPic.ratingPic3);

    fetch(`${url}/api/product/add/rating`, {
      method: 'post',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage(data.msg);
          setRatingPic({ ratingPic1: '', ratingPic2: '', ratingPic3: '' });
          setLoading(false);
          reset();
        } else {
          setError('You already add Review');
          setLoading(false);
        }
      });
  };
  const handleClick = (value: any) => {
    setCurrentValue(value);
  };

  const handleRemovePic = (img: any) => {
    if (img === 1) {
      setRatingPic({ ...ratingPic, ratingPic1: '' });
    }
    if (img === 2) {
      setRatingPic({ ...ratingPic, ratingPic2: '' });
    }
    if (img === 3) {
      setRatingPic({ ...ratingPic, ratingPic3: '' });
    }
  };

  const handleMouseOver = (newHoverValue: any) => {
    setHoverValue(newHoverValue);
  };

  return (
    <Modal show={show} className='pb-5' onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Review Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <StarRating /> */}
        {message ? (
          <div className='mt-3 text-center'>
            <p className='text-success fw-bold'>{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    style={{
                      marginRight: 10,
                      cursor: 'pointer',
                    }}
                  />
                );
              })}
            </div>
            <textarea className=' w-100 h-25 my-3' {...register('comment')} />
            <div className='my-2'>
              <div className='d-flex'>
                <div>
                  {ratingPic.ratingPic1 ? (
                    <Image
                      onClick={() => handleRemovePic(1)}
                      width={80}
                      height={60}
                      src={URL.createObjectURL(ratingPic.ratingPic1 as Blob)}
                      alt=''
                    />
                  ) : (
                    <div className='position-relative  text-success '>
                      <label htmlFor='image' className='pointer'>
                        <div className='gig-up-image-input'>
                          <div className=' mt-2 '>
                            <Image
                              className=' pointer'
                              src='/assets/image-add.webp'
                              height={60}
                              width={60}
                              alt=''
                            />
                          </div>
                        </div>
                        <input
                          className='d-none'
                          type='file'
                          id='image'
                          // accept='.jpg, .png, .jpeg'
                          onChange={(e: any) =>
                            e.target.files[0] &&
                            setRatingPic({
                              ...ratingPic,
                              ratingPic1: e.target.files[0],
                            })
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>

                <div>
                  {ratingPic.ratingPic2 ? (
                    <Image
                      className='ms-2 '
                      onClick={() => handleRemovePic(2)}
                      width={80}
                      height={60}
                      src={URL.createObjectURL(ratingPic.ratingPic2 as Blob)}
                      alt=''
                    />
                  ) : (
                    <div className='position-relative  text-success '>
                      <label htmlFor='image' className='pointer'>
                        <div className='gig-up-image-input'>
                          <div className=' mt-2 '>
                            <Image
                              className=''
                              src='/assets/image-add.webp'
                              height={60}
                              width={60}
                              alt=''
                            />
                          </div>
                        </div>
                        <input
                          className='d-none '
                          type='file'
                          id='image'
                          // accept='.jpg, .png, .jpeg'
                          onChange={(e: any) =>
                            e.target.files[0] &&
                            setRatingPic({
                              ...ratingPic,
                              ratingPic2: e.target.files[0],
                            })
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>
                <div>
                  {ratingPic.ratingPic3 ? (
                    <Image
                      className='ms-2'
                      onClick={() => handleRemovePic(3)}
                      width={80}
                      height={60}
                      src={URL.createObjectURL(ratingPic.ratingPic3 as Blob)}
                      alt=''
                    />
                  ) : (
                    <div className='position-relative  text-success '>
                      <label htmlFor='image' className='pointer'>
                        <div className='gig-up-image-input'>
                          <div className=' mt-2 '>
                            <Image
                              className=''
                              src='/assets/image-add.webp'
                              height={60}
                              width={60}
                              alt=''
                            />
                          </div>
                        </div>
                        <input
                          className='d-none'
                          type='file'
                          id='image'
                          // accept='.jpg, .png, .jpeg'
                          onChange={(e: any) =>
                            e.target.files[0] &&
                            setRatingPic({
                              ...ratingPic,
                              ratingPic3: e.target.files[0],
                            })
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div className='mt-3 text-center'>
                <p className='text-danger fw-bold text-justify'>{error}</p>
              </div>
            </div>
            {loading ? (
              <input type='submit' className='cmn-btn border-0' />
            ) : (
              <input type='submit' className='cmn-btn border-0' disabled />
            )}
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PostProductReviewModal;
