import Head from 'next/head';
import Header from '../components/header';
import { Button } from "semantic-ui-react";
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';


export default function Details({ data, supply }) {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>CovidCare</title>
            </Head>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {(supply === "oxygen" || supply === "beds" || supply === "plasma" || supply === "medicines") ? <div className="mx-auto w-11/12">
                    <h1 className="ml-20 text-4xl text-gray-600 py-6 font-bold">Get {supply.charAt(0).toUpperCase() + supply.slice(1)} Details</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {data.map((val, id) => {
                            return (
                                <div key={id} className=" mx-auto overflow-hidden bg-white flex flex-col justify-around items-center shadow h-96 w-80 px-5 p-4 m-3 rounded-md">
                                    <div className="w-11/12">
                                        <h2 className="truncate w-full text-xl text-gray-600 font-semibold">{val.title}</h2>
                                        <p className="text-md text-blue-400">{`Pranav helping with ${supply}`}</p>
                                        <p className="text-sm text-gray-500 mt-5">{`New Delhi, India`}</p>
                                    </div>
                                    <div className="flex-2 flex flex-col justify-around w-full px-3 h-1/2">
                                        <div className="flex items-center justify-start">
                                            <Icon onClick={() => { }} link size="large" name='mail outline' />
                                            <a className="link cursor-pointer pl-2 text-md text-gray-600">{`test@gmail.com`}</a>
                                        </div>
                                        <div className="flex items-center justify-start">
                                            <Icon onClick={() => { }} className="rotate-180" link size="large" name='phone' />
                                            <a className="link cursor-pointer pl-2 text-md text-gray-600">{`+91-6868686868`}</a>
                                        </div>
                                        <div className="flex items-center justify-start">
                                            <Icon onClick={() => { }} link size="large" name='instagram' />
                                            <a className="link cursor-pointer pl-2 text-md text-gray-600">{`@test_t`}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                    :
                    <div className="min-h-screen flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold mb-5">No, Such Information available</h2>
                        <Button color="blue" onClick={() => router.push("/")}>Go Back to Home</Button>
                    </div>
                }
            </div>
        </>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id;
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    // ,{
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({})
    // });
    let data = await response.json();
    return {
        props: {
            data: data,
            supply: id
        }
    }
}