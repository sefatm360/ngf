import React, { useEffect, useState } from 'react';
import { Accordion, Badge, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../../../contexts/AuthContextFile/AuthContext';
import { url } from '../../../components/Helpers/Constant';
import {
  Iorderss,
  IprofileOrder,
} from '../../../PageTypes/ProfilePage/ProfileTypes';
import ProfileSidebarLayout from '../../../components/Layout/ProfileSidebarLayout';
import Meta from '../../../components/Meta/Meta';
import { Ilocale } from '../../../PageTypes/commonType/commonType';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ShowOrderTable from '../../../components/profile/ShowOrderTable';
import PostProductReviewModal from '../../../components/profile/PostProductReviewModal';

const MyOrder = () => {
  const { user } = useAuthContext();
  const { id } = user;
  const [orders, setOrders] = useState<IprofileOrder[]>([]);
  const { t } = useTranslation(['profile']);
  const [productId, setProductId] = useState<null | Number>(null);

  // review modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (product_id: any) => {
    setProductId(product_id);
    setShow(true);
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/api/orders/get/all/customer/${id}/all`)
        .then((res) => {
          setOrders(res.data.data);
        })
        .catch(() => {
          // setFetching(false);
        });
    }
  }, [id]);

  const orderss: Iorderss[] = orders.reduce((acc: Iorderss[], curr: any) => {
    let pushed = true;

    const newOrder = {
      order_id: curr.order_id,
      delivery_address: curr.delivery_address,
      order_date: curr.order_date,
      total_payment: curr.price,
      canceled: curr.canceled,
      delivered: curr.delivered,
      status: curr.status,
      products: [curr],
    };

    if (acc.length === 0) {
      acc.push(newOrder);
      pushed = false;
    } else {
      const oId = curr.order_id;

      for (const item of acc) {
        if (item.order_id === oId) {
          item.total_payment = item.total_payment + curr.price;
          item.products.push(curr);
          pushed = false;
        }
      }
    }
    if (pushed) {
      acc.push(newOrder);
    }

    return acc;
  }, []);

  const pendingOrders: Iorderss[] = [];
  const deliveredOrders: Iorderss[] = [];

  if (orderss.length) {
    orderss.filter((pi) => {
      if (pi.status === 'Pending') {
        pendingOrders.push(pi);
      } else if (pi.status === 'Delivered') {
        deliveredOrders.push(pi);
      }
    });
  }

  // check user already give review

  // useEffect(() => {
  //   fetch(`${url}//api/product/check/rating/680/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <ProfileSidebarLayout>
      <Meta title='My order | ontheway' />
      <div>
        <div className='customer-order-wrapper mt-4 mt-md-0'>
          {/* <h3 className='fw-bold section-title d-flex'>{t('orders')}</h3> */}

          <div className='mt-4'>
            <Tabs
              defaultActiveKey='all'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab eventKey='all' title={t('allOrders')}>
                <div>
                  <Accordion className='orders'>
                    {orderss?.reverse().map((order) => {
                      const {
                        order_id,
                        status,
                        delivery_address,
                        order_date,
                        total_payment,
                        products,
                      } = order;

                      return (
                        <Accordion.Item
                          key={order_id}
                          eventKey={order_id.toString()}
                          className='mb-2'
                        >
                          <Accordion.Header className=''>
                            <div className='me-4 accordion-header-title '>
                              <span className='fw-semibold'>
                                {t('orderId')}:
                              </span>
                              <span> RRT-O{order_id}</span>
                            </div>

                            {status === 'Pending' && (
                              <Badge bg='warning' text='white'>
                                {status}
                              </Badge>
                            )}
                            {status === 'Delivered' && (
                              <Badge bg='success' text='white'>
                                {status}
                              </Badge>
                            )}
                            {status === 'Approved' && (
                              <Badge bg='info' text='white'>
                                {status}
                              </Badge>
                            )}
                            {status === 'Rejected' && (
                              <Badge bg='danger' text='white'>
                                {status}
                              </Badge>
                            )}
                            {status === 'Shipped' && (
                              <Badge bg='dark' text='white'>
                                {status}
                              </Badge>
                            )}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className='d-flex justify-content-between'>
                              <div>
                                <p>
                                  {t('orderDate')} : {order_date.split('T')[0]}
                                </p>
                                <p className='my-2'>
                                  {t('payment')} : &#2547; {total_payment}
                                </p>
                                <p>
                                  {t('deliveryAddress')} : {delivery_address}
                                </p>
                              </div>
                              {/* <div>
                                <Button variant='danger'>Cancel</Button>
                              </div> */}
                            </div>
                            <hr />
                            <div>
                              <table className='w-100'>
                                <tbody>
                                  {products.map((product) => (
                                    <ShowOrderTable
                                      product={product}
                                      t={t}
                                      onchange={product.product_id}
                                      key={product.product_id}
                                      handleShow={handleShow}
                                    />
                                  ))}
                                </tbody>
                              </table>

                              {/* {status === 'Delivered' && ( */}

                              {/* )} */}
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>

                <div className='my-order-wrapper'>
                  <div className='single-order'></div>
                </div>
              </Tab>

              <Tab eventKey='pending' title={t('pending')}>
                <div>
                  <Accordion className='orders'>
                    {pendingOrders?.reverse().map((order) => {
                      const {
                        order_id,
                        status,
                        delivery_address,
                        order_date,
                        total_payment,
                        products,
                      } = order;

                      return (
                        <Accordion.Item
                          key={order_id}
                          eventKey={order_id.toString()}
                          className='mb-2'
                        >
                          <Accordion.Header className=''>
                            <div className='me-4 accordion-header-title '>
                              <span className='fw-semibold'>
                                {t('orderId')}:
                              </span>
                              <span> RRT-O{order_id}</span>
                            </div>

                            <Badge bg='warning' text='white'>
                              {status}
                            </Badge>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className='d-flex justify-content-between'>
                              <div>
                                <p>
                                  {t('orderDate')} : {order_date.split('T')[0]}
                                </p>
                                <p className='my-2'>
                                  {t('payment')} : &#2547; {total_payment}
                                </p>
                                <p>
                                  {t('deliveryAddress')} : {delivery_address}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div>
                              <table className='w-100'>
                                <tbody>
                                  {products.map((product) => (
                                    <ShowOrderTable
                                      product={product}
                                      t={t}
                                      onchange={product.product_id}
                                      key={product.product_id}
                                      handleShow={handleShow}
                                    />
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </Tab>
              <Tab eventKey='delivered' title={t('delivered')}>
                <div>
                  <Accordion className='orders'>
                    {deliveredOrders?.reverse().map((order) => {
                      const {
                        order_id,
                        status,
                        delivery_address,
                        order_date,
                        total_payment,
                        products,
                      } = order;

                      return (
                        <Accordion.Item
                          key={order_id}
                          eventKey={order_id.toString()}
                          className='mb-2'
                        >
                          <Accordion.Header className=''>
                            <div className='me-4 accordion-header-title '>
                              <span className='fw-semibold'>
                                {t('orderId')}:
                              </span>
                              <span> RRT-O{order_id}</span>
                            </div>

                            <Badge bg='success' text='white'>
                              {status}
                            </Badge>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className='d-flex justify-content-between'>
                              <div>
                                <p>
                                  {t('orderDate')} : {order_date.split('T')[0]}
                                </p>
                                <p className='my-2'>
                                  {t('payment')} : &#2547; {total_payment}
                                </p>
                                <p>
                                  {t('deliveryAddress')} : {delivery_address}
                                </p>
                              </div>
                              {/* <div>
                                <Button variant='danger'>Cancel</Button>
                              </div> */}
                            </div>
                            <hr />
                            <div>
                              <table className='w-100'>
                                <tbody>
                                  {products.map((product) => (
                                    <ShowOrderTable
                                      product={product}
                                      t={t}
                                      onchange={product.product_id}
                                      key={product.product_id}
                                      handleShow={handleShow}
                                    />
                                  ))}
                                </tbody>
                              </table>

                              {/* {status === 'Delivered' && ( */}

                              {/* )} */}
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* modal for view */}
        {/* 
        <OrderViewModal
          order={modalData}
          modalShow={modalShow}
          setModalShow={setModalShow}
        /> */}

        <PostProductReviewModal
          productId={productId}
          show={show}
          handleClose={handleClose}
        />
      </div>
    </ProfileSidebarLayout>
  );
};

export default MyOrder;
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
