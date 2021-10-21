import { useEffect, useState } from "react";

const Timer = (props: {
    duration?: number, 
    reps?: number,
    onComplete: () => void
}) => {
    const [time, setTime] = useState(props.duration || -1);
    const [repsc, setReps] = useState(props.reps || 0);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        if (!isPaused && repsc === 0) {
            const interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, []);
    if(time === 0) {
        props.onComplete();
    }
    return (
        <div className="flex-1 flex justify-center items-center flex-col">
            <p className="text-8xl text-center">{time===-1?repsc:time}</p>
            <p className="text-gray-400 text-center">{time===-1?'reps':'sec'}</p>
        </div>
    );
}

export default Timer;