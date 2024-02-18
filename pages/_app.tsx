import Footer from '@src/components/footer/Footer';
import Header from '@src/components/header/Header';
import type { AppProps } from 'next/app';
import '../index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="app-header-content-container">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
