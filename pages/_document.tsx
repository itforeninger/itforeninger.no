import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React, { ComponentProps } from 'react';
import {
  CANONICAL_URL,
  DEFAULT_AUTHOR,
  PAGE_KEYWORDS,
  PAGE_DESCRIPTION,
} from '../constants/about';
import { GA_TRACKING_ID } from '../constants/analytics';

const getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    };

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

type DocumentProps = ComponentProps<typeof Document>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomDocument = (_: DocumentProps): JSX.Element => {
  return (
    <Html lang="nb-NO">
      <Head>
        <link rel="icon" type="image/png" href="/F.png" />
        <meta name="theme-color" content="#0D5474" />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content={PAGE_KEYWORDS.join(', ')} />
        <meta name="author" content={DEFAULT_AUTHOR} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={CANONICAL_URL} />
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = getInitialProps;

export default CustomDocument;
