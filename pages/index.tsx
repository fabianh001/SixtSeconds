import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="absolute inset-0 bg-base-200 p-4">
      <Head>
        <title>SixtSeconds</title>
        <meta name="description" content="SixtSeconds to destination!" />
      </Head>
      <Header />

    </div>
  )
}

export default Home
