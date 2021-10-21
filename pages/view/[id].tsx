import { ChevronRightIcon, InformationCircleIcon, XIcon } from "@heroicons/react/outline";
import { GetStaticPaths, NextPage } from "next";
import Box from "../../components/Box";
import Link from 'next/link'
import exercises from "../../data/exercises.json";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";


const Workout = ({ id } : {id: string}) => {
    const [info, setInfo] = useState({name: '', description: '', image: '', targets: ['']});
    const router = useRouter();
    let data: {name: string, description: string, image: string, targets: string[]}[] = []
    Object.keys(exercises).forEach(key => {
        data.push((exercises as any)[key]);
    });
    return (
        <div className="w-full h-screen">
            <div className="flex justify-between items-center">
                <p className="p-6 text-2xl font-semibold">Train</p>
                <Link href="/">
                <div className="p-6">
                    <XIcon className="w-7 h-7 text-gray-400" />
                </div>
                </Link>
            </div>
            <Box img="/core1.jpg" css="h-40">

            </Box>
            <div className="flex">
                <p className="p-6 text-2xl">The Plank<br /> <span className="font-semibold">Challenge</span></p>
                <div className="p-3 flex flex-1 justify-center items-center">
                    <div className="rounded flex-1 bg-blue-500 text-white p-3 text-center text-lg font-semibold" onClick={() => {router.push('/workout/1')}}>
                        <p>Start</p>
                    </div>
                </div>
            </div>
            <p className="mx-5 font-semibold mb-3">Preview</p>
            {data.map((item, index) => (
                <div onClick={() => setInfo(item)} className="-my-4">
                    <Box css='flex justify-between items-center' >
                        <div key={index} className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(${item.image})`}}></div>
                        <div className="w-full flex flex-col justify-center p-3 flex-grow">
                            <p className="text-xl font-semibold">{item.name}</p>
                            <p className="opacity-50">30 sec</p>
                        </div>
                        <InformationCircleIcon className="h-8 w-8 text-gray-400" />
                    </Box>
                </div>
            ))}


            <div onClick={() => setInfo({name: '', description: '', image: '', targets: ['']})} className={`fixed top-0 left-0 w-full h-full p-3 flex items-center ${info.name===""?'hidden':''}`} style={{backgroundColor: `rgba(255,255,255,0.5)`}}>
                <div className="flex flex-col w-full shadow bg-white rounded">
                    <div className="h-52 flex-shrink-0 flex">
                        <div className="m-4 border flex-1 rounded-lg bg-center bg-cover" style={{backgroundImage: `url(${info.image})`}}>

                        </div>
                        <div className="flex-1 flex flex-col justify-center p-2">
                            <p className="text-2xl font-medium">{info.name}</p>
                            <p>{info.targets.map(val => val + ' ')}</p>
                        </div>
                    </div>
                    <div className="flex-1 flex p-5">
                        <p>{info.description}</p>
                    </div>
                </div>
            </div>


        </div>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { id: "1" }},
        { params: { id: "2" }},
        { params: { id: "3" }},
        { params: { id: "4" }},
        { params: { id: "5" }},
        { params: { id: "6" }},
      ],
        fallback: false
    };
}

export async function getStaticProps({ params } : { params: { id: string }}) {
    return {
      props: {
        id: params.id
      }
    };
}


export default Workout;

