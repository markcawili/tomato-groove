import React from 'react';
import {useState, useEffect} from "react";

export default function Timer() {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    const [displayMessage, setDisplayMessage] = useState(false);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    /*Every time something happens with our seconds we want something to be done in useEffect (render)*/
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    /*end of timer: start break timer or new timer*/

                    /*pop up comes here*/
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setMinutes(minutes);
                    setSeconds(seconds);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }

        }, 1000)
    }, [seconds])

    return (
        <div className="pomodoro">
            <div className="timer">{timerMinutes}:{timerSeconds}</div>
        </div>
    )
}