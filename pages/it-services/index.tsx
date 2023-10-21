import { GetStaticProps } from 'next';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ShowItService from '../../components/ShowItService/ShowItService';
// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import { IitServiceProps } from '../../PageTypes/it-services/itServicesTypes';
import Meta from '../../components/Meta/Meta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ItService = ({ data }: IitServiceProps) => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Meta title='IT Services | Nowabenki Gonomukhi Foundation (NGF)' />
      {/* <div className='it-services-section py-5'>
        <Container>
          <div className='my-3'>
            <h1 className='section-title'>{t('itServices')}</h1>
            <Row md={2} lg={3} xs={1}>
              {data?.map((service) => (
                <ShowItService key={service.name} service={service} />
              ))}
            </Row>
          </div>
        </Container>
      </div> */}
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'itServices.json');
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  // const data = await res.json();

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
      data,
    },
  };
};

export default ItService;
