import React from 'react';
import ContentLoader from 'react-content-loader';
import { HashLoader } from 'react-spinners';
const Spinner = () => {
  return (
    <div className='d-flex align-items-center justify-content-center my-4'>
      <HashLoader color='#E9313A' loading={true} size={50} />
    </div>
  );
};

export const QueenLoader = (props: any) => {
  return (
    <div>
      <div className='d-md-block d-none'>
        <ContentLoader
          width='100%'
          height='100%'
          viewBox='0 0 360 100'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}>
          <circle cx='46' cy='35' r='23' />
          <rect x='32' y='65' rx='3' ry='3' width='30' height='3' />
          <rect x='34' y='75' rx='5' ry='5' width='25' height='10' />

          <circle cx='137' cy='35' r='23' />
          <rect x='122' y='65' rx='3' ry='3' width='30' height='3' />
          <rect x='124' y='75' rx='5' ry='5' width='25' height='10' />

          <circle cx='228' cy='35' r='23' />
          <rect x='212' y='65' rx='3' ry='3' width='30' height='3' />
          <rect x='215' y='75' rx='5' ry='5' width='25' height='10' />

          <circle cx='320' cy='35' r='23' />
          <rect x='305' y='65' rx='3' ry='3' width='30' height='3' />
          <rect x='307' y='75' rx='5' ry='5' width='25' height='10' />
        </ContentLoader>
      </div>
      <div className='d-block d-md-none'>
        <ContentLoader
          width='100%'
          height='100%'
          viewBox='0 0 100 100'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}>
          <circle cx='46' cy='35' r='23' />
          <rect x='32' y='65' rx='3' ry='3' width='30' height='3' />
          <rect x='34' y='75' rx='5' ry='5' width='25' height='10' />
        </ContentLoader>
      </div>
    </div>
  );
};

export const ProductLoader = (props: any) => {
  return (
    <div>
      <div className='d-md-block d-none'>
        <ContentLoader
          viewBox='0 0 490 120'
          height='100%'
          width='100%'
          {...props}>
          <rect x='0' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='0' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='0' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='65' y='92' rx='0' ry='15' width='25' height='12' />

          <rect x='100' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='100' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='100' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='165' y='92' rx='0' ry='15' width='25' height='12' />

          <rect x='200' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='200' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='200' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='265' y='92' rx='0' ry='15' width='25' height='12' />

          <rect x='300' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='300' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='300' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='365' y='92' rx='0' ry='15' width='25' height='12' />

          <rect x='400' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='400' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='400' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='465' y='92' rx='0' ry='15' width='25' height='12' />
        </ContentLoader>
      </div>
      <div className='d-block d-md-none'>
        <ContentLoader
          viewBox='0 0 190 120'
          height='100%'
          width='100%'
          {...props}>
          <rect x='0' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='0' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='0' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='65' y='92' rx='0' ry='15' width='25' height='12' />

          <rect x='100' y='3' rx='3' ry='3' width='90' height='70' />
          <rect x='100' y='78' rx='0' ry='0' width='80' height='7' />
          <rect x='100' y='94' rx='0' ry='0' width='25' height='10' />
          <rect x='165' y='92' rx='0' ry='15' width='25' height='12' />
        </ContentLoader>
      </div>
    </div>
  );
};

export const SingleProductLoader = (props: any) => {
  return (
    <div>
      <div className='d-md-block d-none'>
        <ContentLoader
          viewBox='0 0 800 400'
          height='100%'
          width='100%'
          {...props}>
          <rect x='94' y='18' rx='0' ry='0' width='200' height='250' />
          <rect x='200' y='290' rx='0' ry='0' width='50' height='40' />
          <rect x='140' y='290' rx='0' ry='0' width='50' height='40' />

          <rect x='440' y='18' rx='0' ry='0' width='180' height='6' />

          <rect x='440' y='35' rx='0' ry='0' width='250' height='20' />

          <rect x='440' y='68' rx='0' ry='0' width='70' height='6' />
          <rect x='440' y='78' rx='0' ry='0' width='250' height='6' />
          <rect x='440' y='88' rx='0' ry='0' width='250' height='6' />
          <rect x='440' y='98' rx='0' ry='0' width='250' height='6' />
          <rect x='440' y='108' rx='0' ry='0' width='250' height='6' />

          <rect x='440' y='130' rx='0' ry='0' width='80' height='30' />

          <rect x='440' y='175' rx='0' ry='0' width='150' height='25' />

          <circle cx='447' cy='219' r='7' />
          <rect x='460' y='214' rx='5' ry='5' width='220' height='10' />
          <circle cx='447' cy='249' r='7' />
          <rect x='460' y='244' rx='5' ry='5' width='220' height='10' />
        </ContentLoader>
      </div>
      <div className='d-md-none d-block'>
        <ContentLoader
          viewBox='0 0 100 400'
          height='100%'
          width='100%'
          {...props}>
          <rect x='10' y='0' rx='0' ry='0' width='80' height='100' />
          <rect x='25' y='105' rx='0' ry='0' width='20' height='20' />
          <rect x='55' y='105' rx='0' ry='0' width='20' height='20' />

          <rect x='3' y='130' rx='0' ry='0' width='50' height='6' />
          <rect x='3' y='140' rx='0' ry='0' width='80' height='10' />
          <rect x='3' y='155' rx='0' ry='0' width='40' height='7' />

          <circle cx='5' cy='167' r='3' />
          <rect x='10' y='165' rx='3' ry='3' width='80' height='5' />

          <circle cx='5' cy='175' r='3' />
          <rect x='10' y='165' rx='3' ry='3' width='80' height='5' />

          <circle cx='5' cy='167' r='3' />
          <rect x='10' y='172' rx='3' ry='3' width='80' height='5' />
        </ContentLoader>
      </div>
    </div>
  );
};

export const SingleQueenLoader = (props: any) => {
  return (
    <div>
      <div>
        <ContentLoader
          width='100%'
          height='100%'
          viewBox='0 0 100 80'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}>
          <circle cx='46' cy='35' r='23' />
          <rect x='30' y='65' rx='3' ry='3' width='35' height='3' />
          <rect x='25' y='72' rx='3' ry='3' width='43' height='3' />
        </ContentLoader>
      </div>
    </div>
  );
};

export const ImageLoader = (props: any) => {
  return (
    <div>
      <div>
        <ContentLoader
          width='100%'
          height='100%'
          viewBox='0 0 100 80'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}>
          <rect x='0' y='0' rx='5' ry='1' width='100' height='100' />
        </ContentLoader>
      </div>
    </div>
  );
};

// export const DivLoader = (props: any) => {
//   return (
//     <div>
//       <ContentLoader
//         animate={true}
//         width='100%'
//         height='100%'
//         viewBox='0 0 380 70'
//         backgroundColor='#3333'
//         foregroundColor='#fff'
//       >
//         <rect x='17' y='20' rx='0' ry='50' width='90%' height='13' />
//         <rect x='17' y='50' rx='0' ry='60' width='90%' height='13' />
//       </ContentLoader>
//     </div>
//   );
// };
export default Spinner;
