import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'semantic-ui-react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <Card
        href='/Details/oxygen'
        header='Check Oxygen Supply'
        meta='Near You'
        description=''
    />,
    <Card
        href='/Details/Beds'
        header='Elliot Baker'
        meta='Friend'
        description=''
    />,
    <Card
        href='/Details/oxygen'
        header='Elliot Baker'
        meta='Friend'
        description=''
    />,
    <Card
        href='/Details/Remdesivir'
        header='Elliot Baker'
        meta='Friend'
        description=''
    />
];

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col-reverse md:flex-row px-5 items-center mx-auto justify-around w-70">
            <div className="flex-1 flex mx-auto px-5 flex-col items-center">
                <h1 className="text-3xl font-semibold">About</h1>
                <p className="px-20 text-md text-gray-500 mt-5">There are ample of resources available on the internet. DELHI COVID CARE is a compiled , third-party verified and updated database of all covid essential resources in Delhi.</p>
                <div className="relative w-80 mt-5 pt-20 overflow-hidden"><AliceCarousel autoPlay autoPlayInterval="2000" infinite mouseTracking items={items} /></div>
            </div>
            <div className="flex-1 flex mx-auto px-5 flex-col items-center">
                <Image src="/assets/home.svg" alt="logo" width={420} height={320} layout="fixed"/>
                <p className="px-20 text-md text-gray-500 pt-6">If your organisation/company/yourself 
                has availability of the covid essential 
                resources, Please register in our database!</p>
                <Link href="/Register">
                    <a className="block cursor-pointer mr-5 text-md px-6 py-3 leading-none border rounded-lg border-blue-400 hover:border-gray-800 hover:text-gray-800 hover:bg-white text-blue-400 mt-10 sm:mt-4 lg:mt-5 font-semibold sm:ml-2">Register</a>
                </Link>
            </div>
        </div>
    )
}