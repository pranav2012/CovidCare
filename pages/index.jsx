import Head from 'next/head';
import Dashboard from './dashboard';
import Header from './header';

export default function Home() {
  return (
    <>
      <Head>
        <title>CovidCare</title>
      </Head>
      <div>
        <Header/>
        <Dashboard/>
      </div>
    </>
  )
}
