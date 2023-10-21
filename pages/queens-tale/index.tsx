import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Ilocale } from '../../PageTypes/commonType/commonType';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import { Page, PageCover } from '../../components/queensTale/TaleComponent';
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta/Meta';

const QueensTale = () => {
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(80);
  const book = useRef<any>();
  const { t } = useTranslation(['home']);
  const FlipBook = HTMLFlipBook as any;

  const onChangeStateFunc = () => {};

  const onchangeOrientaion = () => {};
  const onPage = (e: any) => {
    setPage(e.data);
  };
  const onFlip = useCallback((e: any) => {
    setPage(e.data);
  }, []);

  useEffect(() => {
    // setTotalPage(book.current?.pageFlip()?.getPageCount());
  }, []);

  return (
    <div>
      <Meta title='Queens Tale | Nowabenki Gonomukhi Foundation (NGF)' />
      <section className='queens-tale-section'>
        <Container className='my-5 '>
          <div className='overflow-hidden'>
            <FlipBook
              size='stretch'
              drawShadow={true}
              ref={book}
              width={700}
              height={720}
              onFlip={onFlip}
              showCover={true}
              maxShadowOpacity={0.5}
              autoSize={true}
              mobileScrollSupport={true}
              className='demo-book'
            >
              {/* <PageCover>
              <Image src={'/assets/queensTale/1.jpg'} layout='fill' />
            </PageCover> */}

              <Page number={1}>
                <Image src={'/assets/queensTale/1.jpg'} layout='fill' />
              </Page>

              <Page number={2}>
                <Image src={'/assets/queensTale/2.jpg'} layout='fill' />
              </Page>
              <Page number={3}>
                <Image src={'/assets/queensTale/3.jpg'} layout='fill' />
              </Page>
              <Page number={4}>
                <Image src={'/assets/queensTale/4.jpg'} layout='fill' />
              </Page>
              <Page number={5}>
                <Image src={'/assets/queensTale/5.jpg'} layout='fill' />
              </Page>
              <Page number={6}>
                <Image src={'/assets/queensTale/6.jpg'} layout='fill' />
              </Page>
              <Page number={7}>
                <Image src={'/assets/queensTale/7.jpg'} layout='fill' />
              </Page>
              <Page number={8}>
                <Image src={'/assets/queensTale/8.jpg'} layout='fill' />
              </Page>
              <Page number={9}>
                <Image src={'/assets/queensTale/9.jpg'} layout='fill' />
              </Page>
              <Page number={10}>
                <Image src={'/assets/queensTale/10.jpg'} layout='fill' />
              </Page>
              <Page number={11}>
                <Image src={'/assets/queensTale/11.jpg'} layout='fill' />
              </Page>
              <Page number={12}>
                <Image src={'/assets/queensTale/12.jpg'} layout='fill' />
              </Page>
              <Page number={13}>
                <Image src={'/assets/queensTale/13.jpg'} layout='fill' />
              </Page>
              <Page number={14}>
                <Image src={'/assets/queensTale/14.jpg'} layout='fill' />
              </Page>
              <Page number={15}>
                <Image src={'/assets/queensTale/15.jpg'} layout='fill' />
              </Page>
              <Page number={16}>
                <Image src={'/assets/queensTale/16.jpg'} layout='fill' />
              </Page>
              <Page number={17}>
                <Image src={'/assets/queensTale/17.jpg'} layout='fill' />
              </Page>
              <Page number={18}>
                <Image src={'/assets/queensTale/18.jpg'} layout='fill' />
              </Page>
              <Page number={19}>
                <Image src={'/assets/queensTale/19.jpg'} layout='fill' />
              </Page>
              <Page number={20}>
                <Image src={'/assets/queensTale/20.jpg'} layout='fill' />
              </Page>
              <Page number={21}>
                <Image src={'/assets/queensTale/21.jpg'} layout='fill' />
              </Page>
              <Page number={22}>
                <Image src={'/assets/queensTale/22.jpg'} layout='fill' />
              </Page>
              <Page number={23}>
                <Image src={'/assets/queensTale/23.jpg'} layout='fill' />
              </Page>
              <Page number={24}>
                <Image src={'/assets/queensTale/24.jpg'} layout='fill' />
              </Page>
              <Page number={25}>
                <Image src={'/assets/queensTale/25.jpg'} layout='fill' />
              </Page>
              <Page number={26}>
                <Image src={'/assets/queensTale/26.jpg'} layout='fill' />
              </Page>
              <Page number={27}>
                <Image src={'/assets/queensTale/27.jpg'} layout='fill' />
              </Page>
              <Page number={28}>
                <Image src={'/assets/queensTale/28.jpg'} layout='fill' />
              </Page>
              <Page number={29}>
                <Image src={'/assets/queensTale/29.jpg'} layout='fill' />
              </Page>
              <Page number={30}>
                <Image src={'/assets/queensTale/30.jpg'} layout='fill' />
              </Page>
              <Page number={31}>
                <Image src={'/assets/queensTale/31.jpg'} layout='fill' />
              </Page>
              <Page number={32}>
                <Image src={'/assets/queensTale/32.jpg'} layout='fill' />
              </Page>
              <Page number={33}>
                <Image src={'/assets/queensTale/33.jpg'} layout='fill' />
              </Page>
              <Page number={34}>
                <Image src={'/assets/queensTale/34.jpg'} layout='fill' />
              </Page>
              <Page number={35}>
                <Image src={'/assets/queensTale/35.jpg'} layout='fill' />
              </Page>
              <Page number={36}>
                <Image src={'/assets/queensTale/36.jpg'} layout='fill' />
              </Page>
              <Page number={37}>
                <Image src={'/assets/queensTale/37.jpg'} layout='fill' />
              </Page>
              <Page number={38}>
                <Image src={'/assets/queensTale/38.jpg'} layout='fill' />
              </Page>
              <Page number={39}>
                <Image src={'/assets/queensTale/39.jpg'} layout='fill' />
              </Page>
              <Page number={40}>
                <Image src={'/assets/queensTale/40.jpg'} layout='fill' />
              </Page>
              <Page number={41}>
                <Image src={'/assets/queensTale/41.jpg'} layout='fill' />
              </Page>
              <Page number={42}>
                <Image src={'/assets/queensTale/42.jpg'} layout='fill' />
              </Page>
              <Page number={43}>
                <Image src={'/assets/queensTale/43.jpg'} layout='fill' />
              </Page>
              <Page number={44}>
                <Image src={'/assets/queensTale/44.jpg'} layout='fill' />
              </Page>
              <Page number={45}>
                <Image src={'/assets/queensTale/45.jpg'} layout='fill' />
              </Page>
              <Page number={46}>
                <Image src={'/assets/queensTale/46.jpg'} layout='fill' />
              </Page>
              <Page number={47}>
                <Image src={'/assets/queensTale/47.jpg'} layout='fill' />
              </Page>
              <Page number={48}>
                <Image src={'/assets/queensTale/48.jpg'} layout='fill' />
              </Page>
              <Page number={49}>
                <Image src={'/assets/queensTale/49.jpg'} layout='fill' />
              </Page>
              <Page number={50}>
                <Image src={'/assets/queensTale/50.jpg'} layout='fill' />
              </Page>
              <Page number={51}>
                <Image src={'/assets/queensTale/51.jpg'} layout='fill' />
              </Page>
              <Page number={52}>
                <Image src={'/assets/queensTale/52.jpg'} layout='fill' />
              </Page>
              <Page number={53}>
                <Image src={'/assets/queensTale/53.jpg'} layout='fill' />
              </Page>
              <Page number={54}>
                <Image src={'/assets/queensTale/54.jpg'} layout='fill' />
              </Page>
              <Page number={55}>
                <Image src={'/assets/queensTale/55.jpg'} layout='fill' />
              </Page>
              <Page number={56}>
                <Image src={'/assets/queensTale/56.jpg'} layout='fill' />
              </Page>
              <Page number={57}>
                <Image src={'/assets/queensTale/57.jpg'} layout='fill' />
              </Page>
              <Page number={58}>
                <Image src={'/assets/queensTale/58.jpg'} layout='fill' />
              </Page>
              <Page number={59}>
                <Image src={'/assets/queensTale/59.jpg'} layout='fill' />
              </Page>
              <Page number={60}>
                <Image src={'/assets/queensTale/60.jpg'} layout='fill' />
              </Page>
              <Page number={61}>
                <Image src={'/assets/queensTale/61.jpg'} layout='fill' />
              </Page>
              <Page number={62}>
                <Image src={'/assets/queensTale/62.jpg'} layout='fill' />
              </Page>
              <Page number={63}>
                <Image src={'/assets/queensTale/63.jpg'} layout='fill' />
              </Page>
              <Page number={64}>
                <Image src={'/assets/queensTale/64.jpg'} layout='fill' />
              </Page>
              <Page number={65}>
                <Image src={'/assets/queensTale/65.jpg'} layout='fill' />
              </Page>
              <Page number={66}>
                <Image src={'/assets/queensTale/66.jpg'} layout='fill' />
              </Page>
              <Page number={67}>
                <Image src={'/assets/queensTale/67.jpg'} layout='fill' />
              </Page>
              <Page number={68}>
                <Image src={'/assets/queensTale/68.jpg'} layout='fill' />
              </Page>
              <Page number={69}>
                <Image src={'/assets/queensTale/69.jpg'} layout='fill' />
              </Page>
              <Page number={70}>
                <Image src={'/assets/queensTale/70.jpg'} layout='fill' />
              </Page>
              <Page number={71}>
                <Image src={'/assets/queensTale/71.jpg'} layout='fill' />
              </Page>
              <Page number={72}>
                <Image src={'/assets/queensTale/72.jpg'} layout='fill' />
              </Page>
              <Page number={73}>
                <Image src={'/assets/queensTale/73.jpg'} layout='fill' />
              </Page>
              <Page number={74}>
                <Image src={'/assets/queensTale/74.jpg'} layout='fill' />
              </Page>
              <Page number={75}>
                <Image src={'/assets/queensTale/75.jpg'} layout='fill' />
              </Page>
              <Page number={76}>
                <Image src={'/assets/queensTale/76.jpg'} layout='fill' />
              </Page>
              <Page number={77}>
                <Image src={'/assets/queensTale/77.jpg'} layout='fill' />
              </Page>
              <Page number={78}>
                <Image src={'/assets/queensTale/78.jpg'} layout='fill' />
              </Page>
              <Page number={79}>
                <Image src={'/assets/queensTale/79.jpg'} layout='fill' />
              </Page>
              <Page number={80}>
                <Image src={'/assets/queensTale/80.jpg'} layout='fill' />
              </Page>

              <PageCover>THE END</PageCover>
            </FlipBook>
          </div>

          <div className='text-center mt-5'>
            <button
              className='prev-next-btn'
              type='button'
              onClick={() => book.current.pageFlip().flipPrev()}
            >
              Previous
            </button>
            <span className='px-3'>
              <span>{page + 1}</span> of
              <span> {totalPage}</span>
            </span>
            <button
              type='button'
              className='prev-next-btn'
              onClick={() => book.current.pageFlip().flipNext()}
            >
              Next
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default QueensTale;

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
