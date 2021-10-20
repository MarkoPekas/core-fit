import { CheckIcon, ChevronLeftIcon, XIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Box from "../components/Box";
import Head from 'next/head'

const Settings : NextPage = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [diff, setDiff] = useState(1);

    useEffect(() => {
        localStorage.theme === 'dark'?setIsOpen(true):setIsOpen(false);
        setDiff(parseInt(localStorage.difficulty||'1'));
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
                <Link href="/">
                <div className="p-6">
                    <XIcon className="w-7 h-7 text-gray-400" />
                </div>
                </Link>
            </div>

            <Box css="border flex justify-between items-center" >
                <p>Dark Mode</p>
                <div className={`w-12 h-7 rounded-full border flex items-center transition-all bg-white dark:bg-gray-800`} onClick={() => setIsOpen(!isOpen)}>
                    <div className={`w-7 h-7 rounded-full border transition-all bg-white ${isOpen?'ml-5':''}`}></div>
                </div>
            </Box>
            <p className="mx-5 font-semibold">Difficulty</p>
            <div onClick={() => setDiff(1)}>
                <Box css={`border flex justify-between items-center ${diff<3?'font-semibold':'text-gray-500'}`} outercss="py-1" >
                    <p>Beginner</p>
                    {(diff<3)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <div onClick={() => setDiff(3)}>
                <Box css={`border flex justify-between items-center ${(diff<5&&diff>2)?'font-semibold':'text-gray-500'}`} outercss="py-1" >
                    <p>Intermediate</p>
                    {(diff<5&&diff>2)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <div onClick={() => setDiff(5)}>
                <Box css={`border flex justify-between items-center ${(diff<7&&diff>4)?'font-semibold':'text-gray-500'}`} outercss="py-1" >
                    <p>Advanced</p>
                    {(diff<7&&diff>4)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
            <div onClick={() => setDiff(7)}>
                <Box css={`border flex justify-between items-center ${(diff<9&&diff>6)?'font-semibold':'text-gray-500'}`} outercss="py-1" >
                    <p>Legendary</p>
                    {(diff<9&&diff>6)?<CheckIcon className="w-7 h-7 text-green-500" />:null}
                </Box>
            </div>
        </div>
    );
}

export default Settings;