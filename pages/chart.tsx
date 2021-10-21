import { ChartBarIcon, InformationCircleIcon, SearchIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Box from '../components/Box';
import Link from 'next/link';
import { XIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import exercises from '../data/exercises.json';
import { useRouter } from 'next/router';
const Chart = () => {
    
    const [pBar, setPBar] = useState(0);
    const [info, setInfo] = useState({name: '', description: '', image: '', targets: ['']});
    const [search, setSearch] = useState('');
    const router = useRouter();

    useEffect(() => {
        setPBar(Math.floor((localStorage.difficulty||1)/8 * 100));
    }, []);

    let data: {name: string, description: string, image: string, targets: string[]}[] = []
    Object.keys(exercises).forEach(key => {
        data.push((exercises as any)[key]);
    });
    return (
        <div className="w-full h-screen flex flex-col">
            <Head>

            <title>Learn</title>
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />
            <link rel="manifest" href="/manifest.json" />
            <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
            <meta name="theme-color" content="#fff"/>
            </Head>
            <div className="flex justify-between items-center">
                <p className="p-6 text-2xl font-semibold">Learn</p>
                <div className="p-6" onClick={() => router.back()}>
                    <XIcon className="w-7 h-7 text-gray-400" />
                </div>
            </div>
            <div className="p-3">
                <div className="p-2 rounded border flex">
                    <input className="flex-1 border-0 outline-none" onChange={(v) => setSearch(v.target.value)} />
                    <SearchIcon className="w-6 h-6 text-sexy" />
                </div>
            </div>
            <p className="mx-5 font-semibold mb-3">Exercises</p>
            <div className="overflow-scroll">
            {data.map((item, index) => (
                <div onClick={() => setInfo(item)} className={item.name.toLowerCase().includes(search.toLowerCase())?"-my-5":"-my-5 hidden"}>
                    <Box css='flex justify-between items-center' >
                        <div key={index} className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(${item.image})`}}></div>
                        <div className="w-full flex flex-col justify-center p-3 flex-grow">
                            <p className="text-xl font-semibold">{item.name}</p>
                            <p className="opacity-50">{item.targets.map(val => val + ' ')}</p>
                        </div>
                        <InformationCircleIcon className="h-8 w-8 text-gray-400" />
                    </Box>
                </div>
            ))}
            </div>
            <div onClick={() => setInfo({name: '', description: '', image: '', targets: ['']})} className={`fixed w-full h-full p-3 flex items-center ${info.name===""?'hidden':''}`} style={{backgroundColor: `rgba(255,255,255,0.5)`}}>
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

export default Chart;
