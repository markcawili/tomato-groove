import React from 'react';
import {useState, useEffect} from "react";
import Modal from "./Modal";

export default function Timer() {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [isActive, setIsActive] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    /*Every time something happens with our seconds we want something to be done in useEffect (render)*/
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (isActive) {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        /*end of timer: start break timer or new session timer*/

                        let minutes = displayMessage ? 24 : 5;
                        let seconds = 0;

                        /*pop up only shows at timer end*/
                        setShowModal(true);

                        setMinutes(minutes);
                        setSeconds(seconds);
                        setDisplayMessage(!displayMessage);
                        setIsActive(false);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }

        }, 1000)
    }, [seconds, isActive])

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="pomodoro">
            <div className="timer">{timerMinutes}:{timerSeconds}</div>
            <button onClick={() => setIsActive(true)}>Start</button>

            {/*Modal is set here and is only opened based on the variables, the function toggleModal is passed along*/}
            <Modal isOpen={showModal} toggleModal={toggleModal}/>
        </div>
    )
}