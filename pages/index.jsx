import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Header from '../components/header';
import {items} from '../util/static_data';
// import CovidGraph from '../components/covidgraph';
import RequestForm from '../components/reqform';
import { useState } from 'react';

export default function Dashboard() {
    
    const [isopen, setisopen] = useState(false);

    return (
        <>
            <Head>
                <title>CovidCare</title>
            </Head>
            <Header/>
            <div className="min-h-full mt-5 md:mt-20 flex flex-col-reverse md:flex-row px-5 items-center mx-auto justify-around w-70">
            <RequestForm isopen={isopen} setisopen={setisopen}/>
            <div className="flex-1 flex mx-auto px-5 flex-col items-center">
                <h1 className="text-3xl pt-10 md:pt-0 font-semibold">About</h1>
                <p className="px-2 md:px-20 text-md text-gray-500 mt-5">There are ample of resources available on the internet. DELHI COVID CARE is a compiled , third-party verified and updated database of all covid essential resources in Delhi.</p>
                <div className="relative w-80 mt-5 md:pt-20 overflow-hidden"><AliceCarousel autoPlay autoPlayInterval="2000" infinite mouseTracking items={items} /></div>
                <a onClick={()=>setisopen(true)} className="block cursor-pointer mr-5 text-md px-6 py-3 leading-none border rounded-lg border-blue-400 hover:border-gray-800 hover:text-gray-800 hover:bg-white text-blue-400 mb-5 md:mb-0 mt-10 sm:mt-4 lg:mt-5 font-semibold sm:ml-2">Make a Request</a>
            </div>
            <div className="flex-1 flex mx-auto px-5 flex-col items-center">
                {/* <CovidGraph height={200} width={400}/> */}
                <div className="relative h-300 w-400"><Image src="/assets/home.svg" alt="logo" layout="fill"/></div>
                <p className="px-2 md:px-20 text-md text-gray-500 pt-6">If your organisation/company/yourself 
                has availability of the covid essential 
                resources, Please register in our database!</p>
                <Link href="/Register">
                    <a className="block cursor-pointer mr-5 text-md px-6 py-3 leading-none border rounded-lg border-blue-400 hover:border-gray-800 hover:text-gray-800 hover:bg-white text-blue-400 mt-5 md:mt-10 sm:mt-4 lg:mt-5 font-semibold sm:ml-2">Register</a>
                </Link>
            </div>
        </div>
        </>
    )
}