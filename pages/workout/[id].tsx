import { ChevronRightIcon, FastForwardIcon } from "@heroicons/react/outline";
import { GetStaticPaths, NextPage } from "next";
import Box from "../../components/Box";



const Workout = ({ id } : {id: string}) => {
    return (
        <div className="w-full h-screen">
            <div className="h-1/2 w-full bg-contain bg-center" style={{backgroundImage: `url(${'/images/crunches.gif'})`}}>

            </div>
            <div className="h-1/2 w-full flex flex-col">
                <p className="text-2xl text-center font-medium ">Crunches</p>
                <div className="flex-1 flex justify-center items-center flex-col">
                    <p className="text-8xl text-center">34</p>
                    <p className="text-gray-400 text-center">sec</p>
                </div>
                <Box css='flex justify-between items-center' >
                <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(/core3.jpg)`}}></div>
                <div className="w-full flex flex-col justify-center p-3 flex-grow">
                    <p className="text-xl font-semibold">Plank</p>
                    <p className="opacity-50">60 sec</p>
                </div>
                <FastForwardIcon className="h-8 w-8 text-gray-400" />
                </Box>
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

