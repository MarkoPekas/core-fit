import { FastForwardIcon } from "@heroicons/react/outline";
import { GetStaticPaths, NextPage } from "next";
import Box from "../../components/Box";
import workouts from "../../data/workouts.json";
import exercises from "../../data/exercises.json";
import { useEffect, useState } from "react";
import Timer from "../../components/Timer";
import { useRouter } from 'next/router'


const Workout = ({ id } : {id: string}) => {
    const workout = (workouts as any)[id].workouts;
    const router = useRouter();
    const [exercise, setExercise] = useState(0);
    const [diff, setDiff] = useState(1);
    
    let nextExercise = workout[exercise + 1];
    let nextImage;
    if(nextExercise === undefined) {
        nextExercise = {"name": "Finish"};
        nextImage = "/images/rest.gif";
    }else {
        nextImage = (exercises as any)[nextExercise.name].image;
    }
    useEffect(() => {
        setDiff(parseInt(localStorage.difficulty||'1'));
    }, [])
    if(workout[exercise]===undefined) {
        router.back();
        return <></>;
    }
    let reps = parseInt((workout[exercise].reps||['0','0','0','0'])[diff-1])
    let duration = parseInt((workout[exercise].duration||['-1','-1','-1','-1'])[diff-1])
    return (
        <div className="w-full h-screen">
            <div className="h-1/2 w-full p-5">
            <div className="w-full h-full  bg-contain rounded-3xl border bg-center" style={{backgroundImage: `url(${(exercises as any)[(workout as any)[exercise].name].image})`}}>

            </div>
            </div>
            <div className="h-1/2 w-full flex flex-col">
                <p className="text-2xl text-center font-medium ">{workout[exercise].name}</p>
                <p className="text-lg text-center text-gray-500 h-7">{workout[exercise].hint}</p>
                <Timer key={exercise + diff + reps + duration} reps={reps} duration={duration} onComplete={() => setExercise(exercise + 1)} />
                <div onClick={() => setExercise(exercise + 1)}>
                    <Box css='flex justify-between items-center' >
                        <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border" style={{backgroundImage: `url(${nextImage})`}}></div>
                        <div className="w-full flex flex-col justify-center p-3 flex-grow">
                            <p className="text-xl font-semibold">{nextExercise.name} <span className="font-normal text-gray-500">{nextExercise.hint}</span></p>
                            <p className="opacity-50">{(nextExercise.duration||nextExercise.reps||['done', 'done', 'done', 'done'])[diff-1]} {nextExercise.duration===undefined?nextExercise.reps===undefined?'':'reps':'sec'}</p>
                        </div>
                        <FastForwardIcon className="h-8 w-8 text-gray-400" />
                    </Box>
                </div>
            </div>
        </div>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { id: "fb" }},
        { params: { id: "tpc" }},
        { params: { id: "tq" }},
        { params: { id: "pp" }},
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

