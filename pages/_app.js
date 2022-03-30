import Layout from '../components/layout/layout';
import Head from 'next/head';
import '../styles/globals.css';

// we can give all pages a general title and meta elements, that will be overwritten by the specific data.

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta
          name='description'
          content='NextJs Events'
        />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        /> 
        {/* ensures the page is responsive and scales correctly in all the pages */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;