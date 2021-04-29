import Head from 'next/head';
import Header from '../components/header';
import Registerform from '../components/registerform';

export default function Register() {

  return (
    <>
      <Head>
          <title>CovidCare</title>
      </Head>
      <Header/>
      <div className="min-h-screen flex bg-gray-50 justify-center items-center">
        <div className="w-4/5 md:w-3/5 p-5 m-6 bg-white rounded shadow-lg"><Registerform/></div>
      </div>
    </>
  )
}