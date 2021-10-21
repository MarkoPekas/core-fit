import { ChevronRightIcon, FlagIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Box from '../components/Box'
import Nav from '../components/Nav'
import Link from 'next/link'

const Home: NextPage = () => {
  const [wHeight, setWHeight] = useState(312)
  const [qHeight, setQHeight] = useState(360)
  return (
    <div className="h-screen w-full flex flex-col">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#fff"/>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <p className="p-6 text-2xl">Begin Your<br /> <span className="font-semibold">Core Program</span></p>
      
      <div className="flex justify-between"><p className="mx-3 font-semibold">Timeline</p></div>
      <div className="w-full h-48 flex-shrink-0 flex p-3">
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>M</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border bg-blue-500"></div>
        </div>
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>T</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border bg-red-500"></div>
        </div>
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>W</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border bg-blue-500"></div>
        </div>
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>T</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border-2 border-blue-500"></div>
        </div>
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>F</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
        </div>
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>S</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
        </div>
        <Link href="/view/1">
        <div className="flex-1 flex flex-col p-2 text-center">
          <p>S</p>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border"></div>
          <div className="flex-1 rounded border bg-blue-500"></div>
          <div className="flex-1 rounded border"></div>
        </div>
        </Link>
      </div>
      <br />



      

      <div className="flex justify-between"><p className="mx-3 font-semibold">Discover Workouts</p><p className="font-medium text-blue-500 mx-3" onClick={() => setWHeight(wHeight===312?156*4:312)}>{wHeight===312?'see all':'see less'}</p></div>
      <div className="overflow-hidden flex-shrink-0 transition-all" style={{height: `${wHeight}px`}}>
        <Box css='flex flex-col p-5 shadow' img="/core.jpg" to="/view/1">
          <p className="text-white text-xl font-semibold mt-10">The Plank Challenge</p>
          <p className="text-white opacity-50">Beginner</p>
        </Box>
        <Box css='flex flex-col p-5 shadow' img="/planche.jpg">
          <p className="text-white text-xl font-semibold mt-10">Fat Burner</p>
          <p className="text-white opacity-50">intermediate</p>
        </Box>
        <Box css='flex flex-col p-5 shadow' img="/sixpack.jpg">
          <p className="text-white text-xl font-semibold mt-10">Planche Progression</p>
          <p className="text-white opacity-50">Impossible</p>
        </Box>
        <Box css='flex flex-col p-5 shadow' img="/core2.jpg">
          <p className="text-white text-xl font-semibold mt-10">The Queen</p>
          <p className="text-white opacity-50">Legendary</p>
        </Box>
      </div>



      <br />
      <div className="flex justify-between"><p className="mx-3 font-semibold">Super-Quick Workouts</p><p className="font-medium text-blue-500 mx-3" onClick={() => setQHeight(qHeight===360?120*6:360)}>{qHeight===360?'see all':'see less'}</p></div>
      <div className="overflow-hidden flex-shrink-0 transition-all" style={{height: `${qHeight}px`}}>
        <Box css='flex justify-between items-center' to='/view/1'>
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(/core3.jpg)`}}></div>
          <div className="w-full flex flex-col justify-center p-3 flex-grow">
            <p className="text-xl font-semibold">Light Weight</p>
            <p className="opacity-50">Beginner</p>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </Box>
        <Box css='flex justify-between items-center' >
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(/core1.jpg)`}}></div>
          <div className="w-full flex flex-col justify-center p-3 flex-grow">
            <p className="text-xl font-semibold">The Boxer</p>
            <p className="opacity-50">Advanced</p>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </Box>
        <Box css='flex justify-between items-center' >
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(/core2.jpg)`}}></div>
          <div className="w-full flex flex-col justify-center p-3 flex-grow">
            <p className="text-xl font-semibold">Queen</p>
            <p className="opacity-50">Legendary</p>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </Box>
        <Box css='flex justify-between items-center' >
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(/core4.jpg)`}}></div>
          <div className="w-full flex flex-col justify-center p-3 flex-grow">
            <p className="text-xl font-semibold">Beach Body</p>
            <p className="opacity-50">Beginner</p>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </Box>
        <Box css='flex justify-between items-center' >
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(/core5.jpg)`}}></div>
          <div className="w-full flex flex-col justify-center p-3 flex-grow">
            <p className="text-xl font-semibold">Pride</p>
            <p className="opacity-50">Intermediate</p>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </Box>
        <Box css='flex justify-between items-center' >
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(/core6.jpg)`}}></div>
          <div className="w-full flex flex-col justify-center p-3 flex-grow">
            <p className="text-xl font-semibold">Snapchat Body</p>
            <p className="opacity-50">Intermediate</p>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </Box>
      </div>
    </div>
  )
}

export default Home
