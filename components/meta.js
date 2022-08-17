import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Annalisa Garofalo's blog`} />
      <meta property="og:title" content={"Annalisa's Site"} />
      <meta property="og:site_name" content={"Annalisa's Site"} />
      <meta property="og:url" content={'www.annalisas.site'} />
      <meta
        property="og:description"
        content={
          'Read writing from Annalisa Garofalo. sometimes poet, sometimes unidentified flying object.'
        }
      />
      <meta property="og:type" content={'books.author'} />
      <meta
        property="og:image"
        content={
          'https://miro.medium.com/max/1200/1*kelfcQpH6ZKmNgDW9eAu3A.png'
        }
      />
    </Head>
  );
}
