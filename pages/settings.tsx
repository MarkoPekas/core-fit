import { CheckIcon, ChevronLeftIcon, XIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Box from "../components/Box";
import Head from 'next/head'
import { useRouter } from "next/router";

const Settings : NextPage = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [diff, setDiff] = useState(1);
    const [goal, setGoal] = useState(1);
    const router = useRouter();

    useEffect(() => {
        localStorage.theme === 'dark'?setIsOpen(true):setIsOpen(false);
        setDiff(parseInt(localStorage.difficulty||'1'));
        setGoal(parseInt(localStorage.goal||'1'));
    }, [])
    useEffect(() => {
        localStorage.theme = isOpen? 'dark' : 'light';
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

    }, [isOpen])

    useEffect(() => {
        localStorage.difficulty = diff;
    }, [diff])
    useEffect(() => {
        localStorage.goal = goal;
    }, [goal])
    
    
    return (
        <div className="w-full h-screen flex flex-col">
            <Head>

                <title>Settings</title>
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
                <p className="p-6 text-2xl font-semibold">Settings</p>
                <div className="p-6" onClick={() => router.back()}>
                    <XIcon className="w-7 h-7 text-gray-400" />
                </div>
            </div>

            <Box css="border flex justify-between items-center" >
                <p>Dark Mode</p>
                <div className={`w-12 h-7 rounded-full border flex items-center transition-all bg-white dark:bg-gray-800`} onClick={() => setIsOpen(!isOpen)}>
                    <div className={`w-7 h-7 rounded-full border transition-all bg-white ${isOpen?'ml-5':''}`}></div>
                </div>
            </Box>
            <br/>
            <p className="mx-5 font-semibold">Difficulty</p>
            <div onClick={() => setDiff(1)}>
                <Box css={`flex transition-all justify-between items-center ${diff===1?'font-semibold border-2 border-green-500':'border text-gray-500'}`} outercss="py-1" >
                    <p>Beginner</p>
                    {(diff===1)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <div onClick={() => setDiff(2)}>
                <Box css={`flex transition-all justify-between items-center ${(diff===2)?'font-semibold border-2 border-green-500':'border text-gray-500'}`} outercss="py-1" >
                    <p>Intermediate</p>
                    {(diff===2)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <div onClick={() => setDiff(3)}>
                <Box css={`flex transition-all justify-between items-center ${(diff===3)?'font-semibold border-2 border-green-500':'border text-gray-500'}`} outercss="py-1" >
                    <p>Advanced</p>
                    {(diff===3)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <div onClick={() => setDiff(4)}>
                <Box css={`flex transition-all justify-between items-center ${(diff===4)?'font-semibold border-2 border-green-500':'border text-gray-500'}`} outercss="py-1" >
                    <p>Legendary</p>
                    {(diff===4)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <br />
            <p className="mx-5 font-semibold">Goals</p>
            <div className="flex flex-col w-full">
                <div className="flex p-5 py-0 h-40">
                    <div className={`flex-1 transition-all m-2 rounded flex justify-center items-center border-green-500 flex-col bg-cover bg-center ${goal===1?'border-2':''}`} onClick={() => setGoal(1)} style={{backgroundImage: `url(/g1.jpg)`}}>
                        <div className="rounded transition-all flex justify-center items-center flex-col w-full h-full" style={{backgroundColor: `${goal===1?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.5)'}`}}>
                            <p className="text-white text-2xl">1-2</p>
                            <p className="text-white opacity-50 text-sm">times per week</p>
                        </div>
                    </div>
                    <div className={`flex-1 transition-all m-2 rounded flex justify-center items-center border-green-500 flex-col bg-cover bg-center ${goal===2?'border-2':''}`} onClick={() => setGoal(2)} style={{backgroundImage: `url(/g2.png)`}}>
                        <div className="rounded transition-all flex justify-center items-center flex-col w-full h-full" style={{backgroundColor: `${goal===2?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.5)'}`}}>
                            <p className="text-white text-2xl">3-4</p>
                            <p className="text-white opacity-50 text-sm">times per week</p>
                        </div>
                    </div>
                </div>
                <div className="flex p-5 py-0 h-40">
                <div className={`flex-1 transition-all m-2 rounded flex justify-center items-center border-green-500 flex-col bg-cover bg-center ${goal===3?'border-2':''}`} onClick={() => setGoal(3)} style={{backgroundImage: `url(/core1.jpg)`}}>
                        <div className="rounded transition-all flex justify-center items-center flex-col w-full h-full" style={{backgroundColor: `${goal===3?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.5)'}`}}>
                            <p className="text-white text-2xl">5-6</p>
                            <p className="text-white opacity-50 text-sm">times per week</p>
                        </div>
                    </div>
                    <div className={`flex-1 transition-all m-2 rounded flex justify-center items-center border-green-500 flex-col bg-cover bg-center ${goal===4?'border-2':''}`} onClick={() => setGoal(4)} style={{backgroundImage: `url(/core2.jpg)`}}>
                        <div className="rounded transition-all flex justify-center items-center flex-col w-full h-full" style={{backgroundColor: `${goal===4?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.5)'}`}}>
                            <p className="text-white text-2xl">7+</p>
                            <p className="text-white opacity-50 text-sm">times per week</p>
                        </div>
                    </div>
                </div>
            </div>
            <Box css="border m-3 bg-red-500 text-white flex justify-center font-semibold items-center" >
                <p>Reset Progress</p>
            </Box>
        </div>
    );
}

export default Settings;