import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Box from '../components/Box';
import Link from 'next/link';
import { XIcon } from '@heroicons/react/outline';
import Head from 'next/head';
const Chart = () => {
    const [pBar, setPBar] = useState(0);
    useEffect(() => {
        setPBar(Math.floor((localStorage.difficulty||1)/8 * 100));
    }, []);
    return (
        <div className="w-full h-screen flex flex-col">
            <Head>

            <title>Chart</title>
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
                <p className="p-6 text-2xl font-semibold">Statistics</p>
                <Link href="/">
                <div className="p-6">
                    <XIcon className="w-7 h-7 text-gray-400" />
                </div>
                </Link>
            </div>
            
            <div className="flex justify-center items-center flex-col">
                <p className="text-6xl text-center">2</p>
                <p className="text-gray-400 text-center">day streak</p>
            </div>
            <p className="mx-5 font-semibold">Difficulty</p>
            <div className="p-5">
                <div className="w-full h-8 border rounded">
                    <div className="rounded h-full transition-all delay-75 ease-in-out duration-300 bg-blue-500" style={{width: `${pBar}%`}}>

                    </div>
                </div>
            </div>
            <br />
            <p className="mx-5 font-semibold">Exercises</p>
            <Box css='flex justify-between items-center' >
                <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(/images/plank.gif)`}}></div>
                <div className="w-full flex flex-col justify-center p-3 flex-grow">
                    <p className="text-xl font-semibold">Plank</p>
                    <p className="opacity-50">abs</p>
                </div>
                <InformationCircleIcon className="h-8 w-8 text-gray-400" />
            </Box>
            <Box css='flex justify-between items-center' >
                <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(/images/highknees.gif)`}}></div>
                <div className="w-full flex flex-col justify-center p-3 flex-grow">
                    <p className="text-xl font-semibold">High Knees</p>
                    <p className="opacity-50">legs, abs</p>
                </div>
                <InformationCircleIcon className="h-8 w-8 text-gray-400" />
            </Box>
            <Box css='flex justify-between items-center' >
                <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(/images/crunches.gif)`}}></div>
                <div className="w-full flex flex-col justify-center p-3 flex-grow">
                    <p className="text-xl font-semibold">Crunches</p>
                    <p className="opacity-50">abs</p>
                </div>
                <InformationCircleIcon className="h-8 w-8 text-gray-400" />
            </Box>
        </div>
    );
}

export default Chart;
