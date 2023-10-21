import Image from 'next/image';
import Link from 'next/link';
import { url } from '../Helpers/Constant';

const ShowOrderTable = ({ product, t, handleShow }: any) => {
  const { product_name, product_id, product_picture, quantity, status } =
    product;
  //
  return (
    <>
      <tr key={product_id} className='order-product-bottom'>
        <td>
          <Image
            src={`${url}/get/image/products/${product_picture}`}
            alt=''
            width={50}
            height={50}
            objectFit='contain'
          />
        </td>
        <td>
          <Link href={`/product/${product_id}`}>
            <a>{product_name}</a>
          </Link>
        </td>
        <td>
          {t('quantity')} : {quantity}{' '}
        </td>

        {status === 'Delivered' && (
          <td onClick={() => handleShow(product_id)}>
            <button className='reviewButton border-0 cmn-btn'>
              Leave A Review
            </button>
          </td>
        )}
      </tr>
    </>
  );
};

export default ShowOrderTable;
