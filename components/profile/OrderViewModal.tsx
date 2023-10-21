import Link from 'next/link';
import React, { useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import PostProductReviewModal from './PostProductReviewModal';

const OrderViewModal = ({ modalShow, setModalShow, order }: any) => {
  const {
    order_id,
    order_date,
    delivery_address,
    total_payment,
    status,
    products,
  } = order;

  const [productId, setProductId] = useState<number | null>(null);

  // review modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (product_id: number) => {
    setProductId(product_id);
    setShow(true);
  };
  return (
    <div>
      <Modal
        size='lg'
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title className='' id='example-modal-sizes-title-lg'>
            Order Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='order-details-wrapper'>
              <div className='order-modal-info'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-semibold'>Order ID : </span>
                      <span>RRT-O{order_id}</span>
                    </div>
                    <div className='my-1'>
                      <span className='fw-semibold'>Order Date :</span>
                      <span> {order_date?.split('T')[0]}</span>
                    </div>
                    <div className=''>
                      <span className='fw-semibold'> Delivery Address :</span>
                      <span>{delivery_address}</span>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-semibold'>Delivery Address : </span>
                      <span> {delivery_address}</span>
                    </div>
                    <div className='my-1'>
                      <span className='fw-semibold'>Payment: </span>
                      <span>{total_payment}</span>
                    </div>
                    <div>
                      <span className='fw-semibold'>Status : </span>
                      <span>{status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h6 className='mt-3 mb-2 fw-bold'>
                  Total Products: {products?.length}
                </h6>

                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Product Category</th>
                      {status === 'Delivered' && <th>Review</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product: any) => {
                      const {
                        product_id,
                        product_name,
                        product_picture,
                        product_category,
                      } = product;

                      return (
                        <>
                          <tr>
                            <td>RRT-O{product_id}</td>
                            <td>
                              <Link href={`/product/${product_id}`}>
                                <a className='text-main'>{product_name}</a>
                              </Link>
                            </td>

                            <td>
                              <Link href={`/product/${product_category}`}>
                                <a className='text-main'> {product_category}</a>
                              </Link>
                            </td>
                            {status === 'Delivered' && (
                              <td onClick={() => handleShow(product_id)}>
                                <button className='reviewButton'>
                                  Leave A Review
                                </button>
                              </td>
                            )}
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* post review modal */}
      <PostProductReviewModal
        productId={productId}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export default OrderViewModal;
