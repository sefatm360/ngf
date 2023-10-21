import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import { AUTH_USER_SUCCESS, url } from '../Helpers/Constant';
import Image from 'next/image';

const EditProfileInfo = ({ show, handleClose }: any) => {
  const { register, handleSubmit } = useForm();
  const [profileImage, setProfileImage] = useState<string | Blob>('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const { user, dispatch } = useAuthContext();

  // destructure from user
  const { address, city, email, name, phone, post_code, id, photo } = user;
  const onSubmit = (data: any) => {
    setIsLoading(true);
    data.lat = null;
    data.lng = null;

    const formData = new FormData();
    Object.keys(data).forEach((item) => {
      formData.append(item, data[item]);
    });

    formData.append('photo', profileImage);

    fetch(`${url}/api/customer/update/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          data.id = id;
          data.photo = profileImage && result?.data?.photo;
          dispatch?.({ type: AUTH_USER_SUCCESS, payload: data });
          localStorage.setItem('__u_o', window.btoa(JSON.stringify(data)));
          setSuccess(result.data?.message);
          setIsLoading(false);
          setTimeout(function () {
            setSuccess('');
          }, 5000);
          handleClose();
        }
      });
  };

  const handelRemove = (img: any) => {
    if (img === 1) {
      setProfileImage('');
    }
  };
  return (
    <>
      <Modal className='edit-profile-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className='fund pt-3 mx-3'>
            <div className='row'>
              {/* <div className='col-lg-6'>
                <label>Phone Number</label>
                <input
                  {...register('phone')}
                  defaultValue={phone}
                  placeholder='Phone number'
                />
              </div> */}

              <div className='col-lg-6 col-12  col-md-6'>
                <label htmlFor='name'>Enter Name</label>
                <div className='input-group'>
                  <input
                    id='name'
                    {...register('name')}
                    defaultValue={name}
                    placeholder='Enter Name'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-12  col-md-6'>
                <label htmlFor='email'>Enter Email</label>
                <div className='input-group'>
                  <input
                    {...register('email')}
                    defaultValue={email}
                    placeholder='Enter email'
                  />
                </div>
              </div>

              <div className='col-lg-6 col-12 col-md-6'>
                <label htmlFor='address'>Address</label>
                <div className='input-group'>
                  <input
                    id='address'
                    {...register('address')}
                    defaultValue={address}
                    placeholder='Enter Address'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-12  col-md-6'>
                <label htmlFor='city'>Enter City</label>
                <div className='input-group d-block'>
                  <input
                    {...register('city')}
                    defaultValue={city}
                    placeholder='Enter City'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-12  col-md-6'>
                <label htmlFor='post-code'>Enter Post code</label>
                <div className='input-group'>
                  <input
                    {...register('post_code')}
                    defaultValue={post_code}
                    placeholder='Enter Post Code'
                  />
                </div>
              </div>
            </div>

            <p className='mt-3'>
              Upload profile Picture(click image to Remove)
            </p>
            <div className='d-flex mt-2 gap-2 align-items-center'>
              <div className='d-flex gap-2 '>
                <div>
                  <div className='position-relative  text-success '>
                    <label htmlFor='image' className='pointer'>
                      <div className='gig-up-image-input'>
                        <div className=' mt-2 '>
                          <Image
                            className=''
                            src='/assets/image-add-2.webp'
                            alt=''
                            height={70}
                            width={70}
                            objectFit='contain'
                          />
                        </div>
                      </div>
                      <input
                        className='d-none'
                        type='file'
                        id='image'
                        accept='jpg,.jpeg,.png'
                        onChange={(e: any) =>
                          e.target.files[0] &&
                          setProfileImage(e.target.files[0])
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                {profileImage ? (
                  <Image
                    className='pointer edit-profile-image'
                    onClick={() => handelRemove(1)}
                    width={150}
                    height={100}
                    src={URL.createObjectURL(profileImage as Blob)}
                    alt=''
                    objectFit='contain'
                  />
                ) : (
                  <Image
                    className='edit-profile-image'
                    width={150}
                    height={100}
                    src={`${url}/get/image/customers/${photo}`}
                    alt=''
                    objectFit='contain'
                  />
                )}
              </div>
            </div>

            {/* <p className='text-danger text-center'>{error}</p> */}
            <br />
            <div className='text-center'>
              {isLoading ? (
                <input
                  type='submit'
                  className='cmn-btn border-0 px-3 text-white dark-bg '
                  value='Please wait...'
                  disabled
                />
              ) : (
                <input
                  className='cmn-btn border-0 px-3 text-white  '
                  type='submit'
                  value='update'
                />
              )}
            </div>
          </form>
          <div>
            {success && <p className='text-success text-center'>{success}</p>}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfileInfo;
