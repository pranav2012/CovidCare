import { Button } from "semantic-ui-react";
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';


export default function Details({data,supply}) {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50">
           {(supply === "oxygen" || supply === "beds" || supply === "plasma" || supply === "remdesivir")? <div className="mx-auto w-3/5">
                <h1 className="ml-3 text-4xl text-gray-600 py-6 font-bold">Get {supply.charAt(0).toUpperCase() + supply.slice(1)} Details</h1>
                {data.map((val,id) =>{return (
                   <div key={id} className="bg-white flex justify-around items-center shadow h-32 px-5 p-4 m-3 rounded-md">
                        <div className="flex-1">
                            <h2 className="truncate w-4/5 text-2xl text-gray-600 font-semibold">{val.title}</h2>
                            <p className="text-md text-blue-400">{`Pranav helping with ${supply}`}</p>
                            <p className="text-sm text-gray-500 mt-5">{`New Delhi, India`}</p>
                        </div>
                        <div className="flex-2 flex justify-between items-center w-1/4">
                            <Icon onClick={()=>{}} link size="large" name='mail outline' />
                            <Icon onClick={()=>{}} className="rotate-180" link size="large" name='phone' />
                            <Icon onClick={()=>{}} link size="large" name='instagram' />
                        </div>
                   </div>
                )})}
            </div>
            :
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold mb-5">No, Such Information available</h2>
                <Button color="blue" onClick={()=>router.push("/")}>Go Back to Home</Button>
            </div>
            }
        </div>
    )
}

export async function getServerSideProps ({query}){
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
        return{
            props:{
                data:data,
                supply:id
            }
        }
}