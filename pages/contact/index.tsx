import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { url } from '../../components/Helpers/Constant';
import Meta from '../../components/Meta/Meta';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import { IContactMessage } from '../../PageTypes/contactPage/contactTypes';

const ContactPage = () => {
  const [messageData, setMessageData] = useState<IContactMessage>({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [send, setSend] = useState(false);
  const { t } = useTranslation(['footer']);

  const handleSubmit = (e: any) => {
    const data: IContactMessage = {
      email: messageData.email,
      message: messageData.message,
      name: messageData.name,
      phone: messageData.phone,
    };
    fetch(`${url}/api/client/send/contact/msg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccess(data.message);
          setSend(true);
        } else {
          setError(data.message);
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <Meta title='Contact | Nowabenki Gonomukhi Foundation (NGF)' />

      <div className='contact-page py-5'>
        <Container>
          <Row>
            <Col className='mx-auto ' md={8} lg={5} xs={12}>
              <div className='pb-2'>
                <small className=''>{t('beAnEnterpreneur')}</small>
              </div>
              <h2 className='section-title d-flex mb-3'>{t('sendMessage')}</h2>
              {send ? (
                <>
                  <div className='my-5 '>
                    <div className='text-center'>
                      <Image
                        height={90}
                        width={90}
                        className=''
                        src='/assets/success-icon.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-success text-center mt-4 font-jost fw-bold'>
                      {success}
                    </h3>
                  </div>
                </>
              ) : (
                <form
                  className='d-flex flex-column'
                  onSubmit={(e) => handleSubmit(e)}
                  action=''
                >
                  <input
                    className='input-field'
                    type='text'
                    name='name'
                    onChange={(e) =>
                      setMessageData({ ...messageData, name: e.target.value })
                    }
                    placeholder={t('yourName')}
                    required
                  />
                  <input
                    onChange={(e) =>
                      setMessageData({ ...messageData, email: e.target.value })
                    }
                    className='input-field'
                    type='email'
                    name='email'
                    placeholder={t('Email')}
                    required
                  />
                  <input
                    onChange={(e) =>
                      setMessageData({ ...messageData, phone: e.target.value })
                    }
                    className='input-field'
                    type='number'
                    name='phone'
                    placeholder={t('phoneNo')}
                    required
                  />
                  <textarea
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        message: e.target.value,
                      })
                    }
                    className='input-field'
                    placeholder={t('message')}
                    name='message'
                    id=''
                    cols={10}
                    rows={5}
                    required
                  ></textarea>

                  <div className='my-2 text-center'>
                    <h6 className='text-danger'>{error}</h6>
                  </div>

                  <input
                    className='send-message-btn font-jost '
                    type='submit'
                    value={t('submitMessage')}
                  />
                </form>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;

export async function getStaticProps({ locale }: Ilocale) {
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
