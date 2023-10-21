import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { url } from '../../Helpers/Constant';
import { IcategoryProps, InewData } from './Types/DealsType';
import ShowProducts from '../../ShowProducts/ShowProducts';

const DailyDealsBanner = ({ category }: IcategoryProps) => {
  const { t } = useTranslation(['home']);
  const [productData, setProductData] = useState<InewData[]>([]);
  const { deal, data, banner } = category;
  useEffect(() => {
    setProductData(data);
  }, [data]);

  return (
    <>
      <div className=''>
        <div className='daily-deals-image-container'>
          <Image
            className='img-fluid cat-banner'
            src={`${url}/get/image/daily-deals/${banner}`}
            alt=''
            layout='fill'
          />
        </div>
        <div className='d-flex justify-content-between align-items-center rounded-1 category-container  py-4 my-4 '>
          <h5 className='category-title'>{t(`${deal.name.toString()}`)}</h5>
          <Link href={deal.route}>
            <a className='more-btn'>
              {t('more')}
              <BsArrowRight />
            </a>
          </Link>
        </div>

        <Row md={4} lg={5} xs={2} className='gx-2 gx-md-3 gx-lg-4'>
          {productData.map((product) => (
            <ShowProducts key={product['id']} product={product} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default DailyDealsBanner;
