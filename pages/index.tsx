import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Map from '../components/Map';
import MainPanel from '../components/MainPanel';

const Home: NextPage = () => {
  return (
    <div className="absolute inset-0 bg-base-200 flex flex-col">
      <Head>
        <title>SixtSeconds</title>
        <meta name="description" content="SixtSeconds to destination!" />
      </Head>
      <Header />
      <div className="flex max-h-full flex-col flex-1">
        <Map />
        <MainPanel />
      </div>
    </div>
  )
}

export default Home
