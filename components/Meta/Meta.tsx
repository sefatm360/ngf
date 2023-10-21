import Head from 'next/head';
import { Imeta } from './Types/MetaType';

const Meta = ({
  title,
  description,
  keywords,
  contentImg,
  subjectUrl,
}: Imeta) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta name='keywords' key='keyword' content={keywords} />
        <link rel='canonical' href='https://onthe-way.com/' />

        {/* primary meta tags */}
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='fb:app_id' content='1235458864060328' />
        <meta property='og:url' content={subjectUrl} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' key='image' content={contentImg} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={subjectUrl} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={contentImg} />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: 'on the way',
  description:
    ' On the Way- নারী হোক উদ্যোক্তা platform is for all women entrepreneurs and those who are interested in becoming entrepreneurs. Women are joining the platform through free registration on On the Way Queen app. Women entrepreneurs can sell their products through On the Way website and social media. Women can also do freelancing work in On the Way. On the Way has free online training sessions to take women entrepreneurs forward. This Platform has brought a campus-based seminar Student to Queen to inspire women students to become entrepreneurs. Student to Queen sessions of On the Way have started with career clubs of various educational institutions of Bangladesh. Already On the Way has received funding from the Idea Project of the Ministry of ICT Division and from American institutions.',
  keywords:
    'ontheway, on the way, ecommerce, best ecommerce site, e-commerce, queen, otw-queen, onthe-way, m360ict, on the way.com, ontheway,Ontheway, Nowabenki Gonomukhi Foundation (NGF), ONTHEWAY, on the way website, ontheway website, on the way, onthe-way.com',
  contentImg: `https://hajjmanagment.online/get/image/others/otw-background-seo.webp`,
  subjectUrl: `https://onthe-way.com/`,
};

export default Meta;
