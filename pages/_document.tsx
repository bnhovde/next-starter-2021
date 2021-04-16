import Document, { Html, Head, Main, NextScript } from 'next/document';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="no">
        <Head>
          {/* Font preloading */}
          <link
            rel="preload"
            href="/fonts/font.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />

          {/* Generic Meta Tags */}
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
        </Head>
        <body className="body--preload">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
