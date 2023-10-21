import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/utils/components.css';
import '../styles/utils/Footer.css';
import '../styles/utils/HomeWrapper.css';
import '../styles/utils/SingleProduct.css';
import '../styles/utils/products.css';
import '../styles/utils/ContactPage.css';
import '../styles/utils/Cart.css';
import '../styles/utils/Login.css';
import '../styles/utils/ProfilePage.css';
import '../styles/globals.css';
import '../styles/utils/QueenPage.css';
import '../styles/utils/ConfirmOrder.css';
import '../styles/utils/Bind.css';
import '../styles/utils/Responsive.css';
import '../styles/utils/ToggleLocalization.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';
import { AuthContextProvidor } from '../contexts/AuthContextFile/AuthContext';
import { CartContextProvidor } from '../contexts/CartContextFile/CartContext';
import { appWithTranslation } from 'next-i18next';
import { Router, useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { SSRProvider } from 'react-bootstrap';
import { Suspense } from 'react';
import { ProtectRoute } from '../components/utils/PrivateRoute';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <SSRProvider>
        <AuthContextProvidor>
          <CartContextProvidor>
            <Layout>
              <NextNProgress
                height={3}
                color='#0E2BBF'
                startPosition={0.7}
                options={{ showSpinner: false, easing: 'ease', speed: 500 }}
              />
              <Component {...pageProps} />
            </Layout>
          </CartContextProvidor>
        </AuthContextProvidor>
      </SSRProvider>
      {/* </Suspense> */}
    </>
  );
}

export default appWithTranslation(MyApp);
