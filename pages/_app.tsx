import type { AppProps } from 'next/app';
import '../index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="app-header-content-container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
